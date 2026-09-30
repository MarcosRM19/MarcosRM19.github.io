/* =========================================================
   MARCOSRUIZ PORTFOLIO
   PROJECT.JS
   ========================================================= */


/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = {

    lyra: {

        id: "lyra",

        category: {
            es: "IA DE JUEGO · GAME & LEVEL DESIGN",
            en: "GAME AI · GAME & LEVEL DESIGN"
        },

        title: {
            es: "Lyra",
            en: "Lyra"
        },

        years: "2025 — 2026",

        tagline: {
            es: "Proyecto de investigación y desarrollo centrado en IA de juego, diseño de niveles y análisis de comportamiento.",
            en: "A research and development project focused on game AI, level design and behavioural analysis."
        },

        description: {
            es: "Lyra es un proyecto desarrollado dentro de La Mapachanda como TFG en ENTI-UB. El proyecto explora la relación entre inteligencia artificial, diseño de niveles y toma de decisiones del jugador dentro de Unreal Engine 5.",
            en: "Lyra is a project developed within La Mapachanda as a final degree project at ENTI-UB. It explores the relationship between artificial intelligence, level design and player decision-making inside Unreal Engine 5."
        },

        role: {
            es: "<strong>Mi rol:</strong> AI Game Programmer, Game Designer y Level Designer.",
            en: "<strong>My role:</strong> AI Game Programmer, Game Designer and Level Designer."
        },

        taskTitle: {
            es: "Task Overview",
            en: "Task Overview"
        },

        tasks: [
            {
                title: "Gameplay",
                es: "Diseño e implementación de las mecánicas principales y sus interacciones.",
                en: "Design and implementation of the main gameplay mechanics and their interactions."
            },
            {
                title: "Level Design",
                es: "Diseño de las salas y progresión siguiendo una estructura EDPV.",
                en: "Design of rooms and progression following an EDPV structure."
            },
            {
                title: "AI / C++",
                es: "Programación y captura de datos dentro de Unreal Engine 5.",
                en: "Programming and data capture inside Unreal Engine 5."
            },
            {
                title: "Research",
                es: "Diseño de pruebas, análisis estadístico y validación de decisiones de diseño.",
                en: "Test design, statistical analysis and validation of design decisions."
            }
        ],

        contributionsTitle: {
            es: "Contribuciones",
            en: "Contributions"
        },

        contributionsIntro: {
            es: "Durante el desarrollo del proyecto trabajé principalmente en sistemas de IA, gameplay, diseño de niveles y herramientas de análisis.",
            en: "During development I mainly worked on AI systems, gameplay, level design and analysis tools."
        },

        contributions: [
            {
                title: {
                    es: "Gameplay",
                    en: "Gameplay"
                },
                text: {
                    es: "Diseño e implementación de las mecánicas principales y su integración con los sistemas de IA.",
                    en: "Design and implementation of the main mechanics and their integration with the AI systems."
                }
            },
            {
                title: {
                    es: "Level Design",
                    en: "Level Design"
                },
                text: {
                    es: "Diseño de espacios, recorridos y progresión para apoyar los objetivos de investigación.",
                    en: "Design of spaces, routes and progression to support the research goals."
                }
            },
            {
                title: {
                    es: "AI / C++",
                    en: "AI / C++"
                },
                text: {
                    es: "Programación de comportamientos y sistemas de inteligencia artificial utilizando Unreal Engine 5.",
                    en: "Programming behaviours and artificial intelligence systems using Unreal Engine 5."
                }
            },
            {
                title: {
                    es: "Research",
                    en: "Research"
                },
                text: {
                    es: "Diseño de pruebas, recopilación de datos y análisis para validar las decisiones tomadas durante el desarrollo.",
                    en: "Test design, data collection and analysis to validate decisions made during development."
                }
            }
        ],

        learningTitle: {
            es: "Lo que aprendí",
            en: "What I learned"
        },

        learningText: {
            es: "El proyecto me permitió profundizar en programación de IA, diseño de niveles y análisis de datos, además de aprender a conectar decisiones de diseño con resultados observables dentro del juego.",
            en: "The project allowed me to deepen my knowledge of AI programming, level design and data analysis, while learning how to connect design decisions with observable results inside the game."
        },

        playText: {
            es: "Jugar en Itch.io",
            en: "Play on Itch.io"
        },

        moreProjects: {
            es: "Más proyectos",
            en: "More projects"
        },

        trailerLabel: {
            es: "TRAILER",
            en: "TRAILER"
        },

        images: {

            /*
             * IMPORTANTE:
             * El trailer se utiliza también como fondo
             * de la portada.
             */

            trailer: "img/projects/lyra/screenshot-1.jpg",

            infoRight1: "img/projects/lyra/info-right-1.jpg",

            infoRight2: "img/projects/lyra/info-right-2.jpg",

            screenshot1: "img/projects/lyra/screenshot-1.jpg",

            screenshot2: "img/projects/lyra/screenshot-2.jpg",

            screenshot3: "img/projects/lyra/screenshot-3.jpg",

            screenshot4: "img/projects/lyra/screenshot-4.jpg"

        },

        heroAlt: {
            es: "Lyra — imagen del proyecto",
            en: "Lyra — project image"
        },

        itch: "#"

    },


    /* =====================================================
       JUAN PIEZA
       ===================================================== */

    "juan-pieza": {

        id: "juan-pieza",

        category: {
            es: "GAME PROGRAMMING · LEVEL DESIGN",
            en: "GAME PROGRAMMING · LEVEL DESIGN"
        },

        title: {
            es: "Juan Pieza",
            en: "Juan Pieza"
        },

        years: "2024 — 2025",

        tagline: {
            es: "Proyecto universitario centrado en programación de gameplay y diseño de niveles.",
            en: "University project focused on gameplay programming and level design."
        },

        description: {
            es: "Juan Pieza es un proyecto desarrollado dentro de La Mapachanda durante mi etapa universitaria, combinando programación de gameplay y diseño de niveles para construir una experiencia jugable completa.",
            en: "Juan Pieza is a project developed within La Mapachanda during my university studies, combining gameplay programming and level design to build a complete playable experience."
        },

        role: {
            es: "<strong>Mi rol:</strong> Game Programmer y Level Designer.",
            en: "<strong>My role:</strong> Game Programmer and Level Designer."
        },

        taskTitle: {
            es: "Task Overview",
            en: "Task Overview"
        },

        tasks: [
            {
                title: "Gameplay",
                es: "Diseño e implementación de las mecánicas principales y sus interacciones.",
                en: "Design and implementation of the main gameplay mechanics and their interactions."
            },
            {
                title: "Level Design",
                es: "Diseño de niveles, salas y progresión del jugador.",
                en: "Design of levels, rooms and player progression."
            },
            {
                title: "Programming",
                es: "Programación de sistemas de gameplay y herramientas necesarias para el proyecto.",
                en: "Programming of gameplay systems and tools required by the project."
            },
            {
                title: "Iteration",
                es: "Pruebas, iteración y ajustes a partir del feedback obtenido durante el desarrollo.",
                en: "Testing, iteration and adjustments based on feedback gathered during development."
            }
        ],

        contributionsTitle: {
            es: "Contribuciones",
            en: "Contributions"
        },

        contributionsIntro: {
            es: "Mi trabajo se centró principalmente en programación de gameplay, diseño de niveles e iteración de la experiencia jugable.",
            en: "My work mainly focused on gameplay programming, level design and iteration of the playable experience."
        },

        contributions: [
            {
                title: {
                    es: "Gameplay Programming",
                    en: "Gameplay Programming"
                },
                text: {
                    es: "Implementación de sistemas y mecánicas necesarias para construir la experiencia de juego.",
                    en: "Implementation of the systems and mechanics required to build the gameplay experience."
                }
            },
            {
                title: {
                    es: "Level Design",
                    en: "Level Design"
                },
                text: {
                    es: "Diseño de espacios, recorridos y encuentros para guiar al jugador.",
                    en: "Design of spaces, routes and encounters to guide the player."
                }
            },
            {
                title: {
                    es: "Iteration",
                    en: "Iteration"
                },
                text: {
                    es: "Pruebas y modificaciones continuas para mejorar el resultado final.",
                    en: "Continuous testing and iteration to improve the final result."
                }
            }
        ],

        learningTitle: {
            es: "Lo que aprendí",
            en: "What I learned"
        },

        learningText: {
            es: "El proyecto me ayudó a mejorar mi capacidad para combinar programación y diseño, especialmente a la hora de iterar sistemas jugables y niveles a partir del feedback.",
            en: "The project helped me improve my ability to combine programming and design, especially when iterating on gameplay systems and levels based on feedback."
        },

        playText: {
            es: "Ver proyecto",
            en: "View project"
        },

        moreProjects: {
            es: "Más proyectos",
            en: "More projects"
        },

        trailerLabel: {
            es: "TRAILER",
            en: "TRAILER"
        },

        images: {

            trailer: "img/projects/juan-pieza/screenshot-1.jpg",

            infoRight1: "img/projects/juan-pieza/info-right-1.jpg",

            infoRight2: "img/projects/juan-pieza/info-right-2.jpg",

            screenshot1: "img/projects/juan-pieza/screenshot-1.jpg",

            screenshot2: "img/projects/juan-pieza/screenshot-2.jpg",

            screenshot3: "img/projects/juan-pieza/screenshot-3.jpg",

            screenshot4: "img/projects/juan-pieza/screenshot-4.jpg"

        },

        heroAlt: {
            es: "Juan Pieza — imagen del proyecto",
            en: "Juan Pieza — project image"
        },

        itch: "#"

    }

};


