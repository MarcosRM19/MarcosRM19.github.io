/* =========================================================
   SISTEMA DE IDIOMAS Y DATOS DE PROYECTOS (ROBUSTO)
   ========================================================= */

// Manejo seguro de localStorage contra bloqueos de navegador
let currentLang = "es";
try {
    const savedLang = localStorage.getItem("preferredLanguage");
    if (savedLang === "en" || savedLang === "es") {
        currentLang = savedLang;
    }
} catch (e) {
    console.warn("No se pudo acceder a localStorage:", e);
}

const projects = {
    lyra: {
        category: "AI GAME PROGRAMMER",
        title: "Lyra",
        years: "2025 — 2026",
        trailerVideo: "vid/Lyra.mp4",
        youtubeId: "YIcgUIwu89U",
        hero: "img/projects/lyra/hero.jpg",
        infoRight1: "img/projects/lyra/info-right-1.jpg",
        infoRight2: "img/projects/lyra/info-right-2.jpg",
        screenshot1: "img/projects/lyra/screenshot-1.jpg",
        screenshot2: "img/projects/lyra/screenshot-2.jpg",
        screenshot3: "img/projects/lyra/screenshot-3.jpg",
        screenshot4: "img/projects/lyra/screenshot-4.jpg",
        itch: "https://la-mapachanda-studio.itch.io/lyra",

        en: {
            tagline: "A 3D wholesome puzzle-adventure about two baby dragons, built in Unreal Engine 5.",
            description: "Lyra is a 3D wholesome puzzle-adventure developed in Unreal Engine 5 as my Bachelor's Thesis (TFG) at ENTI-UB. I worked as an AI Game Programmer, designing and implementing custom AI systems and an organic locomotion model for the two baby dragon companions. The project won Best TFG at ENTI DemoDay 2026.",
            role: "My role focused on AI gameplay programming, custom locomotion design, multi-agent navigation, and decoupling cognitive logic from physical execution.",
            taskTitle: "TASK OVERVIEW",
            tasks: [
                "Designed a custom Organic Locomotion System using Bézier curves to eliminate rigid pathfinding.",
                "Programmed a NavMesh detection and terrain validation system tailored for organic curve paths.",
                "Built a Decoupled AI Architecture combining FSMs, Behavior Trees, and Blueprint Interfaces.",
                "Developed dynamic navigation and avoidance systems for coordinated multi-agent movement."
            ],
            contributionsTitle: "My Contributions",
            contributionsIntro: "Lyra was my Bachelor's Thesis (TFG), where I took full ownership of the AI design and programming for the two baby dragon companions. The core objective was to break away from standard, linear pathfinding defaults in engines like Unity or Unreal, creating a fluid and expressive sense of life.",
            contributions: [
                {
                    title: "Custom Organic Locomotion System",
                    text: "Designed and programmed S-curve motion paths using Bézier curves, replacing rigid linear interpolation with fluid, lifelike agent movements."
                },
                {
                    title: "Terrain & NavMesh Validation",
                    text: "Developed a real-time point validation pipeline that constantly samples the NavMesh to guarantee agents never step outside walkable boundaries during curve evaluation."
                },
                {
                    title: "Velocity Blending",
                    text: "Implemented dynamic speed blending along procedural curves, ensuring natural acceleration and deceleration through sharp turns and procedural paths."
                },
                {
                    title: "Dual Architecture (Mind & Body)",
                    text: "Engineered a decoupled system separating cognitive decision-making (FSMs & Behavior Trees) from physical locomotion execution, communicating seamlessly via Blueprint Interfaces."
                },
                {
                    title: "Dynamic Navigation & Avoidance",
                    text: "Programmed a centralized manager to process spatial data globally, eliminating redundant per-agent queries and broadcasting pre-processed avoidance data for coordinated movement."
                }
            ],
            learningTitle: "What I Learned",
            learningText: "Developing Lyra pushed me to bridge complex mathematical concepts with practical AI architecture in Unreal Engine 5. I learned how to build custom locomotion models from scratch rather than relying on stock engine defaults, how to decouple cognitive AI logic from physical execution for modular maintainability, and how to optimize multi-agent spatial queries.",
            playBtn: "Play on itch.io"
        },

        es: {
            tagline: "Una aventura de puzles en 3D sobre dos bebés dragón, desarrollada en Unreal Engine 5.",
            description: "Lyra es un juego de aventura y puzles en 3D desarrollado en Unreal Engine 5 como mi Trabajo de Fin de Grado (TFG) en ENTI-UB. Trabajé como AI Game Programmer, diseñando e implementando sistemas de IA y una locomoción orgánica para los dos dragones. Ganó el premio a Mejor TFG en el ENTI DemoDay 2026.",
            role: "Mi rol se centró en la programación de IA, diseño de locomoción personalizada, navegación multi-agente y la separación de la lógica cognitiva de la ejecución física.",
            taskTitle: "RESUMEN DE TAREAS",
            tasks: [
                "Diseño de un sistema de locomoción orgánica personalizado mediante curvas de Bézier.",
                "Programación de un sistema de detección y validación en NavMesh para rutas curvas.",
                "Construcción de una arquitectura de IA desacoplada combinando FSMs y Behavior Trees.",
                "Desarrollo de sistemas de navegación dinámica y evitación de colisiones multi-agente."
            ],
            contributionsTitle: "Mis Contribuciones",
            contributionsIntro: "Lyra fue mi TFG, donde fui responsable del diseño y programación de la inteligencia artificial de los dos dragones. El objetivo principal era alejarse de los movimientos lineales por defecto de motores como Unity o Unreal para lograr una sensación de vida orgánica.",
            contributions: [
                {
                    title: "Sistema de Locomoción Orgánica",
                    text: "Diseñé y programé trayectorias en forma de S mediante curvas de Bézier, sustituyendo la interpolación lineal rígida por movimientos fluidos y naturales."
                },
                {
                    title: "Validación de Terreno y NavMesh",
                    text: "Desarrollé un sistema de validación de puntos a lo largo de las curvas para garantizar que el recorrido del agente no se salga de las zonas transitables del NavMesh."
                },
                {
                    title: "Blend de Velocidades",
                    text: "Implementé un sistema de aceleración y desaceleración dinámica en curvas para mantener un ritmo natural en los giros y cambios de dirección."
                },
                {
                    title: "Arquitectura Dual (Mente y Cuerpo)",
                    text: "Diseñé una arquitectura desacoplada que separa la toma de decisiones (FSMs y Behavior Trees) de la ejecución física, comunicadas mediante interfaces en Blueprints."
                },
                {
                    title: "Navegación Dinámica y Evitación",
                    text: "Programé un sistema centralizado para evitar consultas repetidas por agente, enviando información procesada para coordinar el movimiento de múltiples agentes."
                }
            ],
            learningTitle: "Lo que aprendí",
            learningText: "Desarrollar Lyra me permitió conectar conceptos matemáticos avanzados con la arquitectura de IA en Unreal Engine 5. Aprendí a construir modelos de locomoción propios en lugar de depender de los componentes por defecto, a desacoplar la mente de la ejecución física para mantener un código limpio y a optimizar consultas espaciales en tiempo real.",
            playBtn: "Juega en itch.io"
        }
    },

    "juan-pieza": {
        category: "GAME PROGRAMMER / LEVEL DESIGNER",
        title: "Juan Pieza",
        years: "2024 — 2025",
        trailerVideo: "vid/JuanPieza.mp4",
        youtubeId: "u__7PUv9mbk",
        hero: "img/projects/juan-pieza/hero.jpg",
        infoRight1: "img/projects/juan-pieza/info-right-1.jpg",
        infoRight2: "img/projects/juan-pieza/info-right-2.jpg",
        screenshot1: "img/projects/juan-pieza/screenshot-1.jpg",
        screenshot2: "img/projects/juan-pieza/screenshot-2.jpg",
        screenshot3: "img/projects/juan-pieza/screenshot-3.jpg",
        screenshot4: "img/projects/juan-pieza/screenshot-4.jpg",
        itch: "https://lamapachanda.itch.io/juan-pieza",

        es: {
            tagline: "Un party game 3D multijugador sobre batallas navales, cooperación y caos en alta mar.",
            description: "Juan Pieza es un party game 3D en el que te pones en la piel de un tripulante de barco junto a tus amigos para colaborar, combatir y hundir las naves enemigas en frenéticas batallas en el mar.",
            role: "Mi rol se centró en la programación de las mecánicas e interactivos clave del juego, así como en el diseño de niveles, balanceo de oleadas y la estructuración de la progresión jugable.",
            taskTitle: "RESUMEN DE TAREAS",
            tasks: [
                "Programación de los sistemas base del barco, incluyendo la salud de la nave y las mecánicas de combate.",
                "Diseño e implementación de un sistema de clima dinámico que varía según el nivel, aportando capas adicionales al gameplay.",
                "Diseño y balanceo de las oleadas enemigas para calibrar la dificultad de cada nivel.",
                "Estructuración de la progresión de niveles y de la introducción gradual de nuevas armas y amenazas climáticas."
            ],
            contributionsTitle: "Mis Contribuciones",
            contributionsIntro: "En Juan Pieza combiné la programación de gameplay con el diseño de niveles y el ritmo de progresión, asegurándome de crear una experiencia cooperativa caótica, fluida y divertida.",
            contributions: [
                {
                    title: "Sistemas Base del Barco",
                    text: "Programé la arquitectura principal de la nave, gestionando el sistema de vida y resistencia, así como las dinámicas de combate naval necesarias para la interacción de los jugadores."
                },
                {
                    title: "Sistema de Clima Dinámico",
                    text: "Diseñé e implementé un sistema meteorológico que varía entre niveles, alterando las condiciones del mapa para generar situaciones emergentes y capas tácticas durante la partida."
                },
                {
                    title: "Diseño y Balanceo de Oleadas",
                    text: "Diseñé la composición y frecuencia de las oleadas enemigas por nivel, calibrando la curva de dificultad para mantener la tensión sin frustrar a la tripulación."
                },
                {
                    title: "Sistema de Progresión",
                    text: "Planifiqué la progresión de los niveles racionando la llegada de nuevos tipos de clima y armamento, garantizando un aprendizaje intuitivo y variado."
                }
            ],
            learningTitle: "Lo que aprendí",
            learningText: "Desarrollar Juan Pieza me enseñó a conectar la programación de sistemas con la sensibilidad del diseño de niveles. Aprendí a construir mecánicas sistémicas (como el clima dinámico) para generar jugabilidad emergente en juegos multijugador, a balancear encuentros mediante iteración de oleadas, y a estructurar una progresión en la que la introducción de nuevas herramientas se sienta natural y estimulante dentro de un party game.",
            playBtn: "Juega en itch.io"
        },

        en: {
            tagline: "A 3D multiplayer party game about naval combat, teamwork, and high-seas mayhem.",
            description: "Juan Pieza is a 3D party game where you and your friends board a ship as crewmates, joining forces to fight, navigate, and sink enemy vessels in chaotic naval skirmishes.",
            role: "My role focused on core gameplay programming, level design, enemy wave balancing, and overarching progression structure.",
            taskTitle: "TASK OVERVIEW",
            tasks: [
                "Programmed fundamental ship mechanics, including health/damage tracking and naval combat elements.",
                "Designed and implemented a level-dependent dynamic weather system to add strategic gameplay layers.",
                "Designed and balanced enemy wave spawns across levels to fine-tune the difficulty curve.",
                "Structured level progression and the gradual rollout of new weapons and weather hazards."
            ],
            contributionsTitle: "My Contributions",
            contributionsIntro: "In Juan Pieza, I bridged system programming with level design and progression planning, focusing on delivering a seamless, balanced, and chaotic cooperative experience.",
            contributions: [
                {
                    title: "Core Ship Systems",
                    text: "Programmed the ship's underlying architecture, handling durability logic and combat interactions that allow crewmates to defend their vessel."
                },
                {
                    title: "Dynamic Weather System",
                    text: "Designed and built an environmental system that alters weather conditions per level, introducing emergent challenges and dynamic hazard layers."
                },
                {
                    title: "Enemy Wave Balancing",
                    text: "Designed enemy wave compositions and timings for each stage, calibrating tension to keep matches engaging without overwhelming players."
                },
                {
                    title: "Progression & Pacing",
                    text: "Planned the overarching level progression, pacing the introduction of new weapons and weather hazards to ensure intuitive mechanic learning."
                }
            ],
            learningTitle: "What I Learned",
            learningText: "Working on Juan Pieza taught me to bridge gameplay programming with level design sensibilities. I learned how to build systemic features like dynamic weather to foster emergent multiplayer moments, balance challenge through iterative wave design, and structure progression so that learning new mechanics feels rewarding and intuitive in a party game setting.",
            playBtn: "Play on itch.io"
        }
    }
};

