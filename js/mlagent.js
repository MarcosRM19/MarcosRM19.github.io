/* =========================================================
   MLAGENT.JS - CURRICULUM REAL Y GRÁFICO ELO CON EJES X/Y
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    let currentLang = "es";
    try {
        const savedLang = localStorage.getItem("preferredLanguage");
        if (savedLang === "en" || savedLang === "es") {
            currentLang = savedLang;
        }
    } catch (e) {
        console.warn(e);
    }

    const dict = {
        es: {
            home: "Inicio",
            about: "Quién soy",
            experience: "Experiencia",
            projects: "Proyectos",
            documents: "Documentos",
            contactButton: "Contacto",
            moreProjects: "Más Proyectos",
            btnPdf: "Leer Memoria Técnica (PDF 40 Págs)",
            heroTagline: "Entrenamiento mediante PPO, Curriculum Learning y Self-Play en Unity ML-Agents.",

            summaryTitle: "Desarrollo e Investigación de un Agente Autónomo de Combate Vehicular en Unity",
            objectivesTitle: "Objetivos del Proyecto",
            objectivesBody: "El objetivo de este proyecto es desarrollar un agente capaz de dominar las mecánicas de un juego de tanques 3D mediante la herramienta ML-Agents. El reto reside en que el agente adquiera habilidades competitivas de forma autónoma, sin programar comportamientos lógicos manuales ni máquinas de estados tradicionales.\n\nA su vez, se investiga cómo el Self-Play permite la emergencia de estrategias tácticas complejas (como la gestión de la economía del disparo, la espera táctica en cobertura y el engaño mediante trayectoria) que serían muy difíciles de codificar explícitamente, enfatizando una IA que coevoluciona durante el proceso de entrenamiento.",

            statStepsLabel: "Pasos Totales",
            statStepsSub: "Pasos de simulación física",
            statEloLabel: "Máximo ELO Alcanzado",
            statEloSub: "En fase de Self-Play (Modelo 30)",
            statRaycastsLabel: "Observaciones",
            statRaycastsSub: "+ Ray Perception Sensor 3D",
            statCurriculumLabel: "Curriculum Learning",
            statCurriculumSub: "Modelos mentales 24 al 30",

            sec1Title: "Arquitectura del Sistema y Configuración Física en Unity",
            sec1Intro: "El sistema se articula en torno a cinco componentes orientados a objetos que interactúan mediante eventos de física y referencias directas, comunicándose con el trainer de Python mediante un socket TCP en el puerto 5004.",
            diagram1Title: "Diagrama 1: Arquitectura de Clases C# y Flujo de Comunicación Unity - Python",

            sec2Title: "Diseño del Espacio de Observación (21D) y Acción Híbrido",
            sec2Intro: "El vector de observaciones St pertenece a R^21 y fue diseñado para permanecer estrictamente invariante entre todas las fases de curriculum para evitar tener que reiniciar los pesos de la red neuronal.",

            sec3Title: "Ingeniería de Recompensas (Reward Shaping) y Evolución",
            sec3Intro: "El diseño de la función de recompensa requirió un ajuste minucioso para evitar mínimos locales (como quedarse inmóvil oscilando o la parálisis ante muros). La función de recompensa total instantánea Rt se formula explícitamente a continuación.",

            sec4Title: "Hiperparámetros de Entrenamiento YAML (PPO)",
            btnCopyCode: "Copiar YAML",

            sec5Title: "Pipeline de Curriculum Learning (5 Fases) y Resultados",
            sec6Title: "Análisis del Self-Play y Evolución del Sistema ELO",
            selfplayTitle: "Coevolución y Dientes de Sierra",
            selfplayText: "Al intercambiar los roles de los equipos cada 100.000 pasos (team_change), la curva de recompensa presenta un patrón característico en dientes de sierra. Cada valle representa la fase donde el nuevo equipo se adapta al oponente congelado, mientras que los picos crecientes de ELO confirman que el modelo se vuelve progresivamente superior.",
            chartTitle: "Progreso ELO Rating vs Iteraciones (Self-Play)",
            btnReloadChart: "Reanimar",

            sec7Title: "Conclusiones y Trabajo Futuro",
            conclusionsTitle: "Conclusiones Principales",
            conclusionsText: "1. Eficacia del Curriculum Learning: La división del aprendizaje en 5 fases progresivas permitió resolver un problema de espacio de estados complejo que fallaba sistemáticamente al entrenarse desde cero.\n\n2. Emergencia sin Reglas Manuales: Tácticas avanzadas como la espera en cobertura o el amago de trayectoria surgieron de forma puramente autónoma mediante la combinación de PPO, Curiosidad y Self-Play.\n\n3. Robustez Cinemática: El espacio de observaciones vectorial de 21D enriquecido con el Ray Perception Sensor 3D proporcionó suficiente contexto espacial sin saturar la red.",
            futureTitle: "Líneas de Trabajo Futuro",
            futureText: "• Escenarios Multi-Agente (3v3): Extender el entorno para duelos por equipos utilizando arquitecturas de mapas de atención.\n\n• Entornos Procedurales Destruibles: Generar coberturas dinámicas que puedan destruirse por impactos.\n\n• Terrenos Heterogéneos: Incorporar coeficientes de fricción variables (barro, nieve) para testear la adaptación de la tracción.",

            ctaTitle: "Descarga la Memoria Técnica Completa (PDF)",
            ctaText: "Accede al documento TFG completo de Marcos Ruiz Muñoz (40 páginas) con todos los anexos de código en C#, curvas de TensorBoard y bibliografía.",
            ctaBtn: "Ver Documento PDF Completo (40 Págs) →"
        },
        en: {
            home: "Home",
            about: "About Me",
            experience: "Experience",
            projects: "Projects",
            documents: "Documents",
            contactButton: "Contact",
            moreProjects: "More Projects",
            btnPdf: "Read Technical Paper (PDF 40 Pages)",
            heroTagline: "Training via PPO, Curriculum Learning, and Self-Play in Unity ML-Agents.",

            summaryTitle: "Development & Research of an Autonomous Vehicular Combat Agent in Unity",
            objectivesTitle: "Project Objectives",
            objectivesBody: "The objective of this project is to develop an agent capable of mastering 3D tank mechanics using Unity ML-Agents. The challenge lies in enabling the agent to acquire competitive skills autonomously, without hardcoding manual rules or traditional state machines.\n\nFurthermore, it investigates how Self-Play facilitates the emergence of complex tactical behaviors (such as shot economy management, tactical waiting under cover, and trajectory deception) that would be extremely difficult to code manually, highlighting an AI that co-evolves throughout training.",

            statStepsLabel: "Total Steps",
            statStepsSub: "Physical simulation steps",
            statEloLabel: "Peak ELO Rating",
            statEloSub: "Self-Play stage (Model 30)",
            statRaycastsLabel: "Observations",
            statRaycastsSub: "+ Ray Perception Sensor 3D",
            statCurriculumLabel: "Curriculum Learning",
            statCurriculumSub: "Mental models 24 to 30",

            sec1Title: "System Architecture & Physical Setup in Unity",
            sec1Intro: "The system is structured around five object-oriented components interacting via physics events and direct references, communicating with the Python trainer via a TCP socket on port 5004.",
            diagram1Title: "Diagram 1: C# Class Architecture & Unity-Python Communication Flow",

            sec2Title: "Observation Space Design (21D) & Hybrid Action Space",
            sec2Intro: "The 21D state vector St was designed to remain strictly invariant across all curriculum stages to avoid resetting neural network weights.",

            sec3Title: "Reward Engineering (Reward Shaping) & Evolution",
            sec3Intro: "Designing the reward function required meticulous tuning to eliminate local minima. The instant total reward function Rt is explicitly formulated below.",

            sec4Title: "YAML Training Hyperparameters (PPO)",
            btnCopyCode: "Copy YAML",

            sec5Title: "Progressive Curriculum Learning Pipeline (5 Stages) & Results",
            sec6Title: "Self-Play Analysis & ELO Rating Progress",
            selfplayTitle: "Co-evolution & Sawtooth Pattern",
            selfplayText: "Swapping team roles every 100,000 steps (team_change) produces a characteristic sawtooth reward pattern. Each valley represents the adaptation phase of the new team, while rising ELO peaks confirm that the agent becomes steadily superior.",
            chartTitle: "ELO Rating Progress vs Iterations (Self-Play)",
            btnReloadChart: "Reanimate",

            sec7Title: "Conclusions & Future Work",
            conclusionsTitle: "Key Conclusions",
            conclusionsText: "1. Curriculum Learning Effectiveness: Splitting training into 5 progressive stages solved a complex state space problem that failed when trained from scratch.\n\n2. Emergence without Manual Rules: Advanced tactics like tactical waiting under cover or trajectory deception emerged fully autonomously via PPO, Curiosity, and Self-Play.\n\n3. Kinematic Robustness: The 21D vector observation space combined with 3D Ray Perception provided ideal spatial context.",
            futureTitle: "Future Lines of Work",
            futureText: "• Multi-Agent Scenarios (3v3): Extend the environment to team duels using attention map architectures.\n\n• Destructible Environments: Generate dynamic cover that breaks upon impact.\n\n• Heterogeneous Terrains: Add variable friction coefficients (mud, snow) to test physical traction adaptation.",

            ctaTitle: "Download Full Technical Paper (PDF)",
            ctaText: "Access the complete 40-page TFG paper by Marcos Ruiz Muñoz with C# code appendixes, TensorBoard curves, and references.",
            ctaBtn: "View Full PDF Document (40 Pages) →"
        }
    };

    function applyLanguage() {
        const langData = dict[currentLang] || dict.es;
        const langBtn = document.getElementById("language-button");
        if (langBtn) langBtn.textContent = currentLang.toUpperCase();

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (langData[key]) {
                el.innerText = langData[key];
            }
        });
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
       INFORMACIÓN EXACTA DE LAS 5 FASES DEL CURRICULUM (TFG REAL)
       --------------------------------------------------------- */
    let currentCurriculumPhase = "1";
    const curriculumData = {
        es: {
            "1": {
                title: "Fase 1: Objetivo Estático sin Obstáculo (Modelo 24)",
                desc: "Primer contacto del agente con la simulación física. Se elimina todo tipo de barrera física. El agente aprende a controlar las acciones continuas de aceleración/rotación y la acción discreta de disparo para alinearse y golpear una diana estática.",
                target: "Recompensa Media: +11.0 | Desviación Estándar < 1.0",
                steps: "0.0M - 5.0M Pasos de Simulación"
            },
            "2": {
                title: "Fase 2: Objetivo Estático con Obstáculo (Modelo 25)",
                desc: "Se introduce una pared central que bloquea la línea de visión (LOS). Mediante el parámetro 'obstacle_offset' (1.5 -> 0.1), el obstáculo se estrecha progresivamente. El agente aprende a rodear el muro y reorientar el cañón tras recuperar la visión.",
                target: "Recompensa Media: +9.0 a +10.0 | Rodeo proactivo",
                steps: "0.0M - 8.0M Pasos de Simulación"
            },
            "3": {
                title: "Fase 3: Objetivo en Movimiento sin Obstáculo (Modelo 26)",
                desc: "La diana se desplaza mediante patrones cinemáticos aleatorios. Al recibir en su vector 21D la velocidad del objetivo (obs 10-13), la red neuronal aprende la habilidad del disparo predictivo, disparando hacia donde estará la diana en t+dt.",
                target: "Recompensa Media: +11.25 | Mínima varianza (Std: 0.5)",
                steps: "0.0M - 8.0M Pasos de Simulación"
            },
            "4": {
                title: "Fase 4: Objetivo en Movimiento con Obstáculo (Modelo 27)",
                desc: "Unión de la diana móvil y la pared central. Surge el comportamiento emergente de 'espera táctica en cobertura': el agente permanece resguardado tras la pared hasta que la trayectoria de la diana garantiza una línea de visión directa antes de disparar.",
                target: "Recompensa Media: +10.0 | Dominio de cobertura",
                steps: "0.0M - 8.0M Pasos de Simulación"
            },
            "5": {
                title: "Fase 5: Duelo Simétrico 1v1 con Self-Play (Modelo 30)",
                desc: "Entrenamiento altamente competitivo enfrentando al agente contra versiones anteriores de sí mismo (Model Pool) en un entorno 1v1 simétrico. Emergen tácticas complejas como la gestión del cooldown de disparo, amagos de trayectoria y tiros selectivos.",
                target: "ELO Rating: 1611 a 2200+ | Coevolución ilimitada",
                steps: "0.0M - 10.0M+ Pasos Totales"
            }
        },
        en: {
            "1": {
                title: "Stage 1: Static Target without Obstacles (Model 24)",
                desc: "First contact with the physics simulation in an open arena. The agent learns continuous movement (acceleration/torque) and discrete shooting to align and strike a stationary target.",
                target: "Mean Reward: +11.0 | Standard Dev < 1.0",
                steps: "0.0M - 5.0M Simulation Steps"
            },
            "2": {
                title: "Stage 2: Static Target with Obstacle (Model 25)",
                desc: "A central wall is introduced blocking line of sight (LOS). Controlled via 'obstacle_offset' (1.5 -> 0.1), the agent learns to flank around the wall and re-align upon regaining LOS.",
                target: "Mean Reward: +9.0 to +10.0 | Proactive flanking",
                steps: "0.0M - 8.0M Simulation Steps"
            },
            "3": {
                title: "Stage 3: Moving Target without Obstacles (Model 26)",
                desc: "The target moves using random kinematic trajectories. Fed with target velocity vector in its 21D observation state, the agent learns predictive lead shooting toward future position.",
                target: "Mean Reward: +11.25 | Lowest Variance (Std: 0.5)",
                steps: "0.0M - 8.0M Simulation Steps"
            },
            "4": {
                title: "Stage 4: Moving Target with Obstacle (Model 27)",
                desc: "Combination of a moving target and central wall. 'Tactical waiting under cover' emerges: the agent remains protected behind the wall until target trajectory guarantees a clean line of sight.",
                target: "Mean Reward: +10.0 | Cover mastery",
                steps: "0.0M - 8.0M Simulation Steps"
            },
            "5": {
                title: "Stage 5: Symmetric 1v1 Self-Play (Model 30)",
                desc: "Competitive 1v1 duels against historic checkpoints in a Model Pool. Advanced behaviors emerge: shot economy management, trajectory baiting, and high-precision sniping.",
                target: "ELO Rating: 1611 to 2200+ | Continuous co-evolution",
                steps: "0.0M - 10.0M+ Total Steps"
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
                <p style="color:#cbd5e1; font-size:0.95rem; margin-bottom:16px; line-height:1.6;">${data.desc}</p>
                <div class="tech-stats-grid">
                    <div class="tech-stat-card">
                        <span class="stat-label">Métrica de Rendimiento</span>
                        <span class="stat-sub" style="color:#00ff88; font-weight:bold; font-size:0.9rem;">${data.target}</span>
                    </div>
                    <div class="tech-stat-card">
                        <span class="stat-label">Pasos de Entrenamiento</span>
                        <span class="stat-sub" style="color:#ffffff; font-weight:bold; font-size:0.9rem;">${data.steps}</span>
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
       DIBUJO DEL GRÁFICO CANVAS CON EJES X e Y DETALLADOS
       --------------------------------------------------------- */
    const canvas = document.getElementById("eloCanvas");
    const reloadBtn = document.getElementById("btn-reload-chart");

    if (canvas) {
        const ctx = canvas.getContext("2d");
        let progress = 0;
        let animId;

        // Puntos reales del TFG: X = M_Steps (0 a 10M), Y = ELO (1000 a 2400)
        const rawPoints = [
            { x: 0.0, y: 1200 },
            { x: 1.5, y: 1270 },
            { x: 3.0, y: 1332 },
            { x: 5.0, y: 1435 },
            { x: 7.0, y: 1611 },
            { x: 8.5, y: 1950 },
            { x: 10.0, y: 2200 }
        ];

        // Márgenes para dibujar ejes numéricos
        const margin = { left: 50, right: 20, top: 25, bottom: 35 };
        const graphW = canvas.width - margin.left - margin.right;
        const graphH = canvas.height - margin.top - margin.bottom;

        function mapX(val) {
            return margin.left + (val / 10.0) * graphW;
        }

        function mapY(val) {
            // Rango Y: 1000 a 2400
            return margin.top + graphH - ((val - 1000) / 1400) * graphH;
        }

        function drawChart() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // 1. Dibujar Rejilla y Eje Y (ELO Rating)
            ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
            ctx.lineWidth = 1;
            ctx.fillStyle = "#94a3b8";
            ctx.font = "10px 'Fira Code', monospace";
            ctx.textAlign = "right";

            for (let elo = 1000; elo <= 2400; elo += 350) {
                const yPos = mapY(elo);
                ctx.beginPath();
                ctx.moveTo(margin.left, yPos);
                ctx.lineTo(canvas.width - margin.right, yPos);
                ctx.stroke();
                ctx.fillText(elo.toString(), margin.left - 8, yPos + 3);
            }

            // 2. Dibujar Eje X (Pasos en Millones)
            ctx.textAlign = "center";
            for (let step = 0; step <= 10; step += 2) {
                const xPos = mapX(step);
                ctx.beginPath();
                ctx.moveTo(xPos, margin.top);
                ctx.lineTo(xPos, canvas.height - margin.bottom);
                ctx.stroke();
                ctx.fillText(step + "M", xPos, canvas.height - margin.bottom + 15);
            }

            // Etiquetas de Ejes
            ctx.fillStyle = "#00ff88";
            ctx.font = "10px sans-serif";
            ctx.fillText("Eje X: Pasos de Simulación (Steps)", margin.left + graphW / 2, canvas.height - 5);

            ctx.save();
            ctx.translate(12, margin.top + graphH / 2);
            ctx.rotate(-Math.PI / 2);
            ctx.fillText("Eje Y: ELO Rating", 0, 0);
            ctx.restore();

            // 3. Dibujar Curva Animada
            ctx.strokeStyle = "#00ff88";
            ctx.lineWidth = 2.5;
            ctx.beginPath();

            const currentMaxX = 10.0 * progress;
            let first = true;

            for (let i = 0; i < rawPoints.length; i++) {
                const pt = rawPoints[i];
                if (pt.x <= currentMaxX) {
                    const px = mapX(pt.x);
                    const py = mapY(pt.y);
                    if (first) {
                        ctx.moveTo(px, py);
                        first = false;
                    } else {
                        ctx.lineTo(px, py);
                    }
                } else {
                    const prev = rawPoints[i - 1];
                    const factor = (currentMaxX - prev.x) / (pt.x - prev.x);
                    const interpY = prev.y + factor * (pt.y - prev.y);
                    ctx.lineTo(mapX(currentMaxX), mapY(interpY));
                    break;
                }
            }
            ctx.stroke();

            // Dibujar Puntos
            for (let i = 0; i < rawPoints.length; i++) {
                if (rawPoints[i].x <= currentMaxX) {
                    const px = mapX(rawPoints[i].x);
                    const py = mapY(rawPoints[i].y);
                    ctx.fillStyle = "#ffffff";
                    ctx.beginPath();
                    ctx.arc(px, py, 3.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            if (progress < 1) {
                progress += 0.015;
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
       COPIAR CÓDIGO YAML
       --------------------------------------------------------- */
    const copyBtn = document.getElementById("btn-copy-code");
    const codeBlock = document.getElementById("code-yaml-block");

    if (copyBtn && codeBlock) {
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(codeBlock.textContent).then(() => {
                copyBtn.textContent = currentLang === "en" ? "Copied!" : "¡Copiado!";
                setTimeout(() => {
                    copyBtn.textContent = currentLang === "en" ? "Copy YAML" : "Copiar YAML";
                }, 2000);
            });
        });
    }

    applyLanguage();
    renderCurriculumPanel("1");
});
