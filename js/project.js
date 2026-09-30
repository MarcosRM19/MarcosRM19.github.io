const projects = {

    lyra: {

        title: "Lyra",

        category: "AI GAME PROGRAMMER / GAME & LEVEL DESIGNER",

        years: "La Mapachanda · TFG ENTI-UB · 2025-2026",

        tagline:
            "Proyecto de investigación centrado en IA, diseño de niveles y análisis del comportamiento del jugador.",

        description:
            "Lyra es un proyecto desarrollado en Unreal Engine 5 que explora la relación entre inteligencia artificial, diseño de niveles y comportamiento del jugador. El proyecto combina programación, diseño y análisis de datos para estudiar cómo diferentes decisiones de diseño afectan a la experiencia del jugador.",

        role:
            "Mi trabajo se centró principalmente en el diseño e implementación de las mecánicas, el diseño de niveles, la programación de sistemas de IA y la captura y análisis de datos.",

        taskTitle:
            "Áreas de trabajo",

        tasks: [
            "Diseño e implementación de las mecánicas principales y sus interacciones.",
            "Diseño de las salas y progresión siguiendo una estructura EDPV.",
            "Programación y captura de datos dentro de Unreal Engine 5.",
            "Diseño de pruebas, análisis estadístico y validación de decisiones de diseño."
        ],

        playText:
            "Jugar en Itch.io",

        itch:
            "#",

        trailerLabel:
            "Trailer",

        contributionsTitle:
            "Contribuciones",

        contributions:
            `
            <p>
                Diseño e implementación de sistemas de gameplay,
                diseño de niveles y programación de IA dentro de Unreal Engine 5.
            </p>

            <p>
                También participé en la planificación de pruebas,
                captura de datos y análisis de los resultados obtenidos.
            </p>
            `,

        learningTitle:
            "Aprendizaje",

        learning:
            `
            <p>
                El proyecto me permitió profundizar en el desarrollo
                de sistemas de IA, diseño de niveles y análisis de comportamiento.
            </p>

            <p>
                También reforcé mi experiencia trabajando con datos
                para validar decisiones de diseño.
            </p>
            `,

        images: {

            hero:
                "img/projects/lyra/screenshot-1.jpg",

            infoRight1:
                "img/projects/lyra/info-right-1.jpg",

            infoRight2:
                "img/projects/lyra/info-right-2.jpg",

            screenshot1:
                "img/projects/lyra/screenshot-1.jpg",

            screenshot2:
                "img/projects/lyra/screenshot-2.jpg",

            screenshot3:
                "img/projects/lyra/screenshot-3.jpg",

            screenshot4:
                "img/projects/lyra/screenshot-4.jpg"
        }
    },


    "juan-pieza": {

        title: "Juan Pieza",

        category: "GAME PROGRAMMER / LEVEL DESIGNER",

        years: "La Mapachanda · Proyecto universitario · 2024-2025",

        tagline:
            "Proyecto universitario centrado en programación, gameplay y diseño de niveles.",

        description:
            "Juan Pieza es un proyecto desarrollado dentro de La Mapachanda como parte de mi formación universitaria, combinando programación de gameplay y diseño de niveles.",

        role:
            "Participé en la programación de gameplay y en el diseño y construcción de niveles.",

        taskTitle:
            "Áreas de trabajo",

        tasks: [
            "Diseño e implementación de las mecánicas principales.",
            "Diseño y construcción de niveles.",
            "Programación de sistemas de gameplay.",
            "Iteración y ajuste de la experiencia de juego."
        ],

        playText:
            "Ver proyecto",

        itch:
            "#",

        trailerLabel:
            "Trailer",

        contributionsTitle:
            "Contribuciones",

        contributions:
            `
            <p>
                Programación de sistemas de gameplay y participación
                en el diseño y construcción de niveles.
            </p>
            `,

        learningTitle:
            "Aprendizaje",

        learning:
            `
            <p>
                El proyecto permitió mejorar mis conocimientos de
                programación de gameplay y diseño de niveles.
            </p>
            `,

        images: {

            hero:
                "img/projects/juan-pieza/screenshot-1.jpg",

            infoRight1:
                "img/projects/juan-pieza/info-right-1.jpg",

            infoRight2:
                "img/projects/juan-pieza/info-right-2.jpg",

            screenshot1:
                "img/projects/juan-pieza/screenshot-1.jpg",

            screenshot2:
                "img/projects/juan-pieza/screenshot-2.jpg",

            screenshot3:
                "img/projects/juan-pieza/screenshot-3.jpg",

            screenshot4:
                "img/projects/juan-pieza/screenshot-4.jpg"
        }
    }
};


