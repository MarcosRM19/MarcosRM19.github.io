/* =========================================================
   PROJECT PAGE
   ========================================================= */


/* =========================================================
   PROJECT DATA
   ========================================================= */

const projects = {

    lyra: {

        slug: "lyra",

        title: "Lyra",

        category: "AI Game Programmer / Game & Level Designer",

        years: "La Mapachanda · TFG ENTI-UB · 2025–2026",

        tagline:
            "Un proyecto centrado en diseño de niveles, gameplay y análisis de comportamiento del jugador.",

        description:
            "Lyra fue mi TFG y el proyecto en el que combiné programación, diseño de mecánicas y diseño de niveles con un proceso de validación basado en datos.",

        role:
            "Mi responsabilidad principal fue construir las mecánicas, diseñar los niveles y comprobar mediante telemetría y testing si las decisiones de diseño funcionaban realmente.",

        taskTitle:
            "Task Overview",

        tasks: [
            {
                title: "Gameplay",
                text: "Diseño e implementación de las mecánicas principales y sus interacciones."
            },
            {
                title: "Level Design",
                text: "Diseño de las salas y progresión siguiendo una estructura EDPV."
            },
            {
                title: "AI / C++",
                text: "Programación y captura de datos dentro de Unreal Engine 5."
            },
            {
                title: "Research",
                text: "Diseño de pruebas, análisis estadístico y validación de decisiones de diseño."
            }
        ],

        playText: "Jugar a Lyra",

        itch:
            "https://la-mapachanda-studio.itch.io/lyra",

        trailer:
            "https://www.youtube.com/watch?v=YIcgUIwu89U",

        trailerLabel:
            "OFFICIAL TRAILER",

images: {
    hero: "img/projects/lyra/hero.jpg",
    infoLeft: "img/projects/lyra/info-left.jpg",
    infoRight1: "img/projects/lyra/info-right-1.jpg",
    infoRight2: "img/projects/lyra/info-right-2.jpg",
    screenshot1: "img/projects/lyra/screenshot-1.jpg",
    screenshot2: "img/projects/lyra/screenshot-2.jpg",
    screenshot3: "img/projects/lyra/screenshot-3.jpg",
    screenshot4: "img/projects/lyra/screenshot-4.jpg"
},

        contributionsTitle:
            "Mis Contribuciones",

        contributionsIntro:
            "Lyra era mi TFG, así que era el responsable de las mecánicas, los niveles y de demostrar que ambos funcionaban de verdad. El hilo conductor era negarme a fiarme de mi intuición sin datos detrás.",

        contributions: [

            {
                title: "Pattern-Based Dictionary",
                text: "Descompuse cada mecánica en interacciones atómicas (tiro de fuego, tiro de agua, lanzamiento de dragón) y catalogué los patrones que forman al combinarse, para que cada sala enseñara una combinación concreta y no un truco aislado."
            },

            {
                title: "Estructura de niveles EDPV",
                text: "Apliqué el modelo Exposure, Demonstration, Practice, Validation en las tres zonas temáticas, ordenando dificultad y ritmo emocional de forma deliberada y no por intuición."
            },

            {
                title: "Pipeline de telemetría en C++",
                text: "Instrumenté Unreal Engine 5 para capturar posición del jugador y acciones como CSV estructurado, dándome datos reales de comportamiento en vez de anécdotas."
            },

            {
                title: "Test A/B controlado",
                text: "Diseñé el experimento completo para el Puzzle 6: asignación aleatoria estratificada, criterios de inclusión, script de moderador y consentimiento informado, comparando el layout original con un rediseño con visual guidance más claro."
            },

            {
                title: "Análisis estadístico en Python",
                text: "Ejecuté Shapiro-Wilk, t de Student y d de Cohen, y reporté un p-valor no significativo junto con un tamaño de efecto grande en vez de solo el resultado que apoyaba mi hipótesis."
            },

            {
                title: "Resultado medido",
                text: "El rediseño redujo los errores de navegación en un 35% y mejoró el tiempo de resolución en un 33%, medido con el mismo pipeline de telemetría."
            }

        ],

        learningTitle:
            "Lo que aprendí",

        learningText:
            "Lo más valioso no fue confirmar mi hipótesis. Fue aprender a separar lo que se siente mejor de lo que es demostrablemente mejor, y a comunicar esa zona gris a un equipo de diseño sin inflarla ni descartarla."

    },


    /* =====================================================
       JUAN PIEZA
    ===================================================== */

    "juan-pieza": {

        slug: "juan-pieza",

        title: "Juan Pieza",

        category: "Game Programmer & Level Designer",

        years: "La Mapachanda · Proyecto universitario · 2024–2025",

        tagline:
            "Proyecto universitario centrado en programación de gameplay y diseño de niveles.",

        description:
            "Juan Pieza fue un proyecto universitario desarrollado dentro de La Mapachanda, en el que trabajé principalmente en programación de gameplay y diseño de niveles.",

        role:
            "Mi trabajo combinó implementación de sistemas jugables con el diseño y estructuración de los niveles para conseguir una progresión clara y coherente.",

        taskTitle:
            "Task Overview",

        tasks: [
            {
                title: "Gameplay",
                text: "Programación de sistemas y mecánicas necesarias para la experiencia jugable."
            },
            {
                title: "Level Design",
                text: "Diseño y construcción de niveles y de su progresión."
            },
            {
                title: "Iteration",
                text: "Pruebas, ajustes y refinamiento de las decisiones de diseño."
            },
            {
                title: "Teamwork",
                text: "Trabajo coordinado con el resto del equipo durante el desarrollo."
            }
        ],

        playText: "Ver proyecto",

        itch: "#",

        trailer: "#",

        trailerLabel:
            "PROJECT TRAILER",

images: {
    hero: "img/projects/juan-pieza/hero.jpg",
    infoLeft: "img/projects/juan-pieza/info-left.jpg",
    infoRight1: "img/projects/juan-pieza/info-right-1.jpg",
    infoRight2: "img/projects/juan-pieza/info-right-2.jpg",
    screenshot1: "img/projects/juan-pieza/screenshot-1.jpg",
    screenshot2: "img/projects/juan-pieza/screenshot-2.jpg",
    screenshot3: "img/projects/juan-pieza/screenshot-3.jpg",
    screenshot4: "img/projects/juan-pieza/screenshot-4.jpg"
},
        contributionsTitle:
            "Mis Contribuciones",

        contributionsIntro:
            "En Juan Pieza trabajé principalmente en programación y diseño de niveles, participando en la construcción de la experiencia jugable y en el proceso de iteración del proyecto.",

        contributions: [

            {
                title: "Programación de gameplay",
                text: "Implementación y ajuste de las mecánicas necesarias para construir la experiencia jugable."
            },

            {
                title: "Diseño de niveles",
                text: "Diseño de espacios, recorridos y progresión para guiar al jugador a través de la experiencia."
            },

            {
                title: "Iteración",
                text: "Pruebas y modificaciones de los niveles y sistemas a partir de los problemas encontrados durante el desarrollo."
            },

            {
                title: "Trabajo en equipo",
                text: "Coordinación con el resto del equipo para integrar programación, diseño y contenido."
            }

        ],

        learningTitle:
            "Lo que aprendí",

        learningText:
            "El proyecto me permitió entender mejor la relación entre programación y diseño de niveles, especialmente la importancia de iterar constantemente y comprobar cómo las decisiones técnicas afectan a la experiencia del jugador."

    }

};