/* =========================================================
   IDIOMA
   ========================================================= */

let currentLanguage = "es";


/* =========================================================
   OBTENER PROYECTO
   ========================================================= */

function getProjectId() {

    const params = new URLSearchParams(
        window.location.search
    );

    const projectId = params.get("project");

    if (projectId && projects[projectId]) {
        return projectId;
    }

    /*
     * Si no se especifica ningún proyecto,
     * Lyra será el proyecto por defecto.
     */

    return "lyra";
}


const currentProjectId = getProjectId();

const project = projects[currentProjectId];


/* =========================================================
   HELPERS
   ========================================================= */

function getText(value) {

    if (
        typeof value === "object" &&
        value !== null &&
        value[currentLanguage] !== undefined
    ) {
        return value[currentLanguage];
    }

    return value || "";
}


/* =========================================================
   ELEMENTOS DOM
   ========================================================= */

const pageTitle =
    document.getElementById("page-title");

const projectHero =
    document.getElementById("project-hero");

const projectLogo =
    document.getElementById("project-logo");

const projectLogoFallback =
    document.getElementById("project-logo-fallback");

const projectTagline =
    document.getElementById("project-tagline");

const projectItch =
    document.getElementById("project-itch");

const projectCategory =
    document.getElementById("project-category");

const projectTitle =
    document.getElementById("project-title");

