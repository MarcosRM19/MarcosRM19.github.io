const projects = {
    lyra: {
        category: "GAME / LEVEL DESIGN",
        title: "Lyra",
        years: "2025 — 2026",
        tagline: "A narrative-driven game focused on exploration, atmosphere and interaction.",
        description: "Lyra is a university game project developed as part of La Mapachanda and my TFG at ENTI-UB. The project combines gameplay programming, level design and AI systems to create an interactive experience.",
        role: "My role focused on gameplay programming, AI implementation, level design and the design and implementation of the game's core mechanics.",
        taskTitle: "TASK OVERVIEW",
        tasks: [
            "Diseño e implementación de las mecánicas principales y sus interacciones.",
            "Programación de sistemas de gameplay y comportamiento de los enemigos.",
            "Diseño y construcción de niveles orientados a la exploración y progresión del jugador.",
            "Implementación y ajuste de sistemas de inteligencia artificial.",
            "Iteración de las mecánicas a partir de pruebas de juego y feedback.",
            "Colaboración con el resto del equipo durante el desarrollo del proyecto."
        ],
        learningTitle: "Desarrollo de sistemas y diseño mediante iteración",
        learning: [
            "Aprendí a diseñar sistemas de gameplay teniendo en cuenta cómo interactúan entre ellos y cómo afectan a la experiencia del jugador.",
            "Profundicé en la implementación de inteligencia artificial y en la creación de comportamientos para personajes y enemigos.",
            "Mejoré mi capacidad para diseñar niveles a partir de objetivos de gameplay, ritmo y navegación del jugador.",
            "Aprendí a iterar las mecánicas mediante pruebas de juego, detectando problemas y ajustando el diseño.",
            "Trabajé en un proyecto de mayor escala dentro de un equipo, aprendiendo a coordinar programación y diseño con otras disciplinas."
        ],
        contributionsTitle: "Programación, IA y diseño de niveles",
        contributions: [
            {
                title: "Gameplay Programming",
                text: "Implementación de las principales mecánicas de gameplay y sistemas de interacción."
            },
            {
                title: "Artificial Intelligence",
                text: "Diseño e implementación de comportamientos de IA para los personajes y enemigos."
            },
            {
                title: "Level Design",
                text: "Diseño y construcción de niveles teniendo en cuenta exploración, navegación y ritmo."
            }
        ],
        heroVideoId: "YIcgUIwu89U",
        /* Rutas de imágenes ajustadas con ../ */
        hero: "../img/projects/lyra/hero.jpg",
        infoRight1: "../img/projects/lyra/info-right-1.jpg",
        infoRight2: "../img/projects/lyra/info-right-2.jpg",
        screenshot1: "../img/projects/lyra/screenshot-1.jpg",
        screenshot2: "../img/projects/lyra/screenshot-2.jpg",
        screenshot3: "../img/projects/lyra/screenshot-3.jpg",
        screenshot4: "../img/projects/lyra/screenshot-4.jpg",
        itch: "#"
    },

    "juan-pieza": {
        category: "GAME / LEVEL DESIGN",
        title: "Juan Pieza",
        years: "2024 — 2025",
        tagline: "A university game project focused on gameplay programming and level design.",
        description: "Juan Pieza is a university game project developed as part of La Mapachanda. The project allowed me to work across gameplay programming, level design and player experience.",
        role: "My role focused on gameplay programming, level design and the implementation and iteration of the game's main systems.",
        taskTitle: "TASK OVERVIEW",
        tasks: [
            "Diseño e implementación de las mecánicas principales.",
            "Programación de sistemas de gameplay e interacción.",
            "Diseño y construcción de niveles.",
            "Iteración del diseño a partir de pruebas de juego.",
            "Colaboración con el equipo durante las diferentes fases de desarrollo."
        ],
        learningTitle: "Aprender mediante diseño e iteración",
        learning: [
            "Aprendí a transformar ideas de diseño en sistemas jugables.",
            "Mejoré mi capacidad para diseñar niveles pensando en el flujo y la experiencia del jugador.",
            "Aprendí a detectar problemas de gameplay mediante pruebas y a iterar rápidamente.",
            "Trabajé en un entorno de desarrollo colaborativo y aprendí a coordinar diferentes áreas del proyecto."
        ],
        contributionsTitle: "Gameplay y Level Design",
        contributions: [
            {
                title: "Gameplay Programming",
                text: "Implementación de las mecánicas y sistemas necesarios para el funcionamiento del juego."
            },
            {
                title: "Level Design",
                text: "Diseño y construcción de los niveles y espacios jugables."
            },
            {
                title: "Iteration",
                text: "Pruebas, análisis del gameplay y ajustes para mejorar la experiencia del jugador."
            }
        ],
        heroVideoId: "YIcgUIwu89U",
        /* Rutas de imágenes ajustadas con ../ */
        hero: "../img/projects/juan-pieza/hero.jpg",
        infoRight1: "../img/projects/juan-pieza/info-right-1.jpg",
        infoRight2: "../img/projects/juan-pieza/info-right-2.jpg",
        screenshot1: "../img/projects/juan-pieza/screenshot-1.jpg",
        screenshot2: "../img/projects/juan-pieza/screenshot-2.jpg",
        screenshot3: "../img/projects/juan-pieza/screenshot-3.jpg",
        screenshot4: "../img/projects/juan-pieza/screenshot-4.jpg",
        itch: "#"
    }
};