projects["juanpieza"] = projects["juan-pieza"];

function getProjectId() {
    const params = new URLSearchParams(window.location.search);
    let id = params.get("project") || params.get("id");
    if (id) {
        id = id.toLowerCase();
        if (id === "juanpieza") id = "juan-pieza";
        return projects[id] ? id : "lyra";
    }

    const pathName = window.location.pathname;
    let pageName = pathName.split("/").pop().replace(".html", "").toLowerCase();
    if (pageName === "juanpieza") pageName = "juan-pieza";

    return projects[pageName] ? pageName : "lyra";
}

function loadProject() {
    const projectId = getProjectId();
    const project = projects[projectId] || projects.lyra;
    const langData = project[currentLang] || project.es;

    document.title = `${project.title} | MarcosRuiz Portfolio`;

    const langBtn = document.getElementById("language-button");
    if (langBtn) langBtn.textContent = currentLang.toUpperCase();

    /* 1. HERO VIDEO */
    const heroContainer = document.querySelector(".hero-video-container");
    if (heroContainer && project.trailerVideo && !heroContainer.querySelector("video")) {
        heroContainer.innerHTML = `
            <video autoplay loop muted playsinline id="hero-mp4-video">
                <source src="${project.trailerVideo}" type="video/mp4">
            </video>
        `;
        const heroVideo = heroContainer.querySelector("video");
        if (heroVideo) heroVideo.play().catch(e => console.log("Autoplay prevenido:", e));
    }

    /* 2. METADATA HERO */
    const titleHero = document.getElementById("project-title-hero") || document.getElementById("project-logo-fallback");
    if (titleHero) titleHero.textContent = project.title;

    const tagline = document.getElementById("project-tagline");
    if (tagline) tagline.textContent = langData.tagline;

    const category = document.getElementById("project-category");
    if (category) category.textContent = project.category;

    const itch = document.getElementById("project-itch");
    if (itch) itch.href = project.itch;

    /* 3. MAIN INFORMATION */
    const title = document.getElementById("project-title");
    if (title) title.textContent = project.title;

    const years = document.getElementById("project-years");
    if (years) years.textContent = project.years;

    const description = document.getElementById("project-description");
    if (description) description.textContent = langData.description;

    const role = document.getElementById("project-role");
    if (role) role.textContent = langData.role;

    const taskTitle = document.getElementById("project-task-title");
    if (taskTitle) taskTitle.textContent = langData.taskTitle;

    /* TASKS */
    const taskList = document.getElementById("project-tasks");
    if (taskList && Array.isArray(langData.tasks)) {
        taskList.innerHTML = "";
        langData.tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task;
            taskList.appendChild(li);
        });
    }

    /* PLAY BUTTON */
    const playButton = document.getElementById("project-play");
    if (playButton) {
        playButton.href = project.itch;
        playButton.textContent = langData.playBtn;
    }

    /* IMÁGENES ZONA 1 */
    const infoRight1 = document.getElementById("project-info-right-1");
    if (infoRight1) {
        infoRight1.src = project.infoRight1;
        infoRight1.alt = `${project.title} screenshot 1`;
    }

    const infoRight2 = document.getElementById("project-info-right-2");
    if (infoRight2) {
        infoRight2.src = project.infoRight2;
        infoRight2.alt = `${project.title} screenshot 2`;
    }

    /* 4. TRÁILER YOUTUBE */
    const trailerFacade = document.querySelector(".trailer-facade");
    if (trailerFacade && project.youtubeId && !trailerFacade.querySelector("iframe")) {
        trailerFacade.innerHTML = `
            <iframe 
                src="https://www.youtube.com/embed/${project.youtubeId}?controls=1&rel=0&playsinline=1" 
                title="Trailer de ${project.title}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        `;
    }

    /* GALERÍA DE CAPTURAS */
    const screenshots = [
        ["project-screenshot-1", project.screenshot1],
        ["project-screenshot-2", project.screenshot2],
        ["project-screenshot-3", project.screenshot3],
        ["project-screenshot-4", project.screenshot4]
    ];

    screenshots.forEach(([id, src], index) => {
        const image = document.getElementById(id);
        if (image) {
            image.src = src;
            image.alt = `${project.title} screenshot ${index + 1}`;
        }
    });

    /* 5. CONTRIBUTIONS & LEARNING */
    const contribTitle = document.getElementById("contributions-title");
    if (contribTitle) contribTitle.textContent = langData.contributionsTitle;

    const contribIntro = document.getElementById("contributions-intro");
    if (contribIntro) contribIntro.textContent = langData.contributionsIntro || "";

    const contribList = document.getElementById("contribution-list");
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

    const learningTitle = document.getElementById("learning-title");
    if (learningTitle) learningTitle.textContent = langData.learningTitle;

    const learningText = document.getElementById("learning-text");
    if (learningText) learningText.textContent = langData.learningText || "";

    const contribPlay = document.getElementById("contribution-play");
    if (contribPlay) {
        contribPlay.href = project.itch;
        contribPlay.textContent = langData.playBtn;
    }

    setupLightbox();
}