/* =========================================================
   PROJECT ID
========================================================= */

function getProjectId() {

    const params =
        new URLSearchParams(window.location.search);

    const id =
        params.get("project");

    if (projects[id]) {
        return id;
    }

    return "lyra";
}


/* =========================================================
   LOAD PROJECT
========================================================= */

function loadProject() {

    const project =
        projects[getProjectId()];

    if (!project) {
        return;
    }


    /* TITLE */

    document.title =
        `${project.title} | MarcosRuiz Portfolio`;


    /* HERO */

    const hero =
        document.getElementById("project-hero");

    if (hero) {
        hero.src = project.images.hero;
        hero.alt = project.title;
    }


    /* HERO TITLE */

    const heroTitle =
        document.getElementById(
            "project-logo-fallback"
        );

    if (heroTitle) {
        heroTitle.textContent =
            project.title;
    }


    /* TAGLINE */

    const tagline =
        document.getElementById(
            "project-tagline"
        );

    if (tagline) {
        tagline.textContent =
            project.tagline;
    }


    /* ITCH */

    const itch =
        document.getElementById(
            "project-itch"
        );

    if (itch) {
        itch.href = project.itch;
    }


    /* CATEGORY */

    const category =
        document.getElementById(
            "project-category"
        );

    if (category) {
        category.textContent =
            project.category;
    }


    /* TITLE */

    const title =
        document.getElementById(
            "project-title"
        );

    if (title) {
        title.textContent =
            project.title;
    }


    /* YEARS */

    const years =
        document.getElementById(
            "project-years"
        );

    if (years) {
        years.textContent =
            project.years;
    }


    /* DESCRIPTION */

    const description =
        document.getElementById(
            "project-description"
        );

    if (description) {
        description.textContent =
            project.description;
    }


    /* ROLE */

    const role =
        document.getElementById(
            "project-role"
        );

    if (role) {
        role.textContent =
            project.role;
    }


    /* TASK TITLE */

    const taskTitle =
        document.getElementById(
            "project-task-title"
        );

    if (taskTitle) {
        taskTitle.textContent =
            project.taskTitle;
    }


    /* TASKS */

    const taskList =
        document.getElementById(
            "project-tasks"
        );

    if (taskList) {

        taskList.innerHTML = "";

        project.tasks.forEach(function(task) {

            const li =
                document.createElement("li");

            li.textContent = task;

            taskList.appendChild(li);
        });
    }


    /* PLAY BUTTON */

    const play =
        document.getElementById(
            "project-play"
        );

    if (play) {

        play.textContent =
            project.playText;

        play.href =
            project.itch;
    }


    /* IMAGE 1 */

    const infoRight1 =
        document.getElementById(
            "project-info-right-1"
        );

    if (infoRight1) {

        infoRight1.src =
            project.images.infoRight1;

        infoRight1.alt =
            project.title;
    }


    /* IMAGE 2 */

    const infoRight2 =
        document.getElementById(
            "project-info-right-2"
        );

    if (infoRight2) {

        infoRight2.src =
            project.images.infoRight2;

        infoRight2.alt =
            project.title;
    }


    /* SCREENSHOTS */

    const screenshots = [
        ["project-screenshot-1", project.images.screenshot1],
        ["project-screenshot-2", project.images.screenshot2],
        ["project-screenshot-3", project.images.screenshot3],
        ["project-screenshot-4", project.images.screenshot4]
    ];


    screenshots.forEach(function(item) {

        const image =
            document.getElementById(item[0]);

        if (!image) {
            return;
        }

        image.src = item[1];
        image.alt = project.title;
    });


    /* TRAILER LABEL */

    const trailerLabel =
        document.getElementById(
            "trailer-label"
        );

    if (trailerLabel) {
        trailerLabel.textContent =
            project.trailerLabel;
    }


    /* CONTRIBUTIONS */

    const contributionsTitle =
        document.getElementById(
            "contributions-title"
        );

    if (contributionsTitle) {
        contributionsTitle.textContent =
            project.contributionsTitle;
    }


    const contributions =
        document.getElementById(
            "contributions-content"
        );

    if (contributions) {
        contributions.innerHTML =
            project.contributions;
    }


    /* LEARNING */

    const learningTitle =
        document.getElementById(
            "learning-title"
        );

    if (learningTitle) {
        learningTitle.textContent =
            project.learningTitle;
    }


    const learning =
        document.getElementById(
            "learning-content"
        );

    if (learning) {
        learning.innerHTML =
            project.learning;
    }


    setupLightbox();
}


