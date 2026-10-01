/* =========================================================
   PROJECT-TANK.JS - JS EXCLUSIVO PARA EL PROYECTO ML-AGENTS
   ========================================================= */

// 1. Estado de Idioma
let currentLang = "es";
try {
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang === "en" || savedLang === "es") {
        currentLang = savedLang;
    }
} catch (e) {
    console.warn("No se pudo acceder a localStorage:", e);
}

// 2. Traducciones de Interfaz (Navbar y Footer)
const uiTranslations = {
    es: {
        home: "Inicio",
        about: "Quién soy",
        experience: "Experiencia",
        projects: "Proyectos",
        documents: "Documentos",
        contactButton: "Contacto",
        moreProjects: "Más proyectos"
    },
    en: {
        home: "Home",
        about: "About Me",
        experience: "Experience",
        projects: "Projects",
        documents: "Documents",
        contactButton: "Contact me",
        moreProjects: "More projects"
    }
};

// 3. Contenido Completo y Detallado del Proyecto (Basado en la Memoria)
const tankData = {
    category: "AI & GAMEPLAY PROGRAMMER",
    title: "Unity AI MachineLearning",
    years: "2025 — 2026",
    trailerVideo: "vid/Tank.mp4",
    pdfUrl: "https://marcosrm19.github.io/documents/MLAgent.pdf",
    
    infoRight1: "img/projects/tank/info-right-1.jpg",
    infoRight2: "img/projects/tank/info-right-2.jpg",
    screenshot1: "img/projects/tank/screenshot-1.jpg",
    screenshot2: "img/projects/tank/screenshot-2.jpg",
    screenshot3: "img/projects/tank/screenshot-3.jpg",
    screenshot4: "img/projects/tank/screenshot-4.jpg",

    es: {
        tagline: "Agente de combate autónomo en 3D desarrollado con Unity ML-Agents y PPO.",
        description: "Investigación y desarrollo de un agente de combate autónomo en un entorno de simulación física 3D en Unity utilizando Aprendizaje por Refuerzo Profundo (Deep Reinforcement Learning). El proyecto prescinde de arquitecturas tradicionales como Máquinas de Estados Finitos (FSM) o Behavior Trees, haciendo uso del algoritmo Proximal Policy Optimization (PPO), Curriculum Learning progresivo de 4 fases y un ecosistema competitivo de Self-Play.",
        role: "Mi rol abarcó el diseño integral del entorno de simulación, codificación de observaciones vectoriales C#, ingeniería de recompensas (Reward Shaping), pipeline de Curriculum Learning y entrenamiento supervisado mediante TensorBoard.",
        taskTitle: "RESUMEN TÉCNICO Y OBJETIVOS",
        tasks: [
            "Diseño de un Espacio de Observaciones Vectorial 3D combinando 15 Raycasts de percepción y sensores de orientación.",
            "Construcción de un Espacio de Acciones Híbrido (3 salidas continuas para física y 1 discreta para disparo).",
            "Formulación de la función de recompensa equilibrando incentivos densos y dispersos.",
            "Diseño de un pipeline de Curriculum Learning en 4 fases para evitar mínimos locales.",
            "Implementación de Competitive Self-Play con pool de modelos históricos y evaluación ELO."
        ],
        contributionsTitle: "Desglose Técnico Extenso del Trabajo de Investigación",
        contributionsIntro: "El proyecto profundiza en cómo entrenar agentes autónomos complejos dentro de motores de juego modernos sin depender de scripts rígidos. A continuación se desglosan las contribuciones algorítmicas y de arquitectura desarrolladas en la memoria:",
        contributions: [
            {
                title: "1. Arquitectura del Agente, Sensores y Espacios de Entrada/Salida",
                text: "Se diseñó una representación vectorial eficiente para alimentar la red neuronal Actor-Critic en PyTorch. El vector de observaciones incluye 15 Raycasts 3D en abanico para percepción de obstáculos y proyectiles enemigos, vectores de velocidad lineal y angular del chasis, distancia euclídea normalizada al oponente, diferencia angular entre el cañón y la posición enemiga, cooldown de recarga y salud actual. Las salidas son híbridas: 3 acciones continuas para aceleración, giro de chasis y rotación independiente de torreta, y 1 acción discreta para accionar el disparo."
            },
            {
                title: "2. Ingeniería de Recompensas (Reward Shaping Matemático)",
                text: "Para guiar el aprendizaje en las fases iniciales y evitar comportamientos indeseados (como girar sin sentido o hacer spam de disparos) se formuló una función de recompensa equilibrada: R_total = R_hit (+1.0) + R_align (+0.05 * cos(theta)) - R_time (-0.001/step) - R_wall (-0.25) - R_miss (-0.05). Las recompensas densas guían al agente antes de conseguir sus primeros impactos, mientras que las recompensas dispersas dictan la prioridad estratégica final."
            },
            {
                title: "3. Pipeline de Curriculum Learning Progresivo (4 Fases)",
                text: "Se estructuró un pipeline jerárquico de entrenamiento guiado: Fase 1 (Navegación Básica) con objetivo estático; Fase 2 (Apuntado y Tiempo de Vuelo) con objetivo en movimiento no hostil; Fase 3 (Obstáculos y Cobertura Dinámica) con muros opacos; y Fase 4 (Combate Completo y Duelo) con un oponente activo con disparo libre."
            },
            {
                title: "4. Competitive Self-Play y Evaluación ELO",
                text: "En la etapa final se implementó un sistema de Self-Play donde la red entrena contra versiones anteriores de sí misma guardadas en un Model Pool histórico. Se configuró una tasa de actualización del 50% contra la versión más reciente y un 50% contra oponentes aleatorios. Se alcanzó una puntuación final de 1820 puntos ELO tras 5 millones de pasos de simulación."
            },
            {
                title: "5. Configuración de Hiperparámetros y Monitoreo con TensorBoard",
                text: "Ajuste preciso del archivo YAML en Unity ML-Agents: batch_size: 2048, buffer_size: 20480, learning_rate: 0.0003 con decay lineal, entropy_beta: 0.005 para exploración, y clip_epsilon: 0.2 para estabilizar las actualizaciones PPO. Análisis constante de curvas de pérdida en TensorBoard."
            }
        ],
        learningTitle: "Lo que aprendí",
        learningText: "Desarrollar este estudio técnico me permitió conectar la teoría del Aprendizaje por Refuerzo Profundo con la simulación física en tiempo real dentro de Unity. Aprendí la importancia crítica de la formulación de recompensas (Reward Shaping) para evitar comportamientos degenerados, cómo utilizar Curriculum Learning para acelerar el entrenamiento de políticas complejas, y cómo estructurar ecosistemas competitivos mediante Self-Play para lograr que emerjan tácticas de combate orgánicas e impredecibles sin necesidad de programarlas línea a línea en C#.",
        pdfBtnText: "Leer Memoria Técnica (PDF)"
    },

    en: {
        tagline: "3D autonomous combat agent developed with Unity ML-Agents and PPO.",
        description: "Research and development of an autonomous combat agent in a 3D physical simulation environment in Unity using Deep Reinforcement Learning. The project bypasses traditional architectures like FSMs or Behavior Trees, leveraging PPO, 4-phase Curriculum Learning, and Self-Play.",
        role: "My role covered simulation environment design, C# vector observation coding, Reward Shaping engineering, Curriculum Learning pipeline, and TensorBoard supervised training.",
        taskTitle: "TECHNICAL OVERVIEW & OBJECTIVES",
        tasks: [
            "3D Vector Observation Space design combining 15 perception Raycasts and orientation sensors.",
            "Hybrid Action Space construction (3 continuous outputs for movement and 1 discrete for shooting).",
            "Reward function formulation balancing dense and sparse incentives.",
            "4-phase Curriculum Learning pipeline design to avoid local minima.",
            "Competitive Self-Play implementation with historical model pool and ELO evaluation."
        ],
        contributionsTitle: "Extensive Technical Breakdown of the Research Work",
        contributionsIntro: "The project delves into training complex autonomous agents within modern game engines without relying on rigid scripts. Below is the breakdown of algorithmic and architectural contributions:",
        contributions: [
            {
                title: "1. Agent Architecture, Sensors, and Input/Output Spaces",
                text: "Designed an efficient vector representation to feed the Actor-Critic neural network in PyTorch. The observation vector includes 15 3D Raycasts for obstacle/bullet detection, linear/angular velocity, normalized Euclidean distance, turret angle differential, cannon cooldown, and health. Output is hybrid: 3 continuous actions for physical drive and 1 discrete action for firing."
            },
            {
                title: "2. Reward Engineering (Mathematical Reward Shaping)",
                text: "Formulated a balanced reward function to guide early learning and prevent degenerate behavior: R_total = R_hit (+1.0) + R_align (+0.05 * cos(theta)) - R_time (-0.001/step) - R_wall (-0.25) - R_miss (-0.05). Dense rewards guide aiming early on, while sparse rewards set the ultimate strategic goal."
            },
            {
                title: "3. Progressive Curriculum Learning Pipeline (4 Phases)",
                text: "Structured a hierarchical guided training pipeline: Phase 1 (Basic Navigation) with a static target; Phase 2 (Aiming & Flight Time) with a moving non-hostile target; Phase 3 (Obstacles & Dynamic Cover) with opaque walls; and Phase 4 (Full Combat & Duel) facing an active shooting opponent."
            },
            {
                title: "4. Competitive Self-Play and ELO Evaluation",
                text: "Implemented a Self-Play system where the policy trains against historical versions stored in a Model Pool. Configured with a 50% update rate vs latest model and 50% vs random historical opponents, reaching a final score of 1820 ELO points after 5M simulation steps."
            },
            {
                title: "5. Hyperparameter Tuning and TensorBoard Monitoring",
                text: "Precise YAML tuning in Unity ML-Agents: batch_size: 2048, buffer_size: 20480, learning_rate: 0.0003 with linear decay, entropy_beta: 0.005, and clip_epsilon: 0.2 to stabilize PPO updates."
            }
        ],
        learningTitle: "What I Learned",
        learningText: "Developing this technical study allowed me to bridge Deep Reinforcement Learning theory with real-time physical simulation in Unity. I learned the critical importance of Reward Shaping, how to use Curriculum Learning to accelerate policy convergence, and how to structure competitive Self-Play ecosystems so that dynamic combat tactics emerge naturally without hardcoding them in C#.",
        pdfBtnText: "Read Technical Paper (PDF)"
    }
};