function setupLanguageToggle() {
    const langBtn = document.getElementById("language-button");
    if (!langBtn) return;

    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "es" ? "en" : "es";
        try {
            localStorage.setItem("preferredLanguage", currentLang);
        } catch (e) {
            console.warn("No se pudo guardar en localStorage:", e);
        }
        loadProject();
    });
}

function setupLightbox() {
    const lightbox = document.getElementById("project-lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.getElementById("lightbox-close");
    const previousButton = document.getElementById("lightbox-prev");
    const nextButton = document.getElementById("lightbox-next");
    
    const imageButtons = Array.from(document.querySelectorAll(".ph-shot, .tg-shot"))
        .filter(btn => btn.querySelector("img"));

    if (!lightbox || !lightboxImage || !closeButton || !previousButton || !nextButton || imageButtons.length === 0) {
        return;
    }

    let currentIndex = 0;
    const images = imageButtons.map(btn => btn.querySelector("img"));

    function updateLightbox(index) {
        if (!images[index]) return;
        currentIndex = index;
        lightboxImage.src = images[currentIndex].src;
        lightboxImage.alt = images[currentIndex].alt;
    }

    function openLightbox(index) {
        updateLightbox(index);
        lightbox.classList.add("is-open", "active");
        lightbox.setAttribute("aria-hidden", "false");
    }

    function closeLightbox() {
        lightbox.classList.remove("is-open", "active");
        lightbox.setAttribute("aria-hidden", "true");
    }

    function showPrev() {
        if (images.length === 0) return;
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox(newIndex);
    }

    function showNext() {
        if (images.length === 0) return;
        const newIndex = (currentIndex + 1) % images.length;
        updateLightbox(newIndex);
    }

    imageButtons.forEach((button, index) => {
        button.onclick = () => openLightbox(index);
    });

    closeButton.onclick = closeLightbox;
    previousButton.onclick = showPrev;
    nextButton.onclick = showNext;

    lightbox.onclick = (e) => {
        if (e.target === lightbox) closeLightbox();
    };

    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("is-open") && !lightbox.classList.contains("active")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
    });
}

// Inicialización segura sin importar cuándo cargue el script
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
        loadProject();
        setupLanguageToggle();
    });
} else {
    loadProject();
    setupLanguageToggle();
}