/* =========================================================
   GET PROJECT
   ========================================================= */

const params = new URLSearchParams(window.location.search);

const projectKey =
    params.get("project") || "lyra";

const project =
    projects[projectKey] || projects.lyra;


/* =========================================================
   HELPERS
   ========================================================= */

function setText(id, value) {

    const element = document.getElementById(id);

    if (!element) return;

    element.textContent = value || "";
}


function setImage(id, source, alt = "") {

    const element = document.getElementById(id);

    if (!element) return;

    element.src = source || "";
    element.alt = alt;
}


function setLink(id, url) {

    const element = document.getElementById(id);

    if (!element) return;

    element.href = url || "#";
}


/* =========================================================
   BASIC PROJECT CONTENT
   ========================================================= */

function loadProjectContent() {

    document.title =
        `${project.title} | Marcos RM`;

    document.documentElement.lang = "es";


    /* HERO */

    setImage(
        "project-hero",
        project.images.hero,
        project.title
    );

    setImage(
        "project-logo",
        project.images.logo || "",
        project.title
    );

    const logo =
        document.getElementById("project-logo");

    const fallback =
        document.getElementById("project-logo-fallback");

    if (!project.images.logo) {

        if (logo) {
            logo.style.display = "none";
        }

        if (fallback) {
            fallback.style.display = "block";
            fallback.textContent = project.title;
        }

    } else {

        if (logo) {
            logo.style.display = "block";
        }

        if (fallback) {
            fallback.style.display = "none";
        }
    }


    setText(
        "project-tagline",
        project.tagline
    );


    /* ITCH */

    setLink(
        "project-itch",
        project.itch
    );


    /* INFORMATION */

    setText(
        "project-category",
        project.category
    );

    setText(
        "project-title",
        project.title
    );

    setText(
        "project-years",
        project.years
    );

    setText(
        "project-description",
        project.description
    );

    setText(
        "project-role",
        project.role
    );

    setText(
        "project-task-title",
        project.taskTitle
    );


    /* LEFT IMAGE */

    setImage(
        "project-info-left",
        project.images.infoLeft,
        `${project.title} - info`
    );


    /* RIGHT IMAGES */

    setImage(
        "project-info-right-1",
        project.images.infoRight1,
        `${project.title} - info 1`
    );

    setImage(
        "project-info-right-2",
        project.images.infoRight2,
        `${project.title} - info 2`
    );


    /* TASKS */

    const taskList =
        document.getElementById("project-tasks");

    if (taskList) {

        taskList.innerHTML = "";

        project.tasks.forEach(task => {

            const li =
                document.createElement("li");

            const strong =
                document.createElement("strong");

            const text =
                document.createElement("span");

            strong.textContent =
                task.title;

            text.textContent =
                task.text;

            li.appendChild(strong);
            li.appendChild(text);

            taskList.appendChild(li);

        });
    }


    /* PLAY BUTTON */

    setText(
        "project-play",
        project.playText
    );

    setLink(
        "project-play",
        project.itch
    );


    /* SCREENSHOTS */

    setImage(
        "project-screenshot-1",
        project.images.screenshot1,
        `${project.title} - screenshot 1`
    );

    setImage(
        "project-screenshot-2",
        project.images.screenshot2,
        `${project.title} - screenshot 2`
    );

    setImage(
        "project-screenshot-3",
        project.images.screenshot3,
        `${project.title} - screenshot 3`
    );

    setImage(
        "project-screenshot-4",
        project.images.screenshot4,
        `${project.title} - screenshot 4`
    );


    /* TRAILER */

    setImage(
        "trailer-image",
        project.images.screenshot1,
        `${project.title} - trailer`
    );

    setText(
        "trailer-label",
        project.trailerLabel
    );


    /* CONTRIBUTIONS */

    setImage(
        "contributions-bg",
        project.images.hero,
        ""
    );

    setText(
        "contributions-title",
        project.contributionsTitle
    );

    setText(
        "contributions-intro",
        project.contributionsIntro
    );


    const contributionList =
        document.getElementById("contribution-list");

    if (contributionList) {

        contributionList.innerHTML = "";

        project.contributions.forEach(item => {

            const li =
                document.createElement("li");

            const title =
                document.createElement("strong");

            title.className =
                "contribution-title";

            title.textContent =
                item.title;

            const text =
                document.createTextNode(item.text);

            li.appendChild(title);
            li.appendChild(text);

            contributionList.appendChild(li);

        });
    }


    /* LEARNING */

    setText(
        "learning-title",
        project.learningTitle
    );

    setText(
        "learning-text",
        project.learningText
    );


    /* BOTTOM CTA */

    setText(
        "bottom-play",
        project.playText
    );

    setLink(
        "bottom-play",
        project.itch
    );
}


