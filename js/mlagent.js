/* =========================================================
   MLAGENT.JS - CON ESTRUCTURA DE DICCIONARIO SEPARADA
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* ---------------------------------------------------------
       1. DICCIONARIO DE TRADUCCIÓN (DESAGREGADO)
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

    const dict = {
        es: {
            home: "Inicio",
            about: "Quién soy",
            experience: "Experiencia",
            projects: "Proyectos",
            documents: "Documentos",
            contactButton: "Contacto",
            moreProjects: "Más proyectos",
            btnPdf: "Leer Memoria Técnica (PDF)",
            heroTagline: "Engine-native autonomous combat agent built with Unity ML-Agents and PPO for a 3D tank combat simulation.",

            summaryTitle: "Agente Autónomo de Combate 3D mediante Aprendizaje por Refuerzo Profundo",
            objectivesTitle: "Objetivos del Proyecto",
            objectivesBody: "El objetivo de este proyecto es el de desarrollar un agente capaz de dominar las mecánicas de un simple juego de tanques 3D mediante la herramienta de ML-Agent. El reto reside en que el agente adquiera habilidades competitivas de forma autónoma, sin la necesidad de programar comportamientos lógicos manuales o sistemas basados en reglas.\n\nA su vez se pretende investigar como el Self-Play permite la emergencia de estrategias tácticas complejas en el entorno que serían complejas de codificar de manera tradicional. Enfatizando en una IA que evoluciona adaptándose durante el proceso de entrenamiento.",

            statStepsLabel: "Environment Steps",
            statStepsSub: "Pasos de simulación física",
            statEloLabel: "Peak ELO Rating",
            statEloSub: "Vs pool histórico de modelos",
            statRaycastsLabel: "Perception Sensors",
            statRaycastsSub: "Abanico 3D en tiempo real",
            statCurriculumLabel: "Curriculum Stages",
            statCurriculumSub: "Progresión jerárquica",

            sec1Title: "Formulación del Problema y Proceso de Decisión de Markov (POMDP)",
            sec1Intro: "Para lograr que el agente aprenda sin reglas codificadas a mano, el escenario de combate vehicular se modeló rigurosamente como un Proceso de Decisión de Markov Parcialmente Observable (POMDP) definido por la tupla <S, A, P, R, gamma>:",
            sec1MdpTitle: "Formulación del Entorno",
            
            sec1Mdp1Label: "Espacio de Estados (S):",
            sec1Mdp1Desc: "Representación continua multidimensional con cinemática local, Raycasts y sensores de orientación.",
            sec1Mdp2Label: "Espacio de Acciones (A):",
            sec1Mdp2Desc: "Control híbrido de 3 continuas (tracción, dirección, torreta) y 1 discreta (disparo).",
            sec1Mdp3Label: "Transiciones (P):",
            sec1Mdp3Desc: "Dinámica física de tracción en Unity acelerada para entrenamiento masivo.",
            sec1Mdp4Label: "Recompensas (R):",
            sec1Mdp4Desc: "Función de ajuste continuo mediante ingeniería de recompensas (Reward Shaping).",

            sec1OptTitle: "Objetivo de Optimización",
            sec1OptText: "El agente optimiza una política estocástica parametrizada mediante una red neuronal para maximizar la recompensa acumulada con descuento temporal:",

            sec2Title: "Espacio de Observaciones Vectoriales y Sensores 3D",
            sec2Intro: "Toda la percepción del entorno proviene de sensores locales sobre el tanque, sin acceder a datos globales o tramposos de la simulación.",
            tblCol1: "Índice Vector",
            tblCol2: "Variable Observada",
            tblCol3: "Tipo / Rango",
            tblCol4: "Propósito Técnico",
            tblR1Name: "3D Raycast Perception",
            tblR1Desc: "Detección en abanico de muros, límites y proyectiles.",
            tblR2Name: "Velocidad Lineal Local",
            tblR2Desc: "Inercia cinemática del chasis en ejes locales.",
            tblR3Name: "Velocidad Angular",
            tblR3Desc: "Velocidad de rotación al maniobrar el vehículo.",
            tblR4Name: "Posición Relativa",
            tblR4Desc: "Distancia y vector de posición hacia el oponente.",
            tblR5Name: "Alineación Torreta",
            tblR5Desc: "Diferencial angular entre el cañón y el objetivo.",
            tblR6Name: "Cooldown de Disparo",
            tblR6Desc: "Estado de recarga del cañón principal.",
            tblR7Name: "Salud / Blindaje",
            tblR7Desc: "Porcentaje de salud restante del vehículo.",

            sec3Title: "Algoritmo PPO y Arquitectura Actor-Critic",
            sec3MlpTitle: "Red Neuronal Multicapa (MLP)",
            sec3Mlp1Label: "Input:",
            sec3Mlp1Desc: "Vector normalizado de 27 observaciones.",
            sec3Mlp2Label: "Capas Ocultas:",
            sec3Mlp2Desc: "2 capas densas de 256 neuronas cada una.",
            sec3Mlp3Label: "Actor:",
            sec3Mlp3Desc: "Genera acciones continuas de conducción y decisión discreta de disparo.",
            sec3Mlp4Label: "Critic:",
            sec3Mlp4Desc: "Estima el valor del estado para calcular ventajas acumuladas.",

            sec3PpoTitle: "Optimización PPO Clipped",
            sec3PpoText: "PPO acota las actualizaciones mediante un margen epsilon = 0.2 para garantizar que el entrenamiento no destruya comportamientos útiles previamente consolidados:",

            sec4Title: "Ingeniería de Recompensas (Reward Shaping)",
            formulaTitle: "Función de Recompensa General",

            sec5Title: "Pipeline de Curriculum Learning (4 Fases)",
            phase1Btn: "Fase 1: Locomoción",
            phase2Btn: "Fase 2: Balística",
            phase3Btn: "Fase 3: Coberturas",
            phase4Btn: "Fase 4: Duelo Activo",

            sec6Title: "Competitive Self-Play y Ranking ELO",
            selfplayTitle: "Emergencia de Estrategias con Self-Play",
            selfplayText: "Al enfrentar al agente contra un 'Model Pool' de sus versiones pasadas, se evita la memorización de patrones rígidos. Esto permite la aparición autónoma de tácticas avanzadas como disparar tras muros (peek-a-boo) y mantener ángulos de evasión.",
            chartTitle: "Progreso ELO Rating vs Iteraciones",
            btnReloadChart: "Reanimar",

            sec7Title: "Configuración YAML de Entrenamiento",
            btnCopyCode: "Copiar YAML",

            ctaTitle: "Descarga la Memoria Técnica Completa (PDF)",
            ctaText: "Accede al documento académico con todo el desglose gráfico, curvas de pérdida de TensorBoard y anexos de código en C#.",
            ctaBtn: "Ver Documento PDF Completo →"
        },
        en: {
            home: "Home",
            about: "About Me",
            experience: "Experience",
            projects: "Projects",
            documents: "Documents",
            contactButton: "Contact me",
            moreProjects: "More projects",
            btnPdf: "Read Technical Paper (PDF)",
            heroTagline: "Engine-native autonomous combat agent built with Unity ML-Agents and PPO for a 3D tank combat simulation.",

            summaryTitle: "3D Autonomous Combat Agent via Deep Reinforcement Learning",
            objectivesTitle: "Project Objectives",
            objectivesBody: "The objective of this project is to develop an agent capable of mastering the mechanics of a simple 3D tank game using the ML-Agents toolkit. The challenge lies in enabling the agent to acquire competitive skills autonomously, without hardcoding logical behaviors or rule-based systems.\n\nFurthermore, it aims to investigate how Self-Play facilitates the emergence of complex tactical strategies that would be difficult to code traditionally, emphasizing an AI that adapts and evolves throughout training.",

            statStepsLabel: "Environment Steps",
            statStepsSub: "Physical simulation steps",
            statEloLabel: "Peak ELO Rating",
            statEloSub: "Vs historical model pool",
            statRaycastsLabel: "Perception Sensors",
            statRaycastsSub: "Real-time 3D Raycasts",
            statCurriculumLabel: "Curriculum Stages",
            statCurriculumSub: "Hierarchical progression",

            sec1Title: "Problem Formulation & Markov Decision Process (POMDP)",
            sec1Intro: "To enable the agent to learn without manual rules, the vehicular duel was formally modeled as a Partially Observable Markov Decision Process (POMDP) defined by <S, A, P, R, gamma>:",
            sec1MdpTitle: "Environment Formulation",

            sec1Mdp1Label: "State Space (S):",
            sec1Mdp1Desc: "Multidimensional continuous representation with local kinematics, Raycasts, and orientation sensors.",
            sec1Mdp2Label: "Action Space (A):",
            sec1Mdp2Desc: "Hybrid control of 3 continuous actions (drive, steer, turret) and 1 discrete (fire).",
            sec1Mdp3Label: "Transitions (P):",
            sec1Mdp3Desc: "Physical traction dynamics in Unity accelerated for mass training.",
            sec1Mdp4Label: "Rewards (R):",
            sec1Mdp4Desc: "Continuous shaping function via Reward Shaping engineering.",

            sec1OptTitle: "Optimization Objective",
            sec1OptText: "The agent optimizes a parameterized stochastic policy via a neural network to maximize discounted cumulative return:",

            sec2Title: "Vector Observation Space & 3D Sensors",
            sec2Intro: "All perception stems strictly from local sensors on the tank, with no access to global or omniscient simulation data.",
            tblCol1: "Vector Index",
            tblCol2: "Observed Variable",
            tblCol3: "Type / Range",
            tblCol4: "Technical Purpose",
            tblR1Name: "3D Raycast Perception",
            tblR1Desc: "Fan array detection of walls, boundaries, and projectiles.",
            tblR2Name: "Local Linear Velocity",
            tblR2Desc: "Kinematic inertia of the chassis on local axes.",
            tblR3Name: "Angular Velocity",
            tblR3Desc: "Rotational velocity when maneuvering the vehicle.",
            tblR4Name: "Relative Position",
            tblR4Desc: "Distance and position vector relative to the opponent.",
            tblR5Name: "Turret Alignment",
            tblR5Desc: "Angular differential between cannon and target.",
            tblR6Name: "Shot Cooldown",
            tblR6Desc: "Reload state of the main cannon.",
            tblR7Name: "Health / Armor",
            tblR7Desc: "Percentage of remaining vehicle health.",

            sec3Title: "PPO Algorithm & Actor-Critic Architecture",
            sec3MlpTitle: "Multilayer Perceptron (MLP)",
            sec3Mlp1Label: "Input:",
            sec3Mlp1Desc: "Normalized vector of 27 observations.",
            sec3Mlp2Label: "Hidden Layers:",
            sec3Mlp2Desc: "2 dense layers of 256 units each.",
            sec3Mlp3Label: "Actor:",
            sec3Mlp3Desc: "Outputs continuous driving actions and discrete firing decision.",
            sec3Mlp4Label: "Critic:",
            sec3Mlp4Desc: "Estimates state value to calculate advantage functions.",

            sec3PpoTitle: "Clipped PPO Optimization",
            sec3PpoText: "PPO constrains policy updates within an epsilon = 0.2 margin to ensure training does not destroy previously consolidated behaviors:",

            sec4Title: "Reward Engineering (Reward Shaping)",
            formulaTitle: "General Reward Function",

            sec5Title: "Progressive Curriculum Learning Pipeline (4 Stages)",
            phase1Btn: "Stage 1: Locomotion",
            phase2Btn: "Stage 2: Ballistics",
            phase3Btn: "Stage 3: Cover",
            phase4Btn: "Stage 4: Active Duel",

            sec6Title: "Competitive Self-Play & ELO Ranking",
            selfplayTitle: "Emergence of Strategies with Self-Play",
            selfplayText: "By matching the agent against a Model Pool of past snapshots, pattern memorization is prevented. This enables the autonomous emergence of advanced tactics like peek-a-boo shooting and evasion angles.",
            chartTitle: "ELO Rating Progress vs Iterations",
            btnReloadChart: "Reanimate",

            sec7Title: "YAML Training Configuration",
            btnCopyCode: "Copy YAML",

            ctaTitle: "Download the Full Technical Paper (PDF)",
            ctaText: "Access the academic document complete with TensorBoard loss curves, training diagrams, and C# code appendixes.",
            ctaBtn: "View Full PDF Document →"
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
       2. PESTAÑAS CURRICULUM
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
       3. GRÁFICO ELO EN CANVAS
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

            ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
            ctx.lineWidth = 1;
            for (let y = 20; y < canvas.height; y += 35) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

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
       4. COPIAR YAML
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