const projectYears =
    document.getElementById("project-years");

const projectDescription =
    document.getElementById("project-description");

const projectRole =
    document.getElementById("project-role");

const projectTaskTitle =
    document.getElementById("project-task-title");

const projectTasks =
    document.getElementById("project-tasks");

const projectPlay =
    document.getElementById("project-play");

const projectInfoRight1 =
    document.getElementById("project-info-right-1");

const projectInfoRight2 =
    document.getElementById("project-info-right-2");

const projectTrailerImage =
    document.getElementById("project-trailer-image");

const trailerLabel =
    document.getElementById("trailer-label");

const screenshot1 =
    document.getElementById("project-screenshot-1");

const screenshot2 =
    document.getElementById("project-screenshot-2");

const screenshot3 =
    document.getElementById("project-screenshot-3");

const screenshot4 =
    document.getElementById("project-screenshot-4");

const contributionsTitle =
    document.getElementById("contributions-title");

const contributionsIntro =
    document.getElementById("contributions-intro");

const contributionList =
    document.getElementById("contribution-list");

const learningTitle =
    document.getElementById("learning-title");

const learningText =
    document.getElementById("learning-text");

const contributionPlay =
    document.getElementById("contribution-play");

const footerYear =
    document.getElementById("footer-year");


/* =========================================================
   CARGAR PROYECTO
   ========================================================= */