// Helper para seleccionar elementos por ID
function getEl(id) {
    return document.getElementById(id);
}

// Carga y renderizado del contenido
function loadTankProject() {
    const langData = tankData[currentLang] || tankData.es;
    const ui = uiTranslations[currentLang] || uiTranslations.es;

    // Document Title & Lang Button
    document.title = `${tankData.title} | MarcosRuiz Portfolio`;
    const langBtn = getEl("language-button");
    if (langBtn) langBtn.textContent = currentLang.toUpperCase();

    // UI (Navbar / Footer data-i18n)
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (ui[key]) el.textContent = ui[key];
    });

    // 1. Hero Video
    const heroContainer = document.querySelector(".hero-video-container");
    if (heroContainer && tankData.trailerVideo) {
        const existingVideo = heroContainer.querySelector("video");
        if (!existingVideo) {
            heroContainer.innerHTML = `
                <video autoplay loop muted playsinline id="hero-mp4-video">
                    <source src="${tankData.trailerVideo}" type="video/mp4">
                </video>
            `;
        }
    }

    // 2. Hero Metadata
    const titleHero = getEl("project-title-hero");
    if (titleHero) titleHero.textContent = tankData.title;

    const tagline = getEl("project-tagline");
    if (tagline) tagline.textContent = langData.tagline;

    const category = getEl("project-category");
    if (category) category.textContent = tankData.category;

    const itch = getEl("project-itch");
    if (itch) itch.href = tankData.pdfUrl;

    // 3. Info Principal
    const title = getEl("project-title");
    if (title) title.textContent = tankData.title;

    const years = getEl("project-years");
    if (years) years.textContent = tankData.years;

    const description = getEl("project-description");
    if (description) description.textContent = langData.description;

    const role = getEl("project-role");
    if (role) role.textContent = langData.role;

    const taskTitle = getEl("project-task-title");
    if (taskTitle) taskTitle.textContent = langData.taskTitle;

    // Tareas
    const taskList = getEl("project-tasks");
    if (taskList && Array.isArray(langData.tasks)) {
        taskList.innerHTML = "";
        langData.tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task;
            taskList.appendChild(li);
        });
    }

    // Botones
    const playButton = getEl("project-play");
    if (playButton) {
        playButton.href = tankData.pdfUrl;
        playButton.textContent = langData.pdfBtnText;
    }

    document.querySelectorAll('a[id^="more-projects-btn"]').forEach(btn => {
        btn.textContent = ui.moreProjects;
    });

    // Imágenes
    const infoRight1 = getEl("project-info-right-1");
    if (infoRight1) infoRight1.src = tankData.infoRight1;

    const infoRight2 = getEl("project-info-right-2");
    if (infoRight2) infoRight2.src = tankData.infoRight2;

    const screenshots = [
        ["project-screenshot-1", tankData.screenshot1],
        ["project-screenshot-2", tankData.screenshot2],
        ["project-screenshot-3", tankData.screenshot3],
        ["project-screenshot-4", tankData.screenshot4]
    ];

    screenshots.forEach(([id, src]) => {
        const img = getEl(id);
        if (img) img.src = src;
    });

    // 4. Contribuciones y Aprendizaje
    const contribTitle = getEl("contributions-title");
    if (contribTitle) contribTitle.textContent = langData.contributionsTitle;

    const contribIntro = getEl("contributions-intro");
    if (contribIntro) contribIntro.textContent = langData.contributionsIntro;

    const contribList = getEl("contribution-list");
    if (contribList && Array.isArray(langData.contributions)) {
        contribList.innerHTML = "";
        langData.contributions.forEach(item => {
            const li = document.createElement("li");
            li.className = "contrib-item";
            li.innerHTML = `
                <div class="contrib-item-title">${item.title}</div>
                <div class="contrib-item-text">${item.text}</div>
            `;
            contribList.appendChild(li);
        });
    }

    const learningTitle = getEl("learning-title");
    if (learningTitle) learningTitle.textContent = langData.learningTitle;

    const learningText = getEl("learning-text");
    if (learningText) learningText.textContent = langData.learningText;

    const contribPlay = getEl("contribution-play");
    if (contribPlay) {
        contribPlay.href = tankData.pdfUrl;
        contribPlay.textContent = langData.pdfBtnText;
    }

    setupLightbox();
}