/* --- CONTROL DEL REPRODUCTOR DE YOUTUBE MEDIANTE API --- */
let ytPlayer = null;

function loadYouTubeAPI() {
    if (!window.YT) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
}

function setupHeroVideo(videoId) {
    if (!videoId) return;

    const iframe = document.getElementById("hero-youtube-iframe") || document.querySelector(".hero-video iframe");
    if (!iframe) return;

    // Aseguramos que el iframe tenga ID
    if (!iframe.id) iframe.id = "hero-youtube-iframe";

    // Ocultamos el iframe antes de iniciar
    iframe.classList.remove("is-playing");

    function createOrUpdatePlayer() {
        if (ytPlayer && typeof ytPlayer.loadVideoById === "function") {
            ytPlayer.loadVideoById({ videoId: videoId });
            ytPlayer.mute();
            return;
        }

        ytPlayer = new YT.Player(iframe.id, {
            videoId: videoId,
            playerVars: {
                autoplay: 1,
                controls: 0,
                mute: 1,
                loop: 1,
                playlist: videoId,
                showinfo: 0,
                rel: 0,
                iv_load_policy: 3,
                disablekb: 1,
                playsinline: 1,
                enablejsapi: 1
            },
            events: {
                onReady: (event) => {
                    event.target.mute();
                    event.target.playVideo();
                },
                onStateChange: (event) => {
                    // Cuando el vídeo pasa a reproducción activa (PLAYING = 1)
                    if (event.data === YT.PlayerState.PLAYING) {
                        const targetIframe = document.getElementById(iframe.id);
                        if (targetIframe) {
                            targetIframe.classList.add("is-playing");
                        }
                    }
                }
            }
        });
    }

    if (window.YT && window.YT.Player) {
        createOrUpdatePlayer();
    } else {
        window.onYouTubeIframeAPIReady = createOrUpdatePlayer;
        loadYouTubeAPI();
    }
}

function getProjectId() {
    /* 1. Comprueba si hay parámetro en URL ?project=lyra */
    const params = new URLSearchParams(window.location.search);
    if (params.get("project")) {
        return params.get("project");
    }

    /* 2. Si no hay parámetro, detecta por el nombre del archivo (ej. lyra.html -> lyra) */
    const pathName = window.location.pathname;
    const pageName = pathName.split("/").pop().replace(".html", "");

    return projects[pageName] ? pageName : "lyra";
}