function loadProject() {

    if (!project) {
        return;
    }


    /* ---------------------------------------------
       TITLE
       --------------------------------------------- */

    document.title =
        `${getText(project.title)} | MarcosRuiz Portfolio`;


    if (pageTitle) {
        pageTitle.textContent =
            `${getText(project.title)} | MarcosRuiz Portfolio`;
    }


    /* ---------------------------------------------
       HERO
       --------------------------------------------- */

    /*
     * IMPORTANTE:
     * El trailer es ahora también el fondo de portada.
     */

    if (projectHero) {

        projectHero.src =
            project.images.trailer;

        projectHero.alt =
            getText(project.heroAlt);

    }


    /* ---------------------------------------------
       LOGO
       --------------------------------------------- */

    /*
     * No forzamos una ruta de logo que no exista.
     *
     * Si projectLogo tiene src vacío, mostramos
     * el nombre del proyecto como fallback.
     */

    if (projectLogo) {

        projectLogo.removeAttribute("src");

        projectLogo.style.display = "none";

    }


    if (projectLogoFallback) {

        projectLogoFallback.textContent =
            getText(project.title);

        projectLogoFallback.style.display =
            "block";

    }


    /* ---------------------------------------------
       TAGLINE
       --------------------------------------------- */

    if (projectTagline) {

        projectTagline.textContent =
            getText(project.tagline);

    }


    /* ---------------------------------------------
       ITCH
       --------------------------------------------- */

    if (projectItch) {

        projectItch.href =
            project.itch || "#";

    }


    /* ---------------------------------------------
       CATEGORÍA
       --------------------------------------------- */

    if (projectCategory) {

        projectCategory.textContent =
            getText(project.category);

    }


    /* ---------------------------------------------
       TÍTULO
       --------------------------------------------- */

    if (projectTitle) {

        projectTitle.textContent =
            getText(project.title);

    }


    /* ---------------------------------------------
       AÑOS
       --------------------------------------------- */

    if (projectYears) {

        projectYears.textContent =
            project.years;

    }


    /* ---------------------------------------------
       DESCRIPCIÓN
       --------------------------------------------- */

    if (projectDescription) {

        projectDescription.textContent =
            getText(project.description);

    }


    /* ---------------------------------------------
       ROL
       --------------------------------------------- */

    if (projectRole) {

        projectRole.innerHTML =
            getText(project.role);

    }


    /* ---------------------------------------------
       TASK TITLE
       --------------------------------------------- */

    if (projectTaskTitle) {

        projectTaskTitle.textContent =
            getText(project.taskTitle);

    }


    /* ---------------------------------------------
       TASKS
       --------------------------------------------- */

    renderTasks();


    /* ---------------------------------------------
       BOTÓN PLAY
       --------------------------------------------- */

    if (projectPlay) {

        projectPlay.textContent =
            getText(project.playText);

        projectPlay.href =
            project.itch || "#";

    }


    /* ---------------------------------------------
       IMÁGENES DE INFORMACIÓN
       --------------------------------------------- */

    setImage(
        projectInfoRight1,
        project.images.infoRight1,
        "Project image"
    );

    setImage(
        projectInfoRight2,
        project.images.infoRight2,
        "Project image"
    );


    /* ---------------------------------------------
       TRAILER
       --------------------------------------------- */

    setImage(
        projectTrailerImage,
        project.images.trailer,
        `${getText(project.title)} trailer`
    );


    if (trailerLabel) {

        trailerLabel.textContent =
            getText(project.trailerLabel);

    }


    /* ---------------------------------------------
       SCREENSHOTS
       --------------------------------------------- */

    setImage(
        screenshot1,
        project.images.screenshot1,
        `${getText(project.title)} screenshot 1`
    );

    setImage(
        screenshot2,
        project.images.screenshot2,
        `${getText(project.title)} screenshot 2`
    );

    setImage(
        screenshot3,
        project.images.screenshot3,
        `${getText(project.title)} screenshot 3`
    );

    setImage(
        screenshot4,
        project.images.screenshot4,
        `${getText(project.title)} screenshot 4`
    );


    /* ---------------------------------------------
       CONTRIBUTIONS
       --------------------------------------------- */

    renderContributions();


    /* ---------------------------------------------
       LEARNING
       --------------------------------------------- */

    if (learningTitle) {

        learningTitle.textContent =
            getText(project.learningTitle);

    }


    if (learningText) {

        learningText.textContent =
            getText(project.learningText);

    }


    /* ---------------------------------------------
       BOTÓN FINAL
       --------------------------------------------- */

    if (contributionPlay) {

        contributionPlay.textContent =
            getText(project.playText);

        contributionPlay.href =
            project.itch || "#";

    }


    /* ---------------------------------------------
       FOOTER
       --------------------------------------------- */

    if (footerYear) {

        footerYear.textContent =
            new Date().getFullYear();

    }

}


