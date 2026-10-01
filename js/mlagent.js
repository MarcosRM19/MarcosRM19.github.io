/* =========================================================
   MLAGENT.JS - LÓGICA DEDICADA Y REVISADA
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------------------
       1. SISTEMA DE IDIOMAS Y TEXTOS
       --------------------------------------------------------- */
    let currentLang = "es";
    try {
        const savedLang = localStorage.getItem("preferredLanguage");
        if (savedLang === "en" || savedLang === "es") {
            currentLang = savedLang;
        }
    } catch (e) {
        console.warn(e);
    }

    const uiTexts = {
        es: {
            home: "Inicio",
            about: "Quién soy",
            experience: "Experiencia",
            projects: "Proyectos",
            documents: "Documentos",
            contactButton: "Contacto",
            moreProjects: "Más proyectos",
            objectives: "El objetivo de este proyecto es el de desarrollar un agente capaz de dominar las mecánicas de un simple juego de tanques 3D mediante la herramienta de ML-Agent. El reto reside en que el agente adquiera habilidades competitivas de forma autónoma, sin la necesidad de programar comportamientos lógicos manuales o sistemas basados en reglas.\n\nA su vez se pretende investigar como el Self-Play permite la emergencia de estrategias tácticas complejas en el entorno que serían complejas de codificar de manera tradicional. Enfatizando en una IA que evoluciona adaptándose durante el proceso de entrenamiento."
        },
        en: {
            home: "Home",
            about: "About Me",
            experience: "Experience",
            projects: "Projects",
            documents: "Documents",
            contactButton: "Contact me",
            moreProjects: "More projects",
            objectives: "The objective of this project is to develop an agent capable of mastering the mechanics of a simple 3D tank game using the ML-Agents toolkit. The challenge lies in enabling the agent to acquire competitive skills autonomously, without hardcoding logical behaviors or rule-based systems.\n\nFurthermore, it aims to investigate how Self-Play facilitates the emergence of complex tactical strategies that would be difficult to code traditionally, emphasizing an AI that adapts and evolves throughout training."
        }
    };

    function applyLanguage() {
        const dict = uiTexts[currentLang] || uiTexts.es;
        const langBtn = document.getElementById("language-button");
        if (langBtn) langBtn.textContent = currentLang.toUpperCase();

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) el.textContent = dict[key];
        });

        const objText = document.getElementById("project-objectives-text");
        if (objText) objText.innerText = dict.objectives;
    }

    const langBtn = document.getElementById("language-button");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLang = currentLang === "es" ? "en" : "es";
            try {
                localStorage.setItem("preferredLanguage", currentLang);
            } catch (e) {
                console.warn(e);
            }
            applyLanguage();
            renderCurriculumPanel(currentCurriculumPhase);
        });
    }

    /* ---------------------------------------------------------
       2. CURRICULUM LEARNING PESTAÑAS
       --------------------------------------------------------- */
    let currentCurriculumPhase = "1";
    const curriculumData = {
        es: {
            "1": {
                title: "Fase 01: Locomoción y Orientación Básica",
                desc: "Objetivo estático sin muros. El agente aprende aceleración, tracción y giro diferencial del chasis.",
                target: "Llegar al objetivo en < 5s",
                steps: "0.5M Steps"
            },
            "2": {
                title: "Fase 02: Apuntado y Balística Dinámica",
                desc: "Torreta orientable 360°. El objetivo se mueve de forma no hostil para aprender predicción de disparo.",
                target: "Alineación > 85% del tiempo",
                steps: "1.2M Steps"
            },
            "3": {
                title: "Fase 03: Evasión de Obstáculos y Cobertura",
                desc: "Muros opacos en la arena. El agente utiliza los 15 Raycasts 3D para bordear esquinas y buscar tiro.",
                target: "Evitar colisiones > 90% partidas",
                steps: "2.5M Steps"
            },
            "4": {
                title: "Fase 04: Duelo Activo y Self-Play",
                desc: "Combate libre simétrico contra versiones pasadas del modelo extraídas del pool histórico.",
                target: "Winrate > 65% en Self-Play",
                steps: "5.0M Steps"
            }
        },
        en: {
            "1": {
                title: "Stage 01: Locomotion & Basic Orientation",
                desc: "Static target without walls. The agent learns throttle, steering, and chassis traction.",
                target: "Reach target in < 5s",
                steps: "0.5M Steps"
            },
            "2": {
                title: "Stage 02: Aiming & Dynamic Ballistics",
                desc: "360° turret control. Target moves non-hostilely to learn leading shots.",
                target: "Alignment > 85% of time",
                steps: "1.2M Steps"
            },
            "3": {
                title: "Stage 03: Obstacle Avoidance & Cover",
                desc: "Opaque walls in the arena. Agent uses 15 3D Raycasts to corner and seek line of sight.",
                target: "Avoid collisions > 90% matches",
                steps: "2.5M Steps"
            },
            "4": {
                title: "Stage 04: Active Duel & Self-Play",
                desc: "Full symmetric combat against historical model pool snapshots.",
                target: "Winrate > 65% in Self-Play",
                steps: "5.0M Steps"
            }
        }
    };

    function renderCurriculumPanel(phase) {
        currentCurriculumPhase = phase;
        const panel = document.getElementById("curriculum-content-panel");
        const lang = currentLang === "en" ? "en" : "es";
        const data = curriculumData[lang][phase];

        if (panel && data) {
            panel.innerHTML = `
                <h3 style="color:#ffffff; font-size:1.15rem; margin-bottom:8px;">${data.title}</h3>
                <p style="color:#cbd5e1; font-size:0.95rem; margin-bottom:16px;">${data.desc}</p>
                <div class="tech-stats-grid">
                    <div class="tech-stat-card">
                        <span class="stat-label">Criterio</span>
                        <span class="stat-sub" style="color:#00ff88; font-weight:bold;">${data.target}</span>
                    </div>
                    <div class="tech-stat-card">
                        <span class="stat-label">Pasos</span>
                        <span class="stat-sub" style="color:#ffffff; font-weight:bold;">${data.steps}</span>
                    </div>
                </div>
            `;
        }
    }

    document.querySelectorAll(".curr-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".curr-tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderCurriculumPanel(btn.getAttribute("data-phase"));
        });
    });

    /* ---------------------------------------------------------
       3. GRÁFICO ELO CANVAS
       --------------------------------------------------------- */
    const canvas = document.getElementById("eloCanvas");
    const reloadBtn = document.getElementById("btn-reload-chart");

    if (canvas) {
        const ctx = canvas.getContext("2d");
        let progress = 0;
        let animId;

        const ppoPoints = [
            { x: 10, y: 170 },
            { x: 120, y: 140 },
            { x: 230, y: 95 },
            { x: 350, y: 50 },
            { x: 460, y: 25 }
        ];

        function drawChart() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Rejilla
            ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
            ctx.lineWidth = 1;
            for (let y = 20; y < canvas.height; y += 35) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Línea PPO
            ctx.strokeStyle = "#00ff88";
            ctx.lineWidth = 2.5;
            ctx.beginPath();

            const currentX = 10 + (450 * progress);
            ctx.moveTo(ppoPoints[0].x, ppoPoints[0].y);

            for (let i = 1; i < ppoPoints.length; i++) {
                if (ppoPoints[i].x <= currentX) {
                    ctx.lineTo(ppoPoints[i].x, ppoPoints[i].y);
                } else {
                    const prev = ppoPoints[i - 1];
                    const factor = (currentX - prev.x) / (ppoPoints[i].x - prev.x);
                    const interpY = prev.y + factor * (ppoPoints[i].y - prev.y);
                    ctx.lineTo(currentX, interpY);
                    break;
                }
            }
            ctx.stroke();

            if (progress < 1) {
                progress += 0.03;
                animId = requestAnimationFrame(drawChart);
            }
        }

        drawChart();

        if (reloadBtn) {
            reloadBtn.addEventListener("click", () => {
                cancelAnimationFrame(animId);
                progress = 0;
                drawChart();
            });
        }
    }

    /* ---------------------------------------------------------
       4. COPIAR CÓDIGO YAML
       --------------------------------------------------------- */
    const copyBtn = document.getElementById("btn-copy-code");
    const codeBlock = document.getElementById("code-yaml-block");

    if (copyBtn && codeBlock) {
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(codeBlock.textContent).then(() => {
                copyBtn.textContent = "¡Copiado!";
                setTimeout(() => {
                    copyBtn.textContent = "Copiar YAML";
                }, 2000);
            });
        });
    }

    applyLanguage();
    renderCurriculumPanel("1");
});
