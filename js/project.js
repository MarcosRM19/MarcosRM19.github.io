// =========================================================
// SCRIPT PÁGINA DE PROYECTO (lyra.html, etc.)
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Obtener idioma guardado desde localStorage
    let currentLang = localStorage.getItem("preferredLanguage") || "es";

    // 2. Base de datos de textos del proyecto (Español e Inglés)
    const projectData = {
        es: {
            pageTitle: "Lyra | MarcosRuiz Portfolio",
            titleHero: "Lyra",
            tagline: "Un juego narrativo centrado en la exploración, la atmósfera y la interacción.",
            category: "AI GAME PROGRAMMER",
            title: "Lyra",
            years: "2025 — 2026",
            description: "Lyra es un proyecto narrativo desarrollado en Unreal Engine centrado en crear una experiencia inmersiva mediante mecánicas avanzadas de IA e interacción con el entorno.",
            role: "Como AI Game Programmer, fui responsable de diseñar los comportamientos de la IA, árboles de comportamiento (Behavior Trees), navegación dinámica y optimización del rendimiento.",
            taskTitle: "RESUMEN DE TAREAS",
            tasks: [
                "Diseño e implementación de árboles de comportamiento (Behavior Trees) para NPCs.",
                "Integración de sistemas de navegación dinámicos en Unreal Engine.",
                "Optimización de lógica C++ para IA en tiempo real.",
                "Coordinación con el equipo de diseño narrativo para eventos dinámicos."
            ],
            playBtn: "Juega en itch.io",
            trailerLabel: "Ver Tráiler Oficial",
            contributionsTitle: "Mis Contribuciones",
            contributionsIntro: "Durante el desarrollo de Lyra, me enfoqué en llevar la interacción de los NPCs al siguiente nivel:",
            contributions: [
                { title: "Arquitectura de IA", text: "Diseño e implementación del sistema base de decisiones en C++." },
                { title: "Sistemas Perceptivos", text: "Uso de AIPerception para detección de sonido y vista adaptativa." },
                { title: "Optimización", text: "Reducción del uso de CPU en entornos con múltiples agentes simulados." }
            ],
            learningTitle: "Lo que aprendí",
            learningText: "Este proyecto me permitió profundizar en la arquitectura interna de Unreal Engine, dominar C++ enfocado a IA y comprender la importancia de equilibrar el realismo de los comportamientos con la optimización en tiempo real."
        },
        en: {
            pageTitle: "Lyra | MarcosRuiz Portfolio",
            titleHero: "Lyra",
            tagline: "A narrative-driven game focused on exploration, atmosphere and interaction.",
            category: "AI GAME PROGRAMMER",
            title: "Lyra",
            years: "2025 — 2026",
            description: "Lyra is a narrative project developed in Unreal Engine focused on creating an immersive experience through advanced AI mechanics and environment interaction.",
            role: "As an AI Game Programmer, I was responsible for designing AI behaviors, Behavior Trees, dynamic navigation, and overall performance optimization.",
            taskTitle: "TASK SUMMARY",
            tasks: [
                "Design and implementation of Behavior Trees for NPCs.",
                "Integration of dynamic navigation systems in Unreal Engine.",
                "Optimization of C++ logic for real-time AI.",
                "Coordination with narrative design team for dynamic events."
            ],
            playBtn: "Play on itch.io",
            trailerLabel: "Watch Official Trailer",
            contributionsTitle: "My Contributions",
            contributionsIntro: "During the development of Lyra, I focused on pushing NPC interactions to the next level:",
            contributions: [
                { title: "AI Architecture", text: "Design and implementation of the core C++ decision system." },
                { title: "Perceptual Systems", text: "Utilizing AIPerception for adaptive sight and hearing detection." },
                { title: "Optimization", text: "Reduced CPU overhead in environments with multiple simulated agents." }
            ],
            learningTitle: "What I Learned",
            learningText: "This project allowed me to dive deep into Unreal Engine's internal architecture, master AI-focused C++, and realize the importance of balancing realistic behavior with real-time performance."
        }
    };

    // Traducciones de la barra de navegación estática
    const navTranslations = {
        es: { home: "Inicio", about: "Quién soy", experience: "Experiencia", projects: "Proyectos", documents: "Documentos", contactButton: "Contacto" },
        en: { home: "Home", about: "About me", experience: "Experience", projects: "Projects", documents: "Documents", contactButton: "Contact me" }
    };

    // Función auxiliar para rellenar texto por ID con comprobación de errores
    function setText(id, text) {
        const el = document.getElementById(id);
        if (el) {
            el.textContent = text || "";
        } else {
            console.warn(`⚠️ [Portfolio] Elemento no encontrado en HTML: #${id}`);
        }
    }

    // Renderizar todos los contenidos según el idioma actual
    function renderProject() {
        const data = projectData[currentLang];
        const navData = navTranslations[currentLang];

        // 1. Guardar la selección en el almacenamiento local del navegador
        localStorage.setItem("preferredLanguage", currentLang);

        // 2. Actualizar texto del botón de idioma
        const langBtn = document.getElementById("language-button");
        if (langBtn) {
            langBtn.textContent = currentLang === "es" ? "EN" : "ES";
        }

        // 3. Traducir navegación estática (elementos con data-i18n)
        document.querySelectorAll("[data-i18n]").forEach((el) => {
            const key = el.getAttribute("data-i18n");
            if (navData && navData[key]) {
                el.textContent = navData[key];
            }
        });

        // 4. Inyectar textos dinámicos del proyecto
        document.title = data.pageTitle;
        setText("project-title-hero", data.titleHero);
        setText("project-tagline", data.tagline);
        setText("project-category", data.category);
        setText("project-title", data.title);
        setText("project-years", data.years);
        setText("project-description", data.description);
        setText("project-role", data.role);
        setText("project-task-title", data.taskTitle);
        setText("project-play", data.playBtn);
        setText("contribution-play", data.playBtn);
        setText("trailer-label", data.trailerLabel);
        setText("contributions-title", data.contributionsTitle);
        setText("contributions-intro", data.contributionsIntro);
        setText("learning-title", data.learningTitle);
        setText("learning-text", data.learningText);

        // Generar lista de tareas en el HTML
        const tasksUl = document.getElementById("project-tasks");
        if (tasksUl) {
            tasksUl.innerHTML = "";
            data.tasks.forEach(task => {
                const li = document.createElement("li");
                li.textContent = task;
                tasksUl.appendChild(li);
            });
        }

        // Generar lista de contribuciones en el HTML
        const contribUl = document.getElementById("contribution-list");
        if (contribUl) {
            contribUl.innerHTML = "";
            data.contributions.forEach(item => {
                const li = document.createElement("li");
                li.innerHTML = `<strong class="contrib-item-title">${item.title}:</strong> <span class="contrib-item-text">${item.text}</span>`;
                contribUl.appendChild(li);
            });
        }

        console.log(`🚀 [Portfolio] Proyecto cargado correctamente en idioma: ${currentLang.toUpperCase()}`);
    }

    // Event listener para cambiar el idioma
    const langBtn = document.getElementById("language-button");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLang = currentLang === "es" ? "en" : "es";
            renderProject();
        });
    }

    // =========================================================
    // TRÁILER DE YOUTUBE / VÍDEO
    // =========================================================
    const trailerFacade = document.querySelector(".trailer-facade");
    if (trailerFacade) {
        trailerFacade.addEventListener("click", () => {
            // Sustituye este ID por el de tu vídeo de YouTube (ejemplo: dQw4w9WgXcQ)
            const youtubeVideoId = "TU_VIDEO_ID_AQUI"; 
            
            if (youtubeVideoId && youtubeVideoId !== "TU_VIDEO_ID_AQUI") {
                trailerFacade.innerHTML = `
                    <iframe 
                        src="https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1" 
                        title="Trailer Video" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen>
                    </iframe>`;
            }
        });
    }

    // =========================================================
    // GALERÍA Y LIGHTBOX
    // =========================================================
    const lightbox = document.getElementById("project-lightbox");
    const lightboxImg = document.getElementById("lightbox-image");
    const lightboxClose = document.getElementById("lightbox-close");

    if (lightbox && lightboxImg) {
        // Abrir imagen al hacer clic en las capturas
        document.querySelectorAll("[data-project-image]").forEach(btn => {
            btn.addEventListener("click", () => {
                const img = btn.querySelector("img");
                if (img && img.src && img.getAttribute("src") !== "") {
                    lightboxImg.src = img.src;
                    lightbox.classList.add("active");
                }
            });
        });

        // Cerrar botón X
        if (lightboxClose) {
            lightboxClose.addEventListener("click", () => {
                lightbox.classList.remove("active");
            });
        }

        // Cerrar haciendo clic fuera
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove("active");
            }
        });
    }

    // Cargar la vista inicial del proyecto
    renderProject();
});