/* =========================================================
   LIGHTBOX
========================================================= */

let galleryImages = [];
let currentImage = 0;


function setupLightbox() {

    const buttons =
        document.querySelectorAll(
            "[data-project-image]"
        );

    galleryImages = [];


    buttons.forEach(function(button) {

        const image =
            button.querySelector("img");

        if (!image) {
            return;
        }


        const src =
            image.src;


        if (!src) {
            return;
        }


        if (!galleryImages.includes(src)) {

            galleryImages.push(src);
        }


        button.onclick = function() {

            currentImage =
                galleryImages.indexOf(src);

            openLightbox();
        };
    });


    const close =
        document.getElementById(
            "lightbox-close"
        );

    const previous =
        document.getElementById(
            "lightbox-prev"
        );

    const next =
        document.getElementById(
            "lightbox-next"
        );


    if (close) {
        close.onclick =
            closeLightbox;
    }

    if (previous) {
        previous.onclick =
            previousImage;
    }

    if (next) {
        next.onclick =
            nextImage;
    }
}


/* =========================================================
   OPEN
========================================================= */

function openLightbox() {

    const lightbox =
        document.getElementById(
            "lightbox"
        );

    const image =
        document.getElementById(
            "lightbox-image"
        );


    if (!lightbox || !image) {
        return;
    }


    image.src =
        galleryImages[currentImage];


    lightbox.classList.add(
        "is-open"
    );

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow =
        "hidden";
}


/* =========================================================
   CLOSE
========================================================= */

function closeLightbox() {

    const lightbox =
        document.getElementById(
            "lightbox"
        );


    if (!lightbox) {
        return;
    }


    lightbox.classList.remove(
        "is-open"
    );

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow =
        "";
}


/* =========================================================
   NEXT
========================================================= */

function nextImage() {

    if (!galleryImages.length) {
        return;
    }


    currentImage++;

    if (
        currentImage >=
        galleryImages.length
    ) {
        currentImage = 0;
    }


    updateLightbox();
}


/* =========================================================
   PREVIOUS
========================================================= */

function previousImage() {

    if (!galleryImages.length) {
        return;
    }


    currentImage--;

    if (currentImage < 0) {

        currentImage =
            galleryImages.length - 1;
    }


    updateLightbox();
}


/* =========================================================
   UPDATE LIGHTBOX
========================================================= */

function updateLightbox() {

    const image =
        document.getElementById(
            "lightbox-image"
        );


    if (!image) {
        return;
    }


    image.src =
        galleryImages[currentImage];
}


/* =========================================================
   KEYBOARD
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        const lightbox =
            document.getElementById(
                "lightbox"
            );


        if (
            !lightbox ||
            !lightbox.classList.contains(
                "is-open"
            )
        ) {
            return;
        }


        if (event.key === "Escape") {
            closeLightbox();
        }

        if (event.key === "ArrowRight") {
            nextImage();
        }

        if (event.key === "ArrowLeft") {
            previousImage();
        }
    }
);


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    loadProject
);
