/* =========================================================
   MLAGENT.JS - TRADUCCIÓN COMPLETA I18N, DICCIONARIO Y CANVAS
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
            heroTitle: "Desarrollo e Investigación de un Agente Autónomo de Combate Vehicular",
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
            sec3Intro: "El diseño de la función de recompensa requirió un ajuste minucioso para evitar mínimos locales (como quedarse inmóvil oscilando o la parálisis ante muros). La función de recompensa total instantánea Rt se formula explícitamente a continuación:",
            formulaHeader: "Ecuación General de Recompensa Instantánea (Rt)",

            sec4Title: "Hiperparámetros de Entrenamiento YAML (PPO)",
            btnCopyCode: "Copiar YAML",

            sec5Title: "Pipeline de Curriculum Learning (5 Fases) y Resultados",
            sec6Title: "Análisis del Self-Play y Evolución del Sistema ELO",
            selfplayTitle: "Coevolución y Dientes de Sierra",
            selfplayText: "Al intercambiar los roles de los equipos cada 100.000 pasos (team_change), la curva de recompensa presenta un patrón característico en dientes de sierra. Cada valle representa la fase donde el nuevo equipo se adapta al oponente congelado, mientras que los picos crecientes de ELO confirman que el modelo se vuelve progresivamente superior.",
            chartTitle: "Progreso ELO Rating vs Iteraciones (Self-Play)",
            btnReloadChart: "Reanimar",

            /* COMPORTAMIENTOS EMERGENTES TRADUCIDOS */
            emergentTitle: "Análisis de Comportamientos Tácticos Emergentes",
            emergentIntro: "Durante las iteraciones de entrenamiento y la coevolución producida por el Self-Play, surgieron patrones tácticos complejos de forma totalmente autónoma, sin necesidad de programar reglas lógicas explícitas:",
            emBehavior1Title: "Seguimiento y Disparo Predictivo: ",
            emBehavior1Desc: "El agente calcula continuamente el vector de velocidad del oponente, anticipando su trayectoria futura para disparar con un ángulo de avance que impacta exactamente en el punto de intercepción.",
            emBehavior2Title: "Espera Táctica en Cobertura: ",
            emBehavior2Desc: "Aprovechando la geometría del entorno, el agente se posiciona detrás de la pared central cuando no tiene ventaja directa, aguardando pacientemente a que el rival asome por el flanco para sorprenderlo con un tiro directo.",
            emBehavior3Title: "Engaño y Amago mediante Trayectoria: ",
            emBehavior3Desc: "El agente ejecuta cambios bruscos de dirección y amagos de avance para inducir al oponente a realizar un disparo precipitadamente hacia una posición vacía.",
            emBehavior4Title: "Gestión de la Economía de Disparo y Cooldown: ",
            emBehavior4Desc: "El agente aprende el ciclo exacto de recarga (150 pasos). Evita disparar sin línea de visión clara para no quedar indefenso e inerme durante el periodo de cooldown.",

            /* CONCLUSIONES TEXTO EXACTO TFG */
            sec7Title: "Conclusiones y Líneas a Futuro",
            sec71Title: "5.1. Análisis Crítico del Grado de Consecución de los Objetivos",
            sec71P1: "El proyecto planteaba como objetivo principal el desarrollo de un agente autónomo de combate capaz de adquirir comportamientos complejos mediante aprendizaje por refuerzo, articulado en una secuencia de subobjetivos de complejidad creciente. A continuación se evalúa el grado de consecución de cada uno de ellos.",
            sec71P2: "La aproximación, alineación y disparo sobre objetivo estático se alcanzó de forma completa y satisfactoria en la primera fase de entrenamiento. El agente convergió a una política estable con recompensa media de +11 y desviación estándar inferior a 1, demostrando un comportamiento consistente y robusto en el entorno más simple.",
            sec71P3: "La evasión de obstáculos y recuperación de línea de visión se alcanzó de forma funcional, aunque con mayor dificultad de la esperada. El proceso de entrenamiento reveló que el diseño inicial del sistema de recompensas incentivaba inadvertidamente la parálisis del agente frente a la pared, requiriendo múltiples iteraciones de rediseño hasta obtener una señal que produjera el comportamiento de rodeo deseado. El objetivo se considera alcanzado, con la matización de que el comportamiento de evasión presentaba cierta variabilidad en función de la posición relativa del obstáculo respecto al objetivo.",
            sec71P4: "El seguimiento de objetivo en movimiento se alcanzó con los mejores resultados del proyecto. La convergencia fue rápida gracias a la transferencia desde la fase anterior, y la desviación estándar excepcionalmente baja de la fase 3 evidenció que el agente desarrolló una política de seguimiento y disparo predictivo altamente consistente.",
            sec71P5: "El self-play competitivo se alcanzó parcialmente. El sistema funcionó correctamente desde el punto de vista técnico, con el ELO alcanzando 1611 puntos y mostrando una tendencia alcista sostenida a lo largo de 1.6 millones de pasos. Sin embargo, la complejidad del entorno de combate presentaba limitaciones inherentes que condicionaron el nivel de sofisticación táctica alcanzable. La arena simétrica con una única pared de posición aleatoria y dos tanques con las mismas capacidades constituye un entorno de complejidad moderada que, si bien fue suficiente para que emergieran comportamientos tácticos genuinos como el engaño mediante movimiento y la gestión del cooldown, no ofrecía la variedad situacional necesaria para desarrollar estrategias de mayor profundidad.",

            sec72Title: "5.2. Principales Aprendizajes del Proyecto",
            sec72P1: "Más allá de los resultados técnicos obtenidos, el desarrollo del proyecto ha generado un conjunto de aprendizajes metodológicos de valor significativo.",
            sec72P2: "El primero y más relevante es que el diseño de la función de recompensa es el componente más crítico y más difícil del aprendizaje por refuerzo aplicado. A diferencia del código convencional, una función de recompensa incorrecta puede producir comportamientos aparentemente razonables que corresponden a mínimos locales explotados por el agente. La única forma de validarla es observar el comportamiento emergente e iterar.",
            sec72P3: "El segundo aprendizaje es la importancia de separar los problemas antes de combinarlos. La estrategia de curriculum learning por fases independientes aceleró la convergencia y facilitó el diagnóstico de problemas sin ambigüedad.",
            sec72P4: "El tercer aprendizaje es que la física del entorno y los parámetros del motor tienen un impacto directo en el aprendizaje. El conflicto entre transform.Rotate y Rigidbody, el Angular Drag o la Layer Collision Matrix requirieron un análisis sistemático crucial.",
            sec72P5: "El cuarto aprendizaje es la naturaleza empírica e iterativa del entrenamiento. Los hiperparámetros y recompensas efectivas se derivaron a través de ciclos continuos de observación y ajuste.",

            sec73Title: "5.3. Líneas a Futuro",
            sec73P1: "El trabajo realizado establece una base técnica sólida sobre la que es posible avanzar en varias direcciones de machine learning de interés creciente, dejando abiertas diferentes puertas a mejoras futuras:",
            future1Title: "Incremento de la complejidad del entorno de combate: ",
            future1Desc: "Diseño de arenas con múltiples obstáculos de geometría variable, zonas de cobertura estructuradas y configuraciones asimétricas que obliguen a desarrollar estrategias adaptativas profundas.",
            future2Title: "Diferenciación de tipos de agentes: ",
            future2Desc: "Introducir perfiles asimétricos (tanques veloces de menor precisión vs tanques lentos de gran alcance) obligando a explotar ventajas específicas.",
            future3Title: "Self-play de mayor rigor competitivo: ",
            future3Desc: "Aumentar el pool de modelos históricos, reducir el ratio de juego contra el modelo actual y ampliar el team_change para enriquecer la coevolución.",
            future4Title: "Introducción de escenarios multiagente cooperativos: ",
            future4Desc: "Entrenar equipos de 2v2 o 3v3 con recompensas compartidas para propiciar tácticas de flanqueo y distracción coordinada.",
            future5Title: "Transferencia a entornos de producción: ",
            future5Desc: "Evaluar la robustez de las políticas ante ruido en observaciones, variaciones geométricas o alteración de velocidades de agentes.",

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
            heroTitle: "Development & Research of an Autonomous Vehicular Combat Agent",
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
            sec3Intro: "Designing the reward function required meticulous tuning to eliminate local minima. The instant total reward function Rt is explicitly formulated below:",
            formulaHeader: "General Instantaneous Reward Equation (Rt)",

            sec4Title: "YAML Training Hyperparameters (PPO)",
            btnCopyCode: "Copy YAML",

            sec5Title: "Progressive Curriculum Learning Pipeline (5 Stages) & Results",
            sec6Title: "Self-Play Analysis & ELO Rating Progress",
            selfplayTitle: "Co-evolution & Sawtooth Pattern",
            selfplayText: "Swapping team roles every 100,000 steps (team_change) produces a characteristic sawtooth reward pattern. Each valley represents the adaptation phase of the new team, while rising ELO peaks confirm that the agent becomes steadily superior.",
            chartTitle: "ELO Rating Progress vs Iterations (Self-Play)",
            btnReloadChart: "Reanimate",

            /* TRANSLATED EMERGENT BEHAVIORS */
            emergentTitle: "Emergent Tactical Behaviors Analysis",
            emergentIntro: "Throughout training iterations and Self-Play co-evolution, complex tactical behaviors emerged fully autonomously without any hardcoded logic:",
            emBehavior1Title: "Predictive Lead Shooting: ",
            emBehavior1Desc: "The agent continuously estimates opponent velocity, predicting future trajectory to shoot at lead angles that strike the target upon interception.",
            emBehavior2Title: "Tactical Waiting Under Cover: ",
            emBehavior2Desc: "Using terrain geometry, the agent takes cover behind the center wall when lacking direct advantage, waiting for the opponent to peek before firing.",
            emBehavior3Title: "Trajectory Deception & Baiting: ",
            emBehavior3Desc: "The agent performs sharp directional changes to bait the enemy into discharging shots prematurely into empty space.",
            emBehavior4Title: "Shot Economy & Cooldown Management: ",
            emBehavior4Desc: "The agent masters the exact 150-step reload cycle, avoiding wasted shots without LOS to prevent remaining defenseless during cooldown.",

            /* SECTION 7 TRANSLATIONS */
            sec7Title: "Conclusions & Future Lines of Work",
            sec71Title: "5.1. Critical Analysis of Objective Achievement",
            sec71P1: "The primary objective was to develop an autonomous combat agent capable of acquiring complex behaviors through reinforcement learning, structured across progressive sub-goals.",
            sec71P2: "Approximation, alignment, and shooting at a static target were fully achieved in Stage 1, reaching a stable policy with +11 mean reward and std < 1.",
            sec71P3: "Obstacle evasion and Line of Sight recovery were achieved functionally. Reward shaping required several iterations to eliminate wall paralysis.",
            sec71P4: "Moving target tracking yielded the best overall performance, showing extremely low variance and consistent lead shooting.",
            sec71P5: "Competitive self-play was partially achieved. The technical architecture performed flawlessly up to 1611 ELO. However, environment simplicity limited higher tactical depth.",

            sec72Title: "5.2. Major Project Learnings",
            sec72P1: "Beyond technical metrics, this research provided valuable methodological learnings.",
            sec72P2: "First, reward function design is the most critical and challenging component of applied RL, requiring continuous observation of emergent behavior.",
            sec72P3: "Second, problem decoupling via Curriculum Learning accelerates convergence and simplifies bug diagnosis.",
            sec72P4: "Third, game engine physics (Rigidbody, Angular Drag, Layer Collisions) directly dictate learning stability.",
            sec72P5: "Fourth, training is inherently empirical and iterative, making detailed decision logging an essential asset.",

            sec73Title: "5.3. Future Lines of Work",
            sec73P1: "This work establishes a solid technical foundation for several promising future directions:",
            future1Title: "Increased Environment Complexity: ",
            future1Desc: "Design structured multi-obstacle arenas with asymmetric cover layouts.",
            future2Title: "Agent Differentiation & Asymmetry: ",
            future2Desc: "Introduce fast/low-range vs slow/long-range tank classes.",
            future3Title: "Rigorously Competitive Self-Play: ",
            future3Desc: "Expand historical model pools and increase team_change steps.",
            future4Title: "Multi-Agent Cooperative Scenarios: ",
            future4Desc: "Train 2v2 or 3v3 teams with shared rewards for coordinated flanking.",
            future5Title: "Production Transfer & Generalization: ",
            future5Desc: "Evaluate policy robustness against observation noise and dynamic terrain changes.",

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
       DATOS REALES DE LAS 5 FASES DEL CURRICULUM
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
                desc: "First contact with physical simulation in open space. The agent learns continuous driving and discrete shooting controls to hit a stationary target.",
                target: "Mean Reward: +11.0 | Standard Dev < 1.0",
                steps: "0.0M - 5.0M Simulation Steps"
            },
            "2": {
                title: "Stage 2: Static Target with Obstacle (Model 25)",
                desc: "A center wall blocks Line of Sight. Controlled via 'obstacle_offset' (1.5 -> 0.1), the agent learns to flank around the wall and re-align upon regaining vision.",
                target: "Mean Reward: +9.0 to +10.0 | Proactive flanking",
                steps: "0.0M - 8.0M Simulation Steps"
            },
            "3": {
                title: "Stage 3: Moving Target without Obstacles (Model 26)",
                desc: "Target moves using random kinematic trajectories. Fed with target velocity vector in its 21D state, the agent learns predictive lead shooting.",
                target: "Mean Reward: +11.25 | Lowest Variance (Std: 0.5)",
                steps: "0.0M - 8.0M Simulation Steps"
            },
            "4": {
                title: "Stage 4: Moving Target with Obstacle (Model 27)",
                desc: "Combining moving target and central wall. 'Tactical waiting under cover' emerges: the agent stays sheltered until target trajectory guarantees clear Line of Sight.",
                target: "Mean Reward: +10.0 | Cover mastery",
                steps: "0.0M - 8.0M Simulation Steps"
            },
            "5": {
                title: "Stage 5: Symmetric 1v1 Self-Play (Model 30)",
                desc: "Competitive 1v1 duels against historic checkpoints in a Model Pool. Shot economy, trajectory deception, and selective sniping emerge.",
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
       DIBUJO DEL GRÁFICO CANVAS CON EJES GRADUADOS
       --------------------------------------------------------- */
    const canvas = document.getElementById("eloCanvas");
    const reloadBtn = document.getElementById("btn-reload-chart");

    if (canvas) {
        const ctx = canvas.getContext("2d");
        let progress = 0;
        let animId;

        const rawPoints = [
            { x: 0.0, y: 1200 },
            { x: 1.5, y: 1270 },
            { x: 3.0, y: 1332 },
            { x: 5.0, y: 1435 },
            { x: 7.0, y: 1611 },
            { x: 8.5, y: 1950 },
            { x: 10.0, y: 2200 }
        ];

        const margin = { left: 50, right: 20, top: 25, bottom: 35 };
        const graphW = canvas.width - margin.left - margin.right;
        const graphH = canvas.height - margin.top - margin.bottom;

        function mapX(val) {
            return margin.left + (val / 10.0) * graphW;
        }

        function mapY(val) {
            return margin.top + graphH - ((val - 1000) / 1400) * graphH;
        }

        function drawChart() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Rejilla y Eje Y
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

            // Eje X
            ctx.textAlign = "center";
            for (let step = 0; step <= 10; step += 2) {
                const xPos = mapX(step);
                ctx.beginPath();
                ctx.moveTo(xPos, margin.top);
                ctx.lineTo(xPos, canvas.height - margin.bottom);
                ctx.stroke();
                ctx.fillText(step + "M", xPos, canvas.height - margin.bottom + 15);
            }

            // Nombres de Ejes
            ctx.fillStyle = "#00ff88";
            ctx.font = "10px sans-serif";
            ctx.fillText("Eje X: Pasos de Simulación (Steps)", margin.left + graphW / 2, canvas.height - 5);

            ctx.save();
            ctx.translate(12, margin.top + graphH / 2);
            ctx.rotate(-Math.PI / 2);
            ctx.fillText("Eje Y: ELO Rating", 0, 0);
            ctx.restore();

            // Curva Animada
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

            // Puntos
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

    /* COPIAR YAML */
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
