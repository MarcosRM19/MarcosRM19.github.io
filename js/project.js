/* =========================================================
   MARCOS RM19 — PROJECT SCRIPT
   ========================================================= */

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
        learningText: "Aprendí a diseñar sistemas de gameplay teniendo en cuenta cómo interactúan entre ellos y cómo afectan a la experiencia del jugador. Profundicé en la implementación de inteligencia artificial y en la creación de comportamientos para personajes y enemigos. Mejoré mi capacidad para diseñar niveles a partir de objetivos de gameplay, ritmo y navegación, e iteré mecánicas mediante pruebas de juego.",
        contributionsTitle: "Programación, IA y diseño de niveles",
        contributionsIntro: "Contribuciones clave en el desarrollo técnico y creativo del proyecto:",
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
        playUrl: "https://itch.io", // Sustituir por la URL real de Itch.io
        youtubeId: "YIcgUIwu89U",
        images: {
            infoRight1: "img/lyra/info-1.jpg",
            infoRight2: "img/lyra/info-2.jpg",
            trailer: "img/lyra/trailer-thumb.jpg",
            screenshot1: "img/lyra/screen-1.jpg",
            screenshot2: "img/lyra/screen-2.jpg",
            screenshot3: "img/lyra/screen-3.jpg",
            screenshot4: "img/lyra/screen-4.jpg"
        }
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // 1. Obtener ID del proyecto desde la URL (ej: project.html?id=lyra) o usar 'lyra' por defecto
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get("id") || "lyra";
    const data = projects[projectId] || projects.lyra;

    // 2. Renderizar contenidos dinámicos
    renderProjectData(data);

    // 3. Inicializar vídeo de fondo Hero
    setupHeroVideo(data.youtubeId);

    // 4. Inicializar Lightbox de imágenes
    setupLightbox();

    // 5. Año en el footer
    const footerYear = document.getElementById("footer-year");
    if (footerYear) footerYear.textContent = new Date().getFullYear();
});

/* ---------------------------------------------------------
   RENDERIZADO DE DATOS
   --------------------------------------------------------- */
function renderProjectData(p) {
    // Títulos y metadatos
    setElementText("page-title", `${p.title} | MarcosRuiz Portfolio`);
    setElementText("project-title-hero", p.title);
    setElementText("project-tagline", p.tagline);
    setElementText("project-category", p.category);
    setElementText("project-title", p.title);
    setElementText("project-years", p.years);
    setElementText("project-description", p.description);
    setElementText("project-role", p.role);
    setElementText("project-task-title", p.taskTitle);

    // Lista de tareas
    const tasksContainer = document.getElementById("project-tasks");
    if (tasksContainer) {
        tasksContainer.innerHTML = p.tasks.map(t => `<li>${t}</li>`).join("");
    }

    // Botones de Play / Itch.io
    const itchHero = document.getElementById("project-itch");
    const playBtn1 = document.getElementById("project-play");
    const playBtn2 = document.getElementById("contribution-play");

    if (itchHero) itchHero.href = p.playUrl;
    if (playBtn1) {
        playBtn1.href = p.playUrl;
        playBtn1.textContent = "Play on Itch.io";
    }
    if (playBtn2) {
        playBtn2.href = p.playUrl;
        playBtn2.textContent = "Play on Itch.io";
    }

    // Imágenes principales
    setImageSrc("project-info-right-1", p.images.infoRight1, `Captura 1 de ${p.title}`);
    setImageSrc("project-info-right-2", p.images.infoRight2, `Captura 2 de ${p.title}`);
    setImageSrc("project-trailer-image", p.images.trailer, `Tráiler de ${p.title}`);
    setImageSrc("project-screenshot-1", p.images.screenshot1, `Captura ${p.title} 1`);
    setImageSrc("project-screenshot-2", p.images.screenshot2, `Captura ${p.title} 2`);
    setImageSrc("project-screenshot-3", p.images.screenshot3, `Captura ${p.title} 3`);
    setImageSrc("project-screenshot-4", p.images.screenshot4, `Captura ${p.title} 4`);

    // Contribuciones
    setElementText("contributions-title", p.contributionsTitle);
    setElementText("contributions-intro", p.contributionsIntro);

    const contribList = document.getElementById("contribution-list");
    if (contribList) {
        contribList.innerHTML = p.contributions
            .map(c => `<li><span class="contribution-title">${c.title}:</span> ${c.text}</li>`)
            .join("");
    }

    // Lo que aprendí
    setElementText("learning-title", p.learningTitle);
    setElementText("learning-text", p.learningText);
}

/* ---------------------------------------------------------
   AJUSTE DE VÍDEO EN EL HERO
   --------------------------------------------------------- */
function setupHeroVideo(youtubeId) {
    const iframe = document.getElementById("hero-youtube-iframe");
    if (!iframe || !youtubeId) return;

    // Actualizar src con autoplay y mute
    iframe.src = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=0&showinfo=0&rel=0&playsinline=1&enablejsapi=1`;

    // Revelar el vídeo suavemente tras cargar
    setTimeout(() => {
        iframe.classList.add("is-playing");
    }, 1200);
}

/* ---------------------------------------------------------
   SISTEMA DE LIGHTBOX
   --------------------------------------------------------- */
function setupLightbox() {
    const lightbox = document.getElementById("project-lightbox");
    const lightboxImg = document.getElementById("lightbox-image");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const closeBtn = document.getElementById("lightbox-close");
    const prevBtn = document.getElementById("lightbox-prev");
    const nextBtn = document.getElementById("lightbox-next");

    if (!lightbox || !lightboxImg) return;

    let galleryImages = [];
    let currentIndex = 0;

    // Recopilar todos los elementos interactivos con data-project-image
    const triggerButtons = Array.from(document.querySelectorAll("[data-project-image]"));

    triggerButtons.forEach((btn, idx) => {
        const img = btn.querySelector("img");
        if (img) {
            galleryImages.push({
                src: img.src,
                alt: img.alt || "Captura del proyecto"
            });

            btn.addEventListener("click", () => {
                openLightbox(idx);
            });
        }
    });

    function openLightbox(index) {
        currentIndex = index;
        updateLightboxContent();
        lightbox.classList.add("active");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
        document.body.style.overflow = "";
    }

    function updateLightboxContent() {
        const item = galleryImages[currentIndex];
        if (!item) return;

        // Actualización de src con transición
        lightboxImg.src = item.src;
        lightboxImg.alt = item.alt;
        if (lightboxCaption) lightboxCaption.textContent = item.alt;
    }

    function showNext() {
        currentIndex = (currentIndex + 1) % galleryImages.length;
        updateLightboxContent();
    }

    function showPrev() {
        currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
        updateLightboxContent();
    }

    // Listeners de control
    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (nextBtn) nextBtn.addEventListener("click", showNext);
    if (prevBtn) prevBtn.addEventListener("click", showPrev);

    // Cerrar al pulsar la capa oscura exterior
    lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    // Control con teclado
    document.addEventListener("keydown", (e) => {
        if (!lightbox.classList.contains("active")) return;
        if (e.key === "Escape") closeLightbox();
        if (e.key === "ArrowRight") showNext();
        if (e.key === "ArrowLeft") showPrev();
    });
}

/* ---------------------------------------------------------
   HELPERS
   --------------------------------------------------------- */
function setElementText(id, text) {
    const el = document.getElementById(id);
    if (el && text !== undefined) el.textContent = text;
}

function setImageSrc(id, src, alt) {
    const img = document.getElementById(id);
    if (img && src) {
        img.src = src;
        if (alt) img.alt = alt;
    }
}