/* =========================================================
   LIGHTBOX
   ========================================================= */

const galleryImages = [
    "info-right-1",
    "info-right-2",
    "screenshot-1",
    "screenshot-2",
    "screenshot-3",
    "screenshot-4"
];

let currentLightboxIndex = 0;

let lightboxItems = [];


function buildLightboxItems() {

    lightboxItems = [];

    galleryImages.forEach(key => {

        let source = "";

        switch (key) {

            case "info-right-1":
                source = project.images.infoRight1;
                break;

            case "info-right-2":
                source = project.images.infoRight2;
                break;

            case "screenshot-1":
                source = project.images.screenshot1;
                break;

            case "screenshot-2":
                source = project.images.screenshot2;
                break;

            case "screenshot-3":
                source = project.images.screenshot3;
                break;

            case "screenshot-4":
                source = project.images.screenshot4;
                break;
        }

        if (source) {
            lightboxItems.push({
                key,
                source
            });
        }

    });
}


function openLightbox(index) {

    const lightbox =
        document.getElementById("project-lightbox");

    const image =
        document.getElementById("lightbox-image");

    if (!lightbox || !image) return;

    if (!lightboxItems.length) return;

    currentLightboxIndex =
        (index + lightboxItems.length) %
        lightboxItems.length;

    const item =
        lightboxItems[currentLightboxIndex];

    image.src = item.source;

    image.alt =
        `${project.title} - ${item.key}`;

    const caption =
        document.getElementById("lightbox-caption");

    if (caption) {

        caption.textContent =
            item.key
                .replaceAll("-", " ")
                .toUpperCase();
    }

    lightbox.classList.add("active");

    lightbox.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.style.overflow = "hidden";
}


