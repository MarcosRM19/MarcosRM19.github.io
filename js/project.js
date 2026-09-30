document.addEventListener("DOMContentLoaded", () => {

    const projects = {

        /* =====================================================
           LYRA
        ====================================================== */

        lyra: {

            title: "Lyra",

            category:
                "GAME & LEVEL DESIGN · AI GAME PROGRAMMING",

            years:
                "La Mapachanda · TFG · 2025–2026",

            logo:
                "img/Lyra.png",

            hero:
                "img/projects/lyra/hero.jpg",

            left:
                "img/projects/lyra/left.jpg",

            right:
                "img/projects/lyra/right.jpg",

            gallery: [
                "img/projects/lyra/gallery-01.jpg",
                "img/projects/lyra/gallery-02.jpg",
                "img/projects/lyra/gallery-03.jpg",
                "img/projects/lyra/gallery-04.jpg"
            ],

            tagline:
                "A puzzle adventure about experimentation, observation and learning through play.",

            description:
                "Lyra era mi TFG, un proyecto centrado en puzzles, experimentación y diseño de niveles. Mi trabajo se centró en construir las mecánicas, diseñar los niveles y demostrar mediante datos qué decisiones funcionaban realmente.",

            role:
                "Mi responsabilidad fue conectar diseño e implementación: crear las mecánicas, estructurar la progresión de los niveles y desarrollar herramientas de telemetría para analizar el comportamiento de los jugadores.",

            itch:
                "https://la-mapachanda-studio.itch.io/lyra",

            trailer:
                "YIcgUIwu89U",

            tasks: [
                [
                    "Game Design",
                    "Diseño de mecánicas, interacciones y reglas de los puzzles."
                ],
                [
                    "Level Design",
                    "Diseño y estructuración de las tres zonas siguiendo una progresión EDPV."
                ],
                [
                    "Programming",
                    "Implementación de mecánicas y sistemas en Unreal Engine 5."
                ],
                [
                    "Research",
                    "Telemetría, experimentación A/B y análisis estadístico de resultados."
                ]
            ],

            contributionsIntro:
                "Lyra era mi TFG, así que era el responsable de las mecánicas, los niveles y de demostrar que ambos funcionaban de verdad. El hilo conductor era negarme a fiarme de mi intuición sin datos detrás.",

            contributions: [
                [
                    "Pattern-Based Dictionary",
                    "Descompuse cada mecánica en interacciones atómicas (tiro de fuego, tiro de agua, lanzamiento de dragón) y catalogué los patrones que forman al combinarse, para que cada sala enseñara una combinación concreta y no un truco aislado."
                ],
                [
                    "Estructura de niveles EDPV",
                    "Apliqué el modelo <strong>Exposure, Demonstration, Practice, Validation</strong> en las tres zonas temáticas, ordenando dificultad y ritmo emocional de forma deliberada y no por intuición."
                ],
                [
                    "Pipeline de telemetría en C++",
                    "Instrumenté Unreal Engine 5 para capturar posición del jugador y acciones como CSV estructurado, dándome datos reales de comportamiento en vez de anécdotas."
                ],
                [
                    "Test A/B controlado",
                    "Diseñé el experimento completo para el Puzzle 6: asignación aleatoria estratificada, criterios de inclusión, script de moderador y consentimiento informado, comparando el layout original con un rediseño con visual guidance más claro."
                ],
                [
                    "Análisis estadístico en Python",
                    "Ejecuté Shapiro-Wilk, t de Student y d de Cohen, y reporté un <strong>p-valor no significativo junto con un tamaño de efecto grande</strong> en vez de solo el resultado que apoyaba mi hipótesis."
                ],
                [
                    "Resultado medido",
                    "El rediseño redujo los errores de navegación en un <strong>35%</strong> y mejoró el tiempo de resolución en un <strong>33%</strong>, medido con el mismo pipeline de telemetría."
                ]
            ],

            learning:
                "Lo más valioso no fue confirmar mi hipótesis. Fue aprender a separar lo que se siente mejor de lo que es demostrablemente mejor, y a comunicar esa zona gris a un equipo de diseño sin inflarla ni descartarla."

        },


        /* =====================================================
           JUAN PIEZA
        ====================================================== */

        "juan-pieza": {

            title: "Juan Pieza",

            category:
                "GAME PROGRAMMING · LEVEL DESIGN",

            years:
                "La Mapachanda · University Project · 2024–2025",

            logo:
                "img/Juan Pieza2.png",

            hero:
                "img/projects/juan-pieza/hero.jpg",

            left:
                "img/projects/juan-pieza/left.jpg",

            right:
                "img/projects/juan-pieza/right.jpg",

            gallery: [
                "img/projects/juan-pieza/gallery-01.jpg",
                "img/projects/juan-pieza/gallery-02.jpg",
                "img/projects/juan-pieza/gallery-03.jpg",
                "img/projects/juan-pieza/gallery-04.jpg"
            ],

            tagline:
                "A game project focused on gameplay programming, level design and player experience.",

            description:
                "Juan Pieza fue un proyecto universitario desarrollado dentro de La Mapachanda, donde trabajé en programación de gameplay y diseño de niveles.",

            role:
                "Mi trabajo estuvo centrado en implementar sistemas jugables, trabajar la estructura de los niveles y conectar las decisiones de diseño con la experiencia del jugador.",

            itch:
                "#",

            trailer:
                "",

            tasks: [
                [
                    "Game Programming",
                    "Implementación de sistemas y mecánicas de gameplay."
                ],
                [
                    "Level Design",
                    "Diseño y organización de los niveles."
                ],
                [
                    "Gameplay",
                    "Trabajo sobre las interacciones y el flujo del jugador."
                ],
                [
                    "Teamwork",
                    "Trabajo conjunto con el equipo de desarrollo."
                ]
            ],

            contributionsIntro:
                "En Juan Pieza participé en el desarrollo del juego desde una perspectiva principalmente centrada en programación de gameplay y diseño de niveles.",

            contributions: [
                [
                    "Gameplay Programming",
                    "Implementación de sistemas y mecánicas necesarias para construir la experiencia jugable."
                ],
                [
                    "Level Design",
                    "Diseño y organización de los espacios para controlar el ritmo y la progresión del jugador."
                ],
                [
                    "Player Experience",
                    "Iteración sobre las mecánicas y los niveles teniendo en cuenta cómo se comportaba el jugador."
                ]
            ],

            learning:
                "El proyecto me permitió entender mejor cómo conectar programación y diseño de niveles, y cómo pequeñas decisiones de implementación pueden afectar directamente a la experiencia del jugador."
        }

    };


    /* =====================================================
       SELECT PROJECT
    ====================================================== */

    const params =
        new URLSearchParams(window.location.search);

    const key =
        params.get("project") || "lyra";

    const project =
        projects[key] || projects.lyra;


    /* =====================================================
       TEXT
    ====================================================== */

    const setText = (id, text) => {

        const element =
            document.getElementById(id);

        if (element) {
            element.textContent = text || "";
        }

    };


    setText("project-title", project.title);

    setText(
        "project-category",
        project.category
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
        "project-tagline",
        project.tagline
    );


    /* =====================================================
       LOGO
    ====================================================== */

    const logo =
        document.getElementById("project-logo");

    const fallback =
        document.getElementById(
            "project-logo-fallback"
        );

    if (logo) {

        logo.src = project.logo;

        logo.onerror = () => {

            logo.style.display = "none";

            if (fallback) {

                fallback.textContent =
                    project.title;

                fallback.style.display =
                    "block";
            }

        };

    }


    /* =====================================================
       HERO
    ====================================================== */

    const heroImage =
        document.getElementById("hero-image");

    if (heroImage) {

        heroImage.style.backgroundImage =
            `url("${project.hero}")`;

    }


    /* =====================================================
       LEFT / RIGHT
    ====================================================== */

    const leftImage =
        document.getElementById(
            "project-left-image"
        );

    const rightImage =
        document.getElementById(
            "project-right-image"
        );

    if (leftImage) {
        leftImage.src = project.left;
    }

    if (rightImage) {
        rightImage.src = project.right;
    }


    /* =====================================================
       TASKS
    ====================================================== */

    const taskList =
        document.getElementById(
            "project-tasks"
        );

    if (taskList) {

        taskList.innerHTML = "";

        project.tasks.forEach(task => {

            const li =
                document.createElement("li");

            const strong =
                document.createElement("strong");

            const span =
                document.createElement("span");

            strong.textContent = task[0];

            span.textContent = task[1];

            li.appendChild(strong);
            li.appendChild(span);

            taskList.appendChild(li);

        });

    }


    /* =====================================================
       BUTTONS
    ====================================================== */

    const play =
        document.getElementById(
            "project-play"
        );

    const bottomPlay =
        document.getElementById(
            "bottom-play"
        );

    [play, bottomPlay].forEach(button => {

        if (!button) return;

        button.href = project.itch;

        button.textContent =
            project.itch === "#"
                ? "PROJECT"
                : "PLAY PROJECT";

    });


    const itch =
        document.getElementById(
            "project-itch"
        );

    if (itch) {
        itch.href = project.itch;
    }


    /* =====================================================
       GALLERY
    ====================================================== */

    const gallery =
        document.getElementById(
            "project-gallery"
        );

    if (gallery) {

        gallery.innerHTML = "";

        project.gallery.forEach(
            (src, index) => {

                const button =
                    document.createElement("button");

                button.type = "button";

                button.className =
                    "tg-shot";

                const image =
                    document.createElement("img");

                image.src = src;

                image.alt =
                    `${project.title} screenshot ${index + 1}`;

                button.appendChild(image);

                gallery.appendChild(button);

            }
        );

    }


    /* =====================================================
       TRAILER IMAGE
    ====================================================== */

    const trailerImage =
        document.getElementById(
            "trailer-image"
        );

    if (trailerImage) {

        trailerImage.src =
            project.right;

    }


    const trailerButton =
        document.getElementById(
            "trailer-button"
        );

    if (trailerButton) {

        if (!project.trailer) {

            trailerButton.style.display =
                "none";

        } else {

            trailerButton.addEventListener(
                "click",
                () => {

                    window.open(
                        `https://www.youtube.com/watch?v=${project.trailer}`,
                        "_blank",
                        "noopener"
                    );

                }
            );

        }

    }


    /* =====================================================
       CONTRIBUTIONS
    ====================================================== */

    const intro =
        document.getElementById(
            "contributions-intro"
        );

    if (intro) {
        intro.textContent =
            project.contributionsIntro;
    }


    const contributionList =
        document.getElementById(
            "contribution-list"
        );

    if (contributionList) {

        contributionList.innerHTML = "";

        project.contributions.forEach(
            contribution => {

                const li =
                    document.createElement("li");

                const strong =
                    document.createElement("strong");

                const text =
                    document.createElement("span");

                strong.className =
                    "contribution-title";

                strong.textContent =
                    contribution[0];

                text.innerHTML =
                    contribution[1];

                li.appendChild(strong);

                li.appendChild(text);

                contributionList.appendChild(li);

            }
        );

    }


    /* =====================================================
       LEARNING
    ====================================================== */

    setText(
        "learning-text",
        project.learning
    );


    /* =====================================================
       LIGHTBOX
    ====================================================== */

    const allImages = [
        project.left,
        project.right,
        ...project.gallery
    ];

    const lightbox =
        document.getElementById(
            "project-lightbox"
        );

    const lightboxImage =
        document.getElementById(
            "lightbox-image"
        );

    const lightboxCaption =
        document.getElementById(
            "lightbox-caption"
        );

    const close =
        document.querySelector(
            ".lightbox-close"
        );

    const previous =
        document.querySelector(
            ".lightbox-prev"
        );

    const next =
        document.querySelector(
            ".lightbox-next"
        );

    let current = 0;


    const openLightbox = index => {

        current = index;

        lightboxImage.src =
            allImages[current];

        lightboxCaption.textContent =
            `${project.title} — ${current + 1} / ${allImages.length}`;

        lightbox.classList.add("active");

        lightbox.setAttribute(
            "aria-hidden",
            "false"
        );

        document.body.style.overflow =
            "hidden";
    };


    const closeLightbox = () => {

        lightbox.classList.remove(
            "active"
        );

        lightbox.setAttribute(
            "aria-hidden",
            "true"
        );

        document.body.style.overflow =
            "";
    };


    document.addEventListener(
        "click",
        event => {

            const shot =
                event.target.closest(
                    ".ph-shot, .tg-shot"
                );

            if (!shot) return;

            const image =
                shot.querySelector("img");

            if (!image) return;

            const index =
                allImages.indexOf(
                    image.src
                );

            if (index >= 0) {
                openLightbox(index);
            }

        }
    );


    if (close) {
        close.addEventListener(
            "click",
            closeLightbox
        );
    }


    if (next) {

        next.addEventListener(
            "click",
            () => {

                current =
                    (current + 1) %
                    allImages.length;

                openLightbox(current);

            }
        );

    }


    if (previous) {

        previous.addEventListener(
            "click",
            () => {

                current =
                    (current - 1 +
                        allImages.length) %
                    allImages.length;

                openLightbox(current);

            }
        );

    }


    document.addEventListener(
        "keydown",
        event => {

            if (
                !lightbox.classList.contains(
                    "active"
                )
            ) {
                return;
            }

            if (event.key === "Escape") {
                closeLightbox();
            }

            if (event.key === "ArrowRight") {

                current =
                    (current + 1) %
                    allImages.length;

                openLightbox(current);

            }

            if (event.key === "ArrowLeft") {

                current =
                    (current - 1 +
                        allImages.length) %
                    allImages.length;

                openLightbox(current);

            }

        }
    );

});
