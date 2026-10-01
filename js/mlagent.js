/* =========================================================
   MLAGENT.JS - SCRIPT EXCLUSIVO Y DEDICADO PARA MLAgent
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------------------
       1. SISTEMA DE IDIOMAS Y DICCIONARIO
       --------------------------------------------------------- */
    let currentLang = "es";
    try {
        const savedLang = localStorage.getItem("preferredLanguage");
        if (savedLang === "en" || savedLang === "es") {
            currentLang = savedLang;
        }
    } catch (e) {
        console.warn("localStorage no disponible:", e);
    }

    const i18nDict = {
        es: {
            home: "Inicio",
            about: "Quién soy",
            experience: "Experiencia",
            projects: "Proyectos",
            documents: "Documentos",
            contactButton: "Contacto",
            
            navOverview: "1. Resumen & MDP",
            navSensors: "2. Sensores & Vectores",
            navArch: "3. Arquitectura PPO",
            navRewards: "4. Reward Shaping",
            navCurriculum: "5. Curriculum 4 Fases",
            navSelfPlay: "6. Self-Play & ELO",
            navHyper: "7. Hiperparámetros",

            summaryHeading: "Agente Autónomo de Combate 3D Mediante Aprendizaje por Refuerzo Profundo",
            summaryDesc: "Este trabajo aborda el diseño, formulación matemática y entrenamiento de un agente de combate vehicular autónomo operando en simulación física 3D. Prescindiendo por completo de scripts rígidos o árboles de comportamiento (Behavior Trees), el sistema genera tácticas de combate emergentes mediante la optimización de políticas estocásticas con Proximal Policy Optimization (PPO), acelerado por un pipeline jerárquico de Curriculum Learning y consolidado mediante Competitive Self-Play.",
            
            statStepsLabel: "Environment Steps",
            statStepsSub: "Pasos de simulación física",
            statEloLabel: "Peak ELO Rating",
            statEloSub: "Vs pool histórico de modelos",
            statRaycastsLabel: "Perception Sensors",
            statRaycastsSub: "Abanico 3D en tiempo real",
            statCurriculumLabel: "Curriculum Stages",
            statCurriculumSub: "Progresión jerárquica",

            sec1Title: "Formulación del Problema y Proceso de Decisión de Markov (MDP)",
            sec1P1: "En el desarrollo de Inteligencia Artificial para videojuegos de combate 3D, las arquitecturas tradicionales basadas en Máquinas de Estados Finitos (FSM) o Behavior Trees (BT) sufren de extrema rigidez y predictibilidad. Ante entornos donde intervienen la física de tracción, el tiempo de vuelo de los proyectiles y la balística parabólica, codificar manualmente cada reacción resulta inviable o produce agentes fácilmente explotables por un jugador humano.",
            sec1P2: "Para resolver este desafío, el escenario de combate tanque vs. tanque se modeló rigurosamente como un Proceso de Decisión de Markov Parcialmente Observable (POMDP) definido por la tupla <S, A, P, R, gamma>:",
            
            sec2Title: "Espacio de Observaciones Vectoriales y Percepción Sensorial 3D",
            sec2P1: "El agente no utiliza información global ni tramposa del mapa. Toda la percepción del entorno proviene exclusivamente de sensores locales montados sobre el chasis y la torreta del tanque, garantizando un comportamiento realista y transferible.",
            
            sec3Title: "Algoritmo PPO y Arquitectura de la Red Neuronal (Actor-Critic)",
            sec3P1: "Se utilizó el algoritmo Proximal Policy Optimization (PPO) debido a su excepcional estabilidad en espacios de acción continuos y acoplados físicamente. PPO restringe las actualizaciones de la política mediante una función de recorte (clipping), evitando cambios drásticos que destruyan el comportamiento aprendido en iteraciones previas.",
            
            sec4Title: "Ingeniería de Recompensas (Reward Shaping Matemático)",
            sec4P1: "El mayor reto en el Aprendizaje por Refuerzo es prevenir el 'Reward Hacking' o la caída en mínimos locales degenerados (por ejemplo, el agente girando en círculos infinitos para evitar ser golpeado o disparando sin parar). Para lograr la convergencia, se formuló una función de recompensa continua muy cuidada:",
            
            sec5Title: "Pipeline de Curriculum Learning Progresivo (4 Fases)",
            sec5P1: "Intentar entrenar al agente directamente en un combate abierto resulta en un fracaso absoluto por la baja probabilidad de encontrar recompensas aleatorias. Se diseñó un Curriculum Learning dinámico donde las condiciones del mapa evolucionan según el porcentaje de victorias del modelo.",
            
            sec6Title: "Competitive Self-Play y Sistema de Evaluación ELO",
            sec6P1: "Al alcanzar la Fase 4, el agente ya es capaz de derrotar con facilidad a cualquier bot basado en reglas fijas. Para garantizar una mejora continua y evitar el sobreajuste a tácticas concretas, se activó el módulo de Competitive Self-Play.",
            
            sec7Title: "Configuración de Hiperparámetros y Reproducibilidad (YAML)",
            sec7P1: "A continuación se adjunta la configuración exacta del archivo YAML utilizado por el trainer de Unity ML-Agents para garantizar la total reproducibilidad de los resultados expresados en la memoria:",

            ctaTitle: "¿Quieres consultar el documento académico completo de 40 páginas?",
            ctaDesc: "Accede al desglose exhaustivo con análisis teóricos, capturas de pantalla de TensorBoard, esquemas de entrenamiento y anexos de código.",
            ctaBtn: "Descargar Trabajo en PDF completo →",

            btnReloadChart: "Reanimar Gráfico",
            btnCopyCode: "Copiar Configuración"
        },
        en: {
            home: "Home",
            about: "About Me",
            experience: "Experience",
            projects: "Projects",
            documents: "Documents",
            contactButton: "Contact me",

            navOverview: "1. Overview & MDP",
            navSensors: "2. Sensors & Vectors",
            navArch: "3. PPO Architecture",
            navRewards: "4. Reward Shaping",
            navCurriculum: "5. 4-Stage Curriculum",
            navSelfPlay: "6. Self-Play & ELO",
            navHyper: "7. Hyperparameters",

            summaryHeading: "3D Autonomous Combat Agent via Deep Reinforcement Learning",
            summaryDesc: "This research addresses the design, mathematical formulation, and training of an autonomous vehicular combat agent in 3D physics simulation. Bypassing rigid scripts or Behavior Trees, the system fosters emergent tactical behaviors through stochastic policy optimization via Proximal Policy Optimization (PPO), accelerated by a 4-phase Curriculum Learning pipeline and consolidated via Competitive Self-Play.",

            statStepsLabel: "Environment Steps",
            statStepsSub: "Physical simulation steps",
            statEloLabel: "Peak ELO Rating",
            statEloSub: "Vs historical model pool",
            statRaycastsLabel: "Perception Sensors",
            statRaycastsSub: "Real-time 3D Raycasts",
            statCurriculumLabel: "Curriculum Stages",
            statCurriculumSub: "Hierarchical progression",

            sec1Title: "Problem Formulation & Markov Decision Process (MDP)",
            sec1P1: "In 3D combat game AI, traditional Finite State Machines (FSM) or Behavior Trees (BT) suffer from rigidity and predictability. In environments with traction physics, projectile flight times, and parabolic ballistics, manually coding reactions is infeasible or leads to easily exploitable agents.",
            sec1P2: "To solve this, the tank vs tank duel was modeled as a Partially Observable Markov Decision Process (POMDP) defined by <S, A, P, R, gamma>:",

            sec2Title: "Vector Observation Space & 3D Sensory Perception",
            sec2P1: "The agent uses no global or omniscient map data. All perception stems strictly from local sensors mounted on the chassis and turret, guaranteeing realistic and transferable behaviors.",

            sec3Title: "PPO Algorithm & Neural Network Architecture (Actor-Critic)",
            sec3P1: "Proximal Policy Optimization (PPO) was chosen for its exceptional stability in continuous, physics-coupled action spaces. PPO clips policy updates to prevent destructive step changes.",

            sec4Title: "Reward Engineering (Mathematical Reward Shaping)",
            sec4P1: "The primary challenge in DRL is preventing Reward Hacking or local minima traps. A continuous, balanced reward function was formulated to ensure steady convergence:",

            sec5Title: "Progressive Curriculum Learning Pipeline (4 Stages)",
            sec5P1: "Training directly in open combat causes complete failure due to sparse random rewards. A dynamic Curriculum Learning pipeline was designed, evolving map complexity based on win rates.",

            sec6Title: "Competitive Self-Play & ELO Evaluation System",
            sec6P1: "Upon reaching Stage 4, the agent easily defeats rule-based bots. To guarantee continuous adaptation and prevent overfitting, Competitive Self-Play was enabled.",

            sec7Title: "Hyperparameter Tuning & Reproducibility (YAML)",
            sec7P1: "Below is the exact YAML trainer configuration used in Unity ML-Agents to guarantee full reproducibility of the research findings:",

            ctaTitle: "Want to read the full 40-page research paper?",
            ctaDesc: "Access the exhaustive study complete with theoretical analysis, TensorBoard loss curves, training diagrams, and code appendixes.",
            ctaBtn: "Download Full Paper PDF →",

            btnReloadChart: "Reanimate Chart",
            btnCopyCode: "Copy Configuration"
        }
    };

    function updateLanguage() {
        const dict = i18nDict[currentLang] || i18nDict.es;
        const langBtn = document.getElementById("language-button");
        if (langBtn) langBtn.textContent = currentLang.toUpperCase();

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (dict[key]) el.textContent = dict[key];
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
            updateLanguage();
            renderCurriculumPanel(currentCurriculumPhase);
        });
    }

    /* ---------------------------------------------------------
       2. PESTAÑAS INTERACTIVAS DEL CURRICULUM LEARNING
       --------------------------------------------------------- */
    let currentCurriculumPhase = "1";
    const curriculumData = {
        es: {
            "1": {
                title: "Fase 01: Locomoción y Orientación Básica",
                desc: "Escenario libre sin obstáculos. El agente debe aprender a acelerar, frenar y rotar el chasis para aproximarse a un objetivo estático.",
                target: "Alcanzar el objetivo en < 5 segundos",
                steps: "0.5M Steps",
                shaping: "Recompensa densa por reducción de distancia euclídea."
            },
            "2": {
                title: "Fase 02: Apuntado y Balística con Objetivo en Movimiento",
                desc: "Se introduce la torreta orientable de 360°. El objetivo se mueve en patrones no hostiles. El agente aprende a calcular el tiempo de vuelo del proyectil.",
                target: "Alineación de torreta > 85% del tiempo",
                steps: "1.2M Steps",
                shaping: "Recompensa densa por producto escalar cos(theta) de alineación."
            },
            "3": {
                title: "Fase 03: Evasión de Obstáculos y Cobertura Dinámica",
                desc: "Se añaden muros y coberturas opacas. El agente utiliza sus 15 Raycasts para rodear esquinas y buscar líneas de visión despejadas.",
                target: "Superar obstáculos sin colisión en > 90% partidas",
                steps: "2.5M Steps",
                shaping: "Penalización por colisión (-0.25) y bonus por visión directa."
            },
            "4": {
                title: "Fase 04: Duelo Activo y Transición a Competitive Self-Play",
                desc: "Enfrentamiento completo contra oponentes activos con disparo libre. Transición hacia el entrenamiento simétrico contra versiones pasadas del modelo.",
                target: "Winrate > 65% contra el pool histórico",
                steps: "5.0M Steps",
                shaping: "Recompensa dispersa (+1.0 por baja, -0.05 por disparo fallado)."
            }
        },
        en: {
            "1": {
                title: "Stage 01: Locomotion & Basic Orientation",
                desc: "Open arena without obstacles. The agent learns throttle, braking, and chassis rotation to reach a static target.",
                target: "Reach target in < 5 seconds",
                steps: "0.5M Steps",
                shaping: "Dense reward for Euclidean distance reduction."
            },
            "2": {
                title: "Stage 02: Aiming & Ballistics with Moving Target",
                desc: "Introduces 360° turret control. The target moves in non-hostile patterns. The agent calculates projectile flight time.",
                target: "Turret alignment > 85% of episode time",
                steps: "1.2M Steps",
                shaping: "Dense reward for cos(theta) alignment product."
            },
            "3": {
                title: "Stage 03: Obstacle Avoidance & Dynamic Cover",
                desc: "Adds walls and opaque obstacles. The agent uses its 15 Raycasts to navigate corners and secure clear line of sight.",
                target: "Navigate obstacles without collision in > 90% matches",
                steps: "2.5M Steps",
                shaping: "Collision penalty (-0.25) and line of sight bonus."
            },
            "4": {
                title: "Stage 04: Full Combat & Competitive Self-Play",
                desc: "Unrestricted duels against active shooting opponents. Transition to symmetric training against historical model snapshots.",
                target: "Winrate > 65% vs historical pool",
                steps: "5.0M Steps",
                shaping: "Sparse reward (+1.0 per kill, -0.05 per missed shot)."
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
                <h3 class="panel-title">${data.title}</h3>
                <p class="panel-desc">${data.desc}</p>
                <div class="tech-stats-grid">
                    <div class="tech-stat-card">
                        <span class="stat-label">Criterio de Éxito</span>
                        <span class="stat-sub" style="color:#00ff88; font-weight:bold; font-size:0.95rem;">${data.target}</span>
                    </div>
                    <div class="tech-stat-card">
                        <span class="stat-label">Pasos de Entrenamiento</span>
                        <span class="stat-sub" style="color:#ffffff; font-weight:bold; font-size:0.95rem;">${data.steps}</span>
                    </div>
                    <div class="tech-stat-card">
                        <span class="stat-label">Reward Shaping</span>
                        <span class="stat-sub" style="color:#38bdf8; font-weight:bold; font-size:0.95rem;">${data.shaping}</span>
                    </div>
                </div>
            `;
        }
    }

    const currTabBtns = document.querySelectorAll(".curr-tab-btn");
    currTabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            currTabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderCurriculumPanel(btn.getAttribute("data-phase"));
        });
    });

    /* ---------------------------------------------------------
       3. GRÁFICO DINÁMICO EN CANVAS (CURVA ELO TENSORBOARD)
       --------------------------------------------------------- */
    const canvas = document.getElementById("eloCanvas");
    const reloadChartBtn = document.getElementById("btn-reload-chart");

    if (canvas) {
        const ctx = canvas.getContext("2d");
        let animProgress = 0;
        let animId;

        const ppoData = [
            { x: 10, y: 190 }, // 1000 ELO
            { x: 120, y: 160 }, // 1180 ELO
            { x: 230, y: 110 }, // 1450 ELO
            { x: 350, y: 60 },  // 1720 ELO
            { x: 460, y: 30 }   // 1820 ELO
        ];

        const fsmData = [
            { x: 10, y: 190 },
            { x: 120, y: 185 },
            { x: 230, y: 180 },
            { x: 350, y: 178 },
            { x: 460, y: 175 }
        ];

        function drawChart() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Rejilla
            ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
            ctx.lineWidth = 1;
            for (let y = 20; y < canvas.height; y += 40) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Línea FSM Bot (Gris)
            ctx.strokeStyle = "#64748b";
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(fsmData[0].x, fsmData[0].y);
            for (let i = 1; i < fsmData.length; i++) {
                ctx.lineTo(fsmData[i].x, fsmData[i].y);
            }
            ctx.stroke();

            // Línea PPO Agent (Verde con animación)
            ctx.strokeStyle = "#00ff88";
            ctx.lineWidth = 3;
            ctx.shadowColor = "rgba(0, 255, 136, 0.5)";
            ctx.shadowBlur = 8;
            ctx.beginPath();

            const currentX = 10 + (450 * animProgress);
            ctx.moveTo(ppoData[0].x, ppoData[0].y);

            for (let i = 1; i < ppoData.length; i++) {
                if (ppoData[i].x <= currentX) {
                    ctx.lineTo(ppoData[i].x, ppoData[i].y);
                } else {
                    const prev = ppoData[i - 1];
                    const factor = (currentX - prev.x) / (ppoData[i].x - prev.x);
                    const interpY = prev.y + factor * (ppoData[i].y - prev.y);
                    ctx.lineTo(currentX, interpY);
                    break;
                }
            }
            ctx.stroke();
            ctx.shadowBlur = 0;

            if (animProgress < 1) {
                animProgress += 0.025;
                animId = requestAnimationFrame(drawChart);
            }
        }

        drawChart();

        if (reloadChartBtn) {
            reloadChartBtn.addEventListener("click", () => {
                cancelAnimationFrame(animId);
                animProgress = 0;
                drawChart();
            });
        }
    }

    /* ---------------------------------------------------------
       4. BOTÓN COPIAR CÓDIGO YAML
       --------------------------------------------------------- */
    const copyBtn = document.getElementById("btn-copy-code");
    const yamlBlock = document.getElementById("code-yaml-block");

    if (copyBtn && yamlBlock) {
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(yamlBlock.textContent).then(() => {
                copyBtn.textContent = "✓ Copiado";
                setTimeout(() => {
                    copyBtn.textContent = currentLang === "en" ? "Copy Configuration" : "Copiar Configuración";
                }, 2000);
            });
        });
    }

    /* ---------------------------------------------------------
       5. LIGHTBOX DE GALERÍA DE IMÁGENES
       --------------------------------------------------------- */
    const lightbox = document.getElementById("project-lightbox");
    const lightboxImg = document.getElementById("lightbox-image");
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");

    const imageTriggers = Array.from(document.querySelectorAll(".trailer-facade"))
        .filter(btn => btn.querySelector("img"));

    if (lightbox && lightboxImg && imageTriggers.length > 0) {
        let currentIndex = 0;
        const images = imageTriggers.map(btn => btn.querySelector("img"));

        function updateLightbox(index) {
            if (!images[index]) return;
            currentIndex = index;
            lightboxImg.src = images[currentIndex].src;
            lightboxImg.alt = images[currentIndex].alt || "";
        }

        imageTriggers.forEach((btn, index) => {
            btn.onclick = () => {
                updateLightbox(index);
                lightbox.classList.add("is-open", "active");
                lightbox.setAttribute("aria-hidden", "false");
            };
        });

        if (closeBtn) {
            closeBtn.onclick = () => {
                lightbox.classList.remove("is-open", "active");
                lightbox.setAttribute("aria-hidden", "true");
            };
        }

        if (prevBtn) {
            prevBtn.onclick = () => {
                currentIndex = (currentIndex - 1 + images.length) % images.length;
                updateLightbox(currentIndex);
            };
        }

        if (nextBtn) {
            nextBtn.onclick = () => {
                currentIndex = (currentIndex + 1) % images.length;
                updateLightbox(currentIndex);
            };
        }
    }

    // Inicializar traducción y curriculum por defecto
    updateLanguage();
    renderCurriculumPanel("1");
});