/* =========================================================
   SET IMAGE
   ========================================================= */

function setImage(element, source, alt) {

    if (!element) {
        return;
    }

    if (!source) {

        element.removeAttribute("src");

        return;
    }

    element.src = source;

    element.alt = alt || "";

}


/* =========================================================
   RENDER TASKS
   ========================================================= */

function renderTasks() {

    if (!projectTasks) {
        return;
    }


    projectTasks.innerHTML = "";


    project.tasks.forEach((task) => {

        const li =
            document.createElement("li");


        const strong =
            document.createElement("strong");


        strong.textContent =
            task.title;


        li.appendChild(strong);


        const text =
            document.createTextNode(
                ` ${getText(task)}`
            );


        li.appendChild(text);


        projectTasks.appendChild(li);

    });

}


/* =========================================================
   RENDER CONTRIBUTIONS
   ========================================================= */

function renderContributions() {

    if (contributionsTitle) {

        contributionsTitle.textContent =
            getText(project.contributionsTitle);

    }


    if (contributionsIntro) {

        contributionsIntro.textContent =
            getText(project.contributionsIntro);

    }


    if (!contributionList) {
        return;
    }


    contributionList.innerHTML = "";


    project.contributions.forEach(
        (contribution) => {

            const li =
                document.createElement("li");


            const title =
                document.createElement("span");


            title.className =
                "contribution-title";


            title.textContent =
                getText(contribution.title);


            const text =
                document.createTextNode(
                    ` ${getText(contribution.text)}`
                );


            li.appendChild(title);

            li.appendChild(text);


            contributionList.appendChild(li);

        }
    );

}


/* =========================================================
   CAMBIO DE IDIOMA
   ========================================================= */

function updateProjectLanguage() {

    if (!project) {
        return;
    }


    /* HERO */

    if (projectTagline) {

        projectTagline.textContent =
            getText(project.tagline);

    }


    if (projectCategory) {

        projectCategory.textContent =
            getText(project.category);

    }


    /* INFORMACIÓN */

    if (projectDescription) {

        projectDescription.textContent =
            getText(project.description);

    }


    if (projectRole) {

        projectRole.innerHTML =
            getText(project.role);

    }


    if (projectTaskTitle) {

        projectTaskTitle.textContent =
            getText(project.taskTitle);

    }


    renderTasks();


    /* BOTONES */

    if (projectPlay) {

        projectPlay.textContent =
            getText(project.playText);

    }


    if (contributionPlay) {

        contributionPlay.textContent =
            getText(project.playText);

    }


    /* TRAILER */

    if (trailerLabel) {

        trailerLabel.textContent =
            getText(project.trailerLabel);

    }


    /* CONTRIBUTIONS */

    renderContributions();


    /* LEARNING */

    if (learningTitle) {

        learningTitle.textContent =
            getText(project.learningTitle);

    }


    if (learningText) {

        learningText.textContent =
            getText(project.learningText);

    }

}


/* =========================================================
   LANGUAGE BUTTON
   ========================================================= */

const languageButton =
    document.getElementById("language-button");


if (languageButton) {

    languageButton.addEventListener(
        "click",
        () => {

            if (currentLanguage === "es") {

                currentLanguage = "en";

                languageButton.textContent =
                    "ES";

            } else {

                currentLanguage = "es";

                languageButton.textContent =
                    "EN";

            }


            updateProjectLanguage();

        }
    );

}


/* =========================================================
   LIGHTBOX
   ========================================================= */

const lightbox =
    document.getElementById("project-lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");

const lightboxCaption =
    document.getElementById("lightbox-caption");

const lightboxClose =
    document.getElementById("lightbox-close");

const lightboxPrev =
    document.getElementById("lightbox-prev");

const lightboxNext =
    document.getElementById("lightbox-next");


let lightboxImages = [];

let lightboxIndex = 0;


/* =========================================================
   PREPARAR IMÁGENES DEL LIGHTBOX
   ========================================================= */