function loadProject() {
    const projectId = getProjectId();
    const project = projects[projectId] || projects.lyra;

    document.title = `${project.title} | MarcosRuiz Portfolio`;

    /* HERO VIDEO VIA YOUTUBE API */
    if (project.heroVideoId) {
        setupHeroVideo(project.heroVideoId);
    }

    /* METADATA HERO */
    const titleHero = document.getElementById("project-title-hero") || document.getElementById("project-logo-fallback");
    if (titleHero) titleHero.textContent = project.title;

    const tagline = document.getElementById("project-tagline");
    if (tagline) tagline.textContent = project.tagline;

    const category = document.getElementById("project-category");
    if (category) category.textContent = project.category;

    const itch = document.getElementById("project-itch");
    if (itch) itch.href = project.itch;

    /* MAIN INFORMATION */
    const title = document.getElementById("project-title");
    if (title) title.textContent = project.title;

    const years = document.getElementById("project-years");
    if (years) years.textContent = project.years;

    const description = document.getElementById("project-description");
    if (description) description.textContent = project.description;

    const role = document.getElementById("project-role");
    if (role) role.textContent = project.role;

    const taskTitle = document.getElementById("project-task-title");
    if (taskTitle) taskTitle.textContent = project.taskTitle;

    /* TASKS */
    const taskList = document.getElementById("project-tasks");
    if (taskList) {
        taskList.innerHTML = "";
        project.tasks.forEach(task => {
            const li = document.createElement("li");
            li.textContent = task;
            taskList.appendChild(li);
        });
    }

    /* PLAY BUTTON */
    const playButton = document.getElementById("project-play");
    if (playButton) {
        playButton.href = project.itch;
        playButton.textContent = "Play on itch.io";
    }

    /* INFO IMAGES */
    const infoRight1 = document.getElementById("project-info-right-1");
    if (infoRight1) {
        infoRight1.src = project.infoRight1;
        infoRight1.alt = `${project.title} screenshot`;
    }

    const infoRight2 = document.getElementById("project-info-right-2");
    if (infoRight2) {
        infoRight2.src = project.infoRight2;
        infoRight2.alt = `${project.title} screenshot`;
    }

    /* SCREENSHOTS */
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

    /* LEARNING */
    const learningTitle = document.getElementById("project-learning-title");
    if (learningTitle) learningTitle.textContent = project.learningTitle;

    const learningList = document.getElementById("project-learning-list");
    if (learningList) {
        learningList.innerHTML = "";
        project.learning.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            learningList.appendChild(li);
        });
    }

    /* CONTRIBUTIONS */
    const contributionsTitle = document.getElementById("project-contributions-title");
    if (contributionsTitle) contributionsTitle.textContent = project.contributionsTitle;

    const contributionsGrid = document.getElementById("project-contributions-grid");
    if (contributionsGrid) {
        contributionsGrid.innerHTML = "";
        project.contributions.forEach(item => {
            const card = document.createElement("article");
            card.className = "contribution-card";

            const heading = document.createElement("h3");
            heading.textContent = item.title;

            const paragraph = document.createElement("p");
            paragraph.textContent = item.text;

            card.appendChild(heading);
            card.appendChild(paragraph);
            contributionsGrid.appendChild(card);
        });
    }

    setupLightbox();
}

function setupLightbox() {
    const lightbox = document.getElementById("project-lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.getElementById("lightbox-close");
    const previousButton = document.getElementById("lightbox-prev");
    const nextButton = document.getElementById("lightbox-next");
    const imageButtons = Array.from(document.querySelectorAll("[data-project-image]"));

    if (
        !lightbox ||
        !lightboxImage ||
        !closeButton ||
        !previousButton ||
        !nextButton ||
        imageButtons.length === 0
    ) {
        return;
    }

    let currentIndex = 0;
    const images = imageButtons
        .map(btn => btn.querySelector("img"))
        .filter(Boolean);

    function updateLightbox(index) {
        currentIndex = index;
        lightboxImage.src = images[currentIndex].src;
        lightboxImage.alt = images[currentIndex].alt;
    }

    function openLightbox(index) {
        updateLightbox(index);
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
    }

    function closeLightbox() {
        lightbox.classList.remove("is-open");
        lightbox.setAttribute("aria-hidden", "true");
    }

    function showPrev() {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        updateLightbox(newIndex);
    }

    function showNext() {
        const newIndex = (currentIndex + 1) % images.length;
        updateLightbox(newIndex);
    }

    imageButtons.forEach((button, index) => {
        button.addEventListener("click", () => openLightbox(index));
    });

    closeButton.onclick = closeLightbox;
    previousButton.onclick = showPrev;
    nextButton.onclick = showNext;

    lightbox.onclick = (e) => {
        if (e.target === lightbox) closeLightbox();
    };

    document.onkeydown = (e) => {
        if (!lightbox.classList.contains("is-open")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
    };
}

document.addEventListener("DOMContentLoaded", loadProject);
