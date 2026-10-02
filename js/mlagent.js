/* =========================================================
   MLAGENT.JS - LÓGICA DE DICCIONARIOS Y CURRICULUM REAL
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
            heroTagline: "Entrenamiento de un agente de combate 3D mediante PPO, Curriculum Learning y Self-Play en Unity ML-Agents.",

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
            sec2Intro: "El vector de observaciones St pertenece a R^21 y fue diseñado para permanecer invariante entre fases de curriculum para evitar tener que reiniciar la red desde cero. Se complementa con un sensor perceptual autónomo de rayos.",

            sec3Title: "Ingeniería de Recompensas (Reward Shaping) y Evolución",
            sec3Intro: "El diseño de la función de recompensa requirió un ajuste minucioso para evitar mínimos locales (como quedarse inmóvil oscilando o la parálisis ante muros). A continuación se muestra la matriz final de recompensas.",

            sec4Title: "Hiperparámetros de Entrenamiento YAML (PPO)",
            btnCopyCode: "Copiar YAML",

            sec5Title: "Pipeline de Curriculum Learning (5 Fases) y Resultados",
            sec6Title: "Análisis del Self-Play y Evolución del Sistema ELO",
            selfplayTitle: "Coevolución y Dientes de Sierra",
            selfplayText: "Al intercambiar los roles de los equipos cada 100.000 pasos (team_change), la curva de recompensa presenta un patrón característico en dientes de sierra. Cada valle representa la fase donde el nuevo equipo se adapta al oponente congelado, mientras que los picos crecientes de ELO confirman que el modelo se vuelve progresivamente superior.",
            chartTitle: "Progreso ELO Rating vs Iteraciones (Self-Play)",
            btnReloadChart: "Reanimar",

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
            heroTagline: "Training an autonomous 3D combat agent using PPO, Curriculum Learning, and Self-Play in Unity ML-Agents.",

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
            sec2Intro: "The 21D state vector St was designed to remain invariant across curriculum stages to prevent resetting network weights. It is complemented by an autonomous ray perception sensor.",

            sec3Title: "Reward Engineering (Reward Shaping) & Evolution",
            sec3Intro: "Designing the reward function required meticulous tuning to eliminate local minima (such as stationary oscillation or wall paralysis). Below is the final reward matrix.",

            sec4Title: "YAML Training Hyperparameters (PPO)",
            btnCopyCode: "Copy YAML",

            sec5Title: "Progressive Curriculum Learning Pipeline (5 Stages) & Results",
            sec6Title: "Self-Play Analysis & ELO Rating Progress",
            selfplayTitle: "Co-evolution & Sawtooth Pattern",
            selfplayText: "Swapping team roles every 100,000 steps (team_change) produces a characteristic sawtooth reward pattern. Each valley represents the adaptation phase of the new team, while rising ELO peaks confirm that the agent becomes steadily superior.",
            chartTitle: "ELO Rating Progress vs Iterations (Self-Play)",
            btnReloadChart: "Reanimate",

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
       DATOS REALES DEL CURRICULUM (5 FASES)
       --------------------------------------------------------- */
    let currentCurriculumPhase = "1";
    const curriculumData = {
        es: {
            "1": {
                title: "Fase 01: Objetivo Estático sin Obstáculo (Modelo 24)",
                desc: "Entrenamiento inicial en arena de 50m x 50m sin muros. El agente aprende aproximación, alineación suave y disparo certero a la distancia adecuada.",
                target: "Recompensa Media: +11.0 | Desviación Estándar < 1.0",
                steps: "5.0M Environment Steps"
            },
            "2": {
                title: "Fase 02: Objetivo Estático con Obstáculo (Modelo 25)",
                desc: "Se introduce una pared intermedia gestionada por obstacle_offset (WallEasy 1.5 -> WallMedium 0.8 -> WallHard 0.3 -> WallFull 0.1). El agente aprende a detectar la pérdida de LOS y rodear el muro.",
                target: "Recompensa Media: +9.0 a +10.0 | Rodeo consistente",
                steps: "8.0M Environment Steps"
            },
            "3": {
                title: "Fase 03: Objetivo en Movimiento sin Obstáculo (Modelo 26)",
                desc: "El objetivo se mueve mediante Rigidbody.MovePosition. Al observar la velocidad del objetivo (obs 10-13), el agente desarrolla capacidad de disparo predictivo.",
                target: "Recompensa Media: +11.25 | Std: 0.5 - 0.8 (Mínima variabilidad)",
                steps: "8.0M Environment Steps"
            },
            "4": {
                title: "Fase 04: Objetivo en Movimiento con Obstáculo (Modelo 27)",
                desc: "Combinación de movimiento y pared. Surge el comportamiento emergente de 'espera táctica en cobertura', manteniéndose en posición hasta que el rival asoma por un flanco.",
                target: "Recompensa Media: +10.0 | Dominio de cobertura",
                steps: "8.0M Environment Steps"
            },
            "5": {
                title: "Fase 05: Self-Play Competitivo 1v1 (Modelo 30)",
                desc: "Dos tanques compiten en escenario simétrico contra un Model Pool histórico. Surge la gestión de economía de disparo, engaño por trayectoria y tiro selectivo.",
                target: "ELO Pico: 1611 a 2200+ | Coevolución continua",
                steps: "10.0M+ Environment Steps"
            }
        },
        en: {
            "1": {
                title: "Stage 01: Static Target without Obstacles (Model 24)",
                desc: "Initial training in a 50m x 50m arena without walls. The agent learns target pursuit, smooth rotational alignment, and precise shooting at effective range.",
                target: "Mean Reward: +11.0 | Std Deviation < 1.0",
                steps: "5.0M Environment Steps"
            },
            "2": {
                title: "Stage 02: Static Target with Obstacle (Model 25)",
                desc: "An intermediate wall is added, controlled by obstacle_offset (1.5 -> 0.1). The agent learns to detect LOS blocking and proactively flank obstacles.",
                target: "Mean Reward: +9.0 to +10.0 | Consistent cover navigation",
                steps: "8.0M Environment Steps"
            },
            "3": {
                title: "Stage 03: Moving Target without Obstacles (Model 26)",
                desc: "Target moves via Rigidbody.MovePosition. Observing target velocity (obs 10-13) enables the agent to develop predictive lead shooting.",
                target: "Mean Reward: +11.25 | Std: 0.5 - 0.8 (Lowest variance)",
                steps: "8.0M Environment Steps"
            },
            "4": {
                title: "Stage 04: Moving Target with Obstacle (Model 27)",
                desc: "Combined movement and obstacle. 'Tactical waiting under cover' emerges naturally, holding position until the opponent peeks around the wall.",
                target: "Mean Reward: +10.0 | Cover mastery",
                steps: "8.0M Environment Steps"
            },
            "5": {
                title: "Stage 05: Competitive 1v1 Self-Play (Model 30)",
                desc: "Two tanks duel in a symmetric arena against a historical Model Pool. Shot economy management, trajectory deception, and selective shooting emerge.",
                target: "Peak ELO: 1611 to 2200+ | Continuous co-evolution",
                steps: "10.0M+ Environment Steps"
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
                        <span class="stat-label">Métrica de Objetivo</span>
                        <span class="stat-sub" style="color:#00ff88; font-weight:bold; font-size:0.9rem;">${data.target}</span>
                    </div>
                    <div class="tech-stat-card">
                        <span class="stat-label">Volumen de Pasos</span>
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
       GRÁFICO ELO EN CANVAS
       --------------------------------------------------------- */
    const canvas = document.getElementById("eloCanvas");
    const reloadBtn = document.getElementById("btn-reload-chart");

    if (canvas) {
        const ctx = canvas.getContext("2d");
        let progress = 0;
        let animId;

        // Puntos basados en los logs de ELO del anexo
        const eloPoints = [
            { x: 10, y: 160 },   // 1200
            { x: 100, y: 145 },  // 1270
            { x: 180, y: 130 },  // 1332
            { x: 260, y: 110 },  // 1435
            { x: 340, y: 75 },   // 1611
            { x: 420, y: 45 },   // 1950
            { x: 460, y: 20 }    // 2200+
        ];

        function drawChart() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Guías horizontales
            ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
            ctx.lineWidth = 1;
            for (let y = 20; y < canvas.height; y += 35) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Dibuja la curva
            ctx.strokeStyle = "#00ff88";
            ctx.lineWidth = 2.5;
            ctx.beginPath();

            const currentX = 10 + (450 * progress);
            ctx.moveTo(eloPoints[0].x, eloPoints[0].y);

            for (let i = 1; i < eloPoints.length; i++) {
                if (eloPoints[i].x <= currentX) {
                    ctx.lineTo(eloPoints[i].x, eloPoints[i].y);
                } else {
                    const prev = eloPoints[i - 1];
                    const factor = (currentX - prev.x) / (eloPoints[i].x - prev.x);
                    const interpY = prev.y + factor * (eloPoints[i].y - prev.y);
                    ctx.lineTo(currentX, interpY);
                    break;
                }
            }
            ctx.stroke();

            if (progress < 1) {
                progress += 0.02;
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
       COPIAR YAML
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