function getLightboxImages() {

    if (!project) {
        return [];
    }


    return [

        {
            src: project.images.infoRight1,
            alt: `${getText(project.title)} — image 1`
        },

        {
            src: project.images.infoRight2,
            alt: `${getText(project.title)} — image 2`
        },

        {
            src: project.images.trailer,
            alt: `${getText(project.title)} — trailer`
        },

        {
            src: project.images.screenshot1,
            alt: `${getText(project.title)} — screenshot 1`
        },

        {
            src: project.images.screenshot2,
            alt: `${getText(project.title)} — screenshot 2`
        },

        {
            src: project.images.screenshot3,
            alt: `${getText(project.title)} — screenshot 3`
        },

        {
            src: project.images.screenshot4,
            alt: `${getText(project.title)} — screenshot 4`
        }

    ];

}


/* =========================================================
   ABRIR LIGHTBOX
   ========================================================= */

function openLightbox(index) {

    lightboxImages =
        getLightboxImages();


    if (!lightboxImages.length) {
        return;
    }


    lightboxIndex =
        Math.max(
            0,
            Math.min(
                index,
                lightboxImages.length - 1
            )
        );


    updateLightbox();


    if (lightbox) {

        lightbox.classList.add("active");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );

    }


    document.body.style.overflow =
        "hidden";

}


/* =========================================================
   ACTUALIZAR LIGHTBOX
   ========================================================= */

function updateLightbox() {

    if (!lightboxImage) {
        return;
    }


    const current =
        lightboxImages[lightboxIndex];


    if (!current) {
        return;
    }


    lightboxImage.src =
        current.src;


    lightboxImage.alt =
        current.alt;


    if (lightboxCaption) {

        lightboxCaption.textContent =
            current.alt;

    }

}


/* =========================================================
   CERRAR LIGHTBOX
   ========================================================= */

function closeLightbox() {

    if (!lightbox) {
        return;
    }


    lightbox.classList.remove("active");


    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";

}


/* =========================================================
   SIGUIENTE IMAGEN
   ========================================================= */

function nextLightboxImage() {

    if (!lightboxImages.length) {
        return;
    }


    lightboxIndex =
        (lightboxIndex + 1)
        % lightboxImages.length;


    updateLightbox();

}


/* =========================================================
   IMAGEN ANTERIOR
   ========================================================= */

function previousLightboxImage() {

    if (!lightboxImages.length) {
        return;
    }


    lightboxIndex =
        (
            lightboxIndex -
            1 +
            lightboxImages.length
        )
        % lightboxImages.length;


    updateLightbox();

}


/* =========================================================
   BOTONES LIGHTBOX
   ========================================================= */

if (lightboxClose) {

    lightboxClose.addEventListener(
        "click",
        closeLightbox
    );

}


if (lightboxPrev) {

    lightboxPrev.addEventListener(
        "click",
        previousLightboxImage
    );

}


if (lightboxNext) {

    lightboxNext.addEventListener(
        "click",
        nextLightboxImage
    );

}


/* =========================================================
   CERRAR HACIENDO CLICK EN EL FONDO
   ========================================================= */

if (lightbox) {

    lightbox.addEventListener(
        "click",
        (event) => {

            if (
                event.target === lightbox
            ) {

                closeLightbox();

            }

        }
    );

}


/* =========================================================
   TECLADO
   ========================================================= */

document.addEventListener(
    "keydown",
    (event) => {

        if (
            !lightbox ||
            !lightbox.classList.contains("active")
        ) {
            return;
        }


        if (event.key === "Escape") {

            closeLightbox();

        }


        if (event.key === "ArrowRight") {

            nextLightboxImage();

        }


        if (event.key === "ArrowLeft") {

            previousLightboxImage();

        }

    }
);


/* =========================================================
   CLICK EN LAS IMÁGENES
   ========================================================= */

function setupGalleryClicks() {

    const imageButtons =
        document.querySelectorAll(
            "[data-project-image]"
        );


    imageButtons.forEach(
        (button) => {

            button.addEventListener(
                "click",
                () => {

                    const type =
                        button.dataset.projectImage;


                    let index = 0;


                    switch (type) {

                        case "info-right-1":
                            index = 0;
                            break;

                        case "info-right-2":
                            index = 1;
                            break;

                        case "trailer":
                            index = 2;
                            break;

                        case "screenshot-1":
                            index = 3;
                            break;

                        case "screenshot-2":
                            index = 4;
                            break;

                        case "screenshot-3":
                            index = 5;
                            break;

                        case "screenshot-4":
                            index = 6;
                            break;

                        default:
                            index = 0;

                    }


                    openLightbox(index);

                }
            );

        }
    );

}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadProject();

        setupGalleryClicks();

    }
);
