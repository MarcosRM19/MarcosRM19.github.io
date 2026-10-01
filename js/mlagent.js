/* =========================================================
   MLAGENT.JS - LÓGICA DEDICADA PARA EL PROYECTO TFG / MLAgent
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    
    /* ---------------------------------------------------------
       1. ARQUITECTURA INTERACTIVA (CLICK & HOVER)
       --------------------------------------------------------- */
    const archBoxes = document.querySelectorAll(".arch-box");
    const panelTitle = document.getElementById("arch-panel-title");
    const panelDesc = document.getElementById("arch-panel-desc");

    const archInfo = {
        "info-observations": {
            title: "Módulo de Entrada: Vectores de Percepción 3D",
            desc: "Combina 15 Raycasts frontales/laterales para detectar colisiones físicas, junto a tensores con la velocidad lineal, angular y distancia euclídea normalizada hacia el oponente."
        },
        "info-ppo": {
            title: "Módulo Central: Red Neuronal PPO (Actor-Critic)",
            desc: "Arquitectura Perceptron Multicapa (MLP) de 2 capas ocultas con 256 unidades cada una. Separa la salida en una política de acción (Actor) y una estimación de valor de estado (Critic)."
        },
        "info-actions": {
            title: "Módulo de Salida: Espacio Híbrido de Acciones",
            desc: "Salidas continuas para el control de física de movimiento (aceleración y giro diferencial) y salidas discretas para la toma de decisión binaria del disparo del cañón."
        }
    };

    archBoxes.forEach(box => {
        box.addEventListener("click", () => {
            archBoxes.forEach(b => b.classList.remove("active"));
            box.classList.add("active");

            const targetKey = box.getAttribute("data-target");
            if (archInfo[targetKey]) {
                panelTitle.textContent = archInfo[targetKey].title;
                panelDesc.textContent = archInfo[targetKey].desc;
            }
        });
    });

    /* ---------------------------------------------------------
       2. CURRICULUM LEARNING - SELECTOR DE ETAPAS
       --------------------------------------------------------- */
    const stageBtns = document.querySelectorAll(".ml-stage-btn");
    const stageDisplay = document.getElementById("stage-content-display");

    const stageData = {
        "1": {
            title: "Fase 01: Navegación y Orientación Básica",
            desc: "El agente aprende a acelerar y rotar el chasis para alcanzar un objetivo estático dentro de la arena sin obstáculos.",
            target: "Llegar al objetivo en < 5 segundos",
            maxSteps: "500,000 steps",
            reward: "Premio denso por reducir distancia euclídea."
        },
        "2": {
            title: "Fase 02: Apuntado Balístico y Mantenimiento de Línea de Visión",
            desc: "Se introduce la torreta orientable de forma independiente. El objetivo se mueve de forma aleatoria sin atacar.",
            target: "Mantener la retícula sobre el objetivo el 80% del tiempo",
            maxSteps: "1,200,000 steps",
            reward: "Premio denso proporcional al producto escalar de orientación."
        },
        "3": {
            title: "Fase 03: Evasión de Obstáculos y Cobertura Dinámica",
            desc: "Se añaden muros y bloques opacos. El agente debe usar sus 3D Raycasts para evitar bloqueos y rodear paredes.",
            target: "Alcanzar e impactar al objetivo sorteando 3 obstáculos",
            maxSteps: "2,500,000 steps",
            reward: "Penalización por colisión (-0.25) y premio por línea de visión clara."
        },
        "4": {
            title: "Fase 04: Combate Activo y Transición a Self-Play",
            desc: "Entorno de duelo completo contra oponentes activos. El agente combina movimiento evasivo, uso de paredes y disparo dinámico.",
            target: "Winrate > 65% contra el pool de versiones históricas",
            maxSteps: "5,000,000 steps",
            reward: "Premio disperso (+1.0 por baja, -0.05 por disparo fallado)."
        }
    };

    function renderStage(stageId) {
        const data = stageData[stageId];
        if (!data) return;

        stageDisplay.innerHTML = `
            <div class="stage-card-detail">
                <h3>${data.title}</h3>
                <p>${data.desc}</p>
                <div class="ml-meta-grid" style="margin-bottom:0;">
                    <div class="ml-meta-card">
                        <span class="ml-meta-label">Criterio de Éxito</span>
                        <span class="ml-meta-value">${data.target}</span>
                    </div>
                    <div class="ml-meta-card">
                        <span class="ml-meta-label">Duración Etapa</span>
                        <span class="ml-meta-value">${data.maxSteps}</span>
                    </div>
                    <div class="ml-meta-card">
                        <span class="ml-meta-label">Reward Shaping</span>
                        <span class="ml-meta-value">${data.reward}</span>
                    </div>
                </div>
            </div>
        `;
    }

    stageBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            stageBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderStage(btn.getAttribute("data-stage"));
        });
    });

    // Cargar Fase 1 por defecto
    renderStage("1");

    /* ---------------------------------------------------------
       3. RENDERIZADO DEL GRÁFICO TENSORBOARD EN CANVAS (ELO)
       --------------------------------------------------------- */
    const canvas = document.getElementById("eloChartCanvas");
    const resetChartBtn = document.getElementById("reset-chart-btn");

    if (canvas) {
        const ctx = canvas.getContext("2d");
        let animationFrame;
        let progress = 0;

        // Puntos de datos (Iteraciones vs ELO)
        const ppoPoints = [
            { x: 20, y: 220 },  // Step 0.5M -> ELO 1000
            { x: 120, y: 190 }, // Step 1.5M -> ELO 1150
            { x: 220, y: 140 }, // Step 2.5M -> ELO 1380
            { x: 340, y: 80 },  // Step 3.8M -> ELO 1650
            { x: 460, y: 40 }   // Step 5.0M -> ELO 1820
        ];

        const baselinePoints = [
            { x: 20, y: 220 },
            { x: 120, y: 210 },
            { x: 220, y: 200 },
            { x: 340, y: 195 },
            { x: 460, y: 190 }
        ];

        function drawChart() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Dibujar rejilla de fondo
            ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
            ctx.lineWidth = 1;
            for (let y = 30; y < canvas.height; y += 40) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Dibujar línea de Bot Base (Gris)
            ctx.strokeStyle = "#64748b";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(baselinePoints[0].x, baselinePoints[0].y);
            for (let i = 1; i < baselinePoints.length; i++) {
                ctx.lineTo(baselinePoints[i].x, baselinePoints[i].y);
            }
            ctx.stroke();

            // Dibujar línea del Agente PPO (Verde Neón con animación)
            ctx.strokeStyle = "#00ff88";
            ctx.lineWidth = 3;
            ctx.shadowColor = "rgba(0, 255, 136, 0.5)";
            ctx.shadowBlur = 10;
            ctx.beginPath();

            const currentMaxX = 20 + (440 * progress);
            ctx.moveTo(ppoPoints[0].x, ppoPoints[0].y);

            for (let i = 1; i < ppoPoints.length; i++) {
                if (ppoPoints[i].x <= currentMaxX) {
                    ctx.lineTo(ppoPoints[i].x, ppoPoints[i].y);
                } else {
                    // Interpolar el último tramo animado
                    const prev = ppoPoints[i - 1];
                    const factor = (currentMaxX - prev.x) / (ppoPoints[i].x - prev.x);
                    const interpY = prev.y + factor * (ppoPoints[i].y - prev.y);
                    ctx.lineTo(currentMaxX, interpY);
                    break;
                }
            }
            ctx.stroke();
            ctx.shadowBlur = 0; // Reset sombra

            if (progress < 1) {
                progress += 0.02;
                animationFrame = requestAnimationFrame(drawChart);
            }
        }

        drawChart();

        if (resetChartBtn) {
            resetChartBtn.addEventListener("click", () => {
                cancelAnimationFrame(animationFrame);
                progress = 0;
                drawChart();
            });
        }
    }

    /* ---------------------------------------------------------
       4. COPIAR CÓDIGO YAML
       --------------------------------------------------------- */
    const copyBtn = document.getElementById("copy-code-btn");
    const codeBlock = document.getElementById("yaml-code-block");

    if (copyBtn && codeBlock) {
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(codeBlock.textContent).then(() => {
                copyBtn.textContent = "¡Copiado!";
                setTimeout(() => {
                    copyBtn.textContent = "Copiar Código";
                }, 2000);
            });
        });
    }

    /* ---------------------------------------------------------
       5. NAVEGACIÓN PEGAJOSA Y HIGHLIGHT EN SCROLL
       --------------------------------------------------------- */
    const jumpLinks = document.querySelectorAll(".ml-jump-links a");
    const sections = document.querySelectorAll(".ml-section");

    window.addEventListener("scroll", () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        jumpLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === `#${current}`) {
                link.classList.add("active");
            }
        });
    });
});