function closeLightbox() {

    const lightbox =
        document.getElementById("project-lightbox");

    if (!lightbox) return;

    lightbox.classList.remove("active");

    lightbox.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.style.overflow = "";
}


function changeLightbox(direction) {

    openLightbox(
        currentLightboxIndex + direction
    );
}


/* =========================================================
   LIGHTBOX EVENTS
   ========================================================= */

function setupLightbox() {

    buildLightboxItems();

    const triggers =
        document.querySelectorAll(
            "[data-project-image]"
        );

    triggers.forEach(trigger => {

        trigger.addEventListener(
            "click",
            () => {

                const key =
                    trigger.dataset.projectImage;

                const index =
                    lightboxItems.findIndex(
                        item => item.key === key
                    );

                if (index !== -1) {
                    openLightbox(index);
                }

            }
        );

    });


    const closeButton =
        document.querySelector(".lightbox-close");

    const previousButton =
        document.querySelector(".lightbox-prev");

    const nextButton =
        document.querySelector(".lightbox-next");


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeLightbox
        );
    }


    if (previousButton) {

        previousButton.addEventListener(
            "click",
            () => changeLightbox(-1)
        );
    }


    if (nextButton) {

        nextButton.addEventListener(
            "click",
            () => changeLightbox(1)
        );
    }


    const lightbox =
        document.getElementById("project-lightbox");

    if (lightbox) {

        lightbox.addEventListener(
            "click",
            event => {

                if (
                    event.target === lightbox
                ) {
                    closeLightbox();
                }

            }
        );
    }


    document.addEventListener(
        "keydown",
        event => {

            const lightbox =
                document.getElementById(
                    "project-lightbox"
                );

            if (
                !lightbox ||
                !lightbox.classList.contains("active")
            ) {
                return;
            }

            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowLeft") {
                changeLightbox(-1);
            }

            if (event.key === "ArrowRight") {
                changeLightbox(1);
            }

        }
    );
}


/* =========================================================
   TRAILER
   ========================================================= */

function setupTrailer() {

    const button =
        document.getElementById(
            "trailer-button"
        );

    if (!button) return;

    if (
        !project.trailer ||
        project.trailer === "#"
    ) {

        button.addEventListener(
            "click",
            () => {
                const first =
                    lightboxItems.findIndex(
                        item => item.key === "screenshot-1"
                    );

                if (first !== -1) {
                    openLightbox(first);
                }
            }
        );

        return;
    }

    button.addEventListener(
        "click",
        () => {

            window.open(
                project.trailer,
                "_blank",
                "noopener,noreferrer"
            );

        }
    );
}


/* =========================================================
   BROKEN IMAGE HANDLING
   ========================================================= */

function setupImageFallbacks() {

    const images =
        document.querySelectorAll("img");

    images.forEach(image => {

        image.addEventListener(
            "error",
            () => {

                image.style.opacity = "0";

            }
        );

    });
}


/* =========================================================
   INIT
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        loadProjectContent();

        setupLightbox();

        setupTrailer();

        setupImageFallbacks();

    }
);