// Evento de Cambio de Idioma
function setupLanguageToggle() {
    const langBtn = getEl("language-button");
    if (!langBtn) return;

    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "es" ? "en" : "es";
        try {
            localStorage.setItem("preferredLanguage", currentLang);
        } catch (e) {
            console.warn("No se pudo guardar en localStorage:", e);
        }
        loadTankProject();
    });
}

// Lightbox para la Galería
function setupLightbox() {
    const lightbox = document.getElementById("project-lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.getElementById("lightbox-close");
    const previousButton = document.getElementById("lightbox-prev");
    const nextButton = document.getElementById("lightbox-next");

    const imageButtons = Array.from(document.querySelectorAll(".ph-shot, .tg-shot, .trailer-facade"))
        .filter(btn => btn.querySelector("img"));

    if (!lightbox || !lightboxImage || imageButtons.length === 0) return;

    let currentIndex = 0;
    const images = imageButtons.map(btn => btn.querySelector("img"));

    function updateLightbox(index) {
        if (!images[index]) return;
        currentIndex = index;
        lightboxImage.src = images[currentIndex].src;
        lightboxImage.alt = images[currentIndex].alt;
    }

    imageButtons.forEach((button, index) => {
        button.onclick = () => {
            updateLightbox(index);
            lightbox.classList.add("is-open", "active");
            lightbox.setAttribute("aria-hidden", "false");
        };
    });

    if (closeButton) {
        closeButton.onclick = () => {
            lightbox.classList.remove("is-open", "active");
            lightbox.setAttribute("aria-hidden", "true");
        };
    }

    if (previousButton) {
        previousButton.onclick = () => {
            const newIndex = (currentIndex - 1 + images.length) % images.length;
            updateLightbox(newIndex);
        };
    }

    if (nextButton) {
        nextButton.onclick = () => {
            const newIndex = (currentIndex + 1) % images.length;
            updateLightbox(newIndex);
        };
    }

    lightbox.onclick = (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove("is-open", "active");
            lightbox.setAttribute("aria-hidden", "true");
        }
    };
}

// Inicialización
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        loadTankProject();
        setupLanguageToggle();
    });
} else {
    loadTankProject();
    setupLanguageToggle();
}
