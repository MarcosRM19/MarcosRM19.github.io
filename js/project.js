/**
 * project.js - Lógica para la página de detalle de proyectos
 * Maneja i18n (Español/Inglés), carga de datos del proyecto y el Lightbox de la galería.
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================================================
       1. DICCIONARIO DE TRADUCCIONES GENERALES (NAVBAR, FOOTER, UI)
       ========================================================================== */
    const UI_TRANSLATIONS = {
        es: {
            home: "Inicio",
            about: "Quién soy",
            experience: "Experiencia",
            projects: "Proyectos",
            documents: "Documentos",
            contactButton: "Contacto",
            moreProjects: "Más proyectos",
            playOnItch: "Juega en itch.io",
            trailerLabel: "Ver Tráiler / Galería",
            contributionsTitle: "Mis Contribuciones",
            learningTitle: "Lo que aprendí",
            close: "Cerrar",
            prev: "Anterior",
            next: "Siguiente"
        },
        en: {
            home: "Home",
            about: "About Me",
            experience: "Experience",
            projects: "Projects",
            documents: "Documents",
            contactButton: "Contact me",
            moreProjects: "More projects",
            playOnItch: "Play on itch.io",
            trailerLabel: "Watch Trailer / Gallery",
            contributionsTitle: "My Contributions",
            learningTitle: "What I Learned",
            close: "Close",
            prev: "Previous",
            next: "Next"
        }
    };

    /* ==========================================================================
       2. BASE DE DATOS DE PROYECTOS (DATOS ES / EN POR PROYECTO)
       ========================================================================== */
    const PROJECTS_DATA = {
        lyra: {
            videoBg: "vid/Lyra.mp4",
            itchUrl: "https://marcos-ruiz.itch.io",
            playUrl: "https://marcos-ruiz.itch.io",
            
            // Imágenes para la galería / lightbox
            images: {
                "info-right-1": { src: "img/Lyra/Lyra_1.webp", caption: "Lyra - Entorno y Atmósfera" },
                "info-right-2": { src: "img/Lyra/Lyra_2.webp", caption: "Lyra - Mecánicas de Interacción" },
                "trailer": { src: "img/Lyra/Lyra_3.webp", caption: "Lyra - Vistazo al Gameplay" },
                "screenshot-1": { src: "img/Lyra/Lyra_4.webp", caption: "Lyra - Captura de Galería 1" },
                "screenshot-2": { src: "img/Lyra/Lyra_5.webp", caption: "Lyra - Captura de Galería 2" },
                "screenshot-3": { src: "img/Lyra/Lyra_6.webp", caption: "Lyra - Captura de Galería 3" },
                "screenshot-4": { src: "img/Lyra/Lyra_7.webp", caption: "Lyra - Captura de Galería 4" }
            },

            es: {
                pageTitle: "Lyra | MarcosRuiz Portfolio",
                heroTitle: "Lyra",
                tagline: "Un juego narrativo centrado en la exploración, la atmósfera y la interacción.",
                category: "Videojuego Narrativo 3D",
                title: "Lyra",
                years: "2023 - 2024",
                description: "Lyra es una experiencia inmersiva centrada en la narrativa ambiental y el descubrimiento guiado por el entorno.",
                role: "Rol principal: Designer & Game Developer",
                taskTitle: "Tareas Principales:",
                tasks: [
                    "Diseño de niveles e iluminación atmosférica.",
                    "Implementación de mecánicas de interacción en C#.",
                    "Optimización de rendimiento y assets en el motor gráfico.",
                    "Diseño del flujo narrativo y ritmo de juego."
                ],
                contributionsIntro: "Durante el desarrollo de Lyra me enfoqué en conectar las mecánicas del jugador con la narrativa del mundo:",
                contributions: [
                    "Diseño del sistema de interacción contextual para objetos clave.",
                    "Implementación de secuencias de eventos (triggers) para la progresión narrativa.",
                    "Pintado de terrenos y composición de assets para maximizar el dinamismo visual.",
                    "Pruebas de usabilidad (Playtesting) y pulido de controles."
                ],
                learningText: "Este proyecto reforzó la importancia del diseño narrativo no explícito y el impacto de la iluminación para guiar la atención del jugador sin recurrir a interfaces invasivas."
            },

            en: {
                pageTitle: "Lyra | MarcosRuiz Portfolio",
                heroTitle: "Lyra",
                tagline: "A narrative-driven game focused on exploration, atmosphere and interaction.",
                category: "3D Narrative Game",
                title: "Lyra",
                years: "2023 - 2024",
                description: "Lyra is an immersive experience focused on environmental storytelling and exploration.",
                role: "Primary Role: Designer & Game Developer",
                taskTitle: "Key Tasks:",
                tasks: [
                    "Level design and atmospheric lighting.",
                    "Implementation of interaction mechanics in C#.",
                    "Performance and asset optimization within the game engine.",
                    "Narrative flow and pacing design."
                ],
                contributionsIntro: "During Lyra's development, I focused on seamlessly tying gameplay mechanics into the world narrative:",
                contributions: [
                    "Designed context-sensitive interaction systems for key narrative objects.",
                    "Implemented scripted trigger events for narrative progression.",
                    "Terrain painting and environment staging to maximize visual dynamism.",
                    "Playtesting iteration and control fine-tuning."
                ],
                learningText: "This project strengthened my understanding of environmental storytelling and how lighting can guide player attention without cluttering the UI."
            }
        }
    };

    /* ==========================================================================
       3. GESTIÓN DE ESTADO E IDIOMA
       ========================================================================== */
    let currentLang = localStorage.getItem('preferredLang') || 'es';

    // Obtener ID del proyecto desde la URL (ej: project.html?id=lyra)
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'lyra';

    // Si el proyecto no existe en la BD, usamos 'lyra' por defecto
    const project = PROJECTS_DATA[projectId] || PROJECTS_DATA['lyra'];

    /* ==========================================================================
       4. FUNCIONES DE ACTUALIZACIÓN DE LA INTERFAZ
       ========================================================================== */
    function updateUI() {
        const langData = project[currentLang];
        const uiText = UI_TRANSLATIONS[currentLang];

        // 1. Actualizar Idioma en Botón
        const langBtn = document.getElementById('language-button');
        if (langBtn) {
            langBtn.textContent = currentLang === 'es' ? 'EN' : 'ES';
        }

        // 2. Traducir Elementos Globales (Navbar & Footer via data-i18n)
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (uiText[key]) {
                el.textContent = uiText[key];
            }
        });

        // Botones "Más proyectos"
        document.querySelectorAll('a[id^="more-projects-btn"]').forEach(btn => {
            btn.textContent = uiText.moreProjects;
        });

        // 3. Título de la pestaña
        const pageTitle = document.getElementById('page-title');
        if (pageTitle) pageTitle.textContent = langData.pageTitle;

        // 4. Hero Sección
        const heroTitle = document.getElementById('project-title-hero');
        if (heroTitle) heroTitle.textContent = langData.heroTitle;

        const heroTagline = document.getElementById('project-tagline');
        if (heroTagline) heroTagline.textContent = langData.tagline;

        const itchLink = document.getElementById('project-itch');
        if (itchLink && project.itchUrl) itchLink.href = project.itchUrl;

        const videoElem = document.getElementById('hero-mp4-video');
        if (videoElem && project.videoBg) {
            const source = videoElem.querySelector('source');
            if (source && source.src !== project.videoBg) {
                source.src = project.videoBg;
                videoElem.load();
            }
        }

        // 5. Primera Parte (Info + Tareas)
        setElemText('project-category', langData.category);
        setElemText('project-title', langData.title);
        setElemText('project-years', langData.years);
        setElemText('project-description', langData.description);
        setElemText('project-role', langData.role);
        setElemText('project-task-title', langData.taskTitle);

        renderList('project-tasks', langData.tasks);

        const playBtn1 = document.getElementById('project-play');
        if (playBtn1) {
            playBtn1.textContent = uiText.playOnItch;
            playBtn1.href = project.playUrl || "#";
        }

        // 6. Sección Tráiler & Galería
        setElemText('trailer-label', uiText.trailerLabel);

        // Cargar fuentes de imágenes
        Object.keys(project.images).forEach(imgKey => {
            const imgData = project.images[imgKey];
            const imgElem = document.getElementById(`project-${imgKey}`) || document.getElementById(`project-info-${imgKey.replace('info-', '')}`);
            if (imgElem) {
                imgElem.src = imgData.src;
                imgElem.alt = imgData.caption;
            }
        });

        // 7. Sección Contribuciones & Aprendizaje
        setElemText('contributions-title', uiText.contributionsTitle);
        setElemText('contributions-intro', langData.contributionsIntro);
        renderList('contribution-list', langData.contributions);

        setElemText('learning-title', uiText.learningTitle);
        setElemText('learning-text', langData.learningText);

        const playBtn2 = document.getElementById('contribution-play');
        if (playBtn2) {
            playBtn2.textContent = uiText.playOnItch;
            playBtn2.href = project.playUrl || "#";
        }
    }

    // Auxiliar: Asignar texto a un elemento si existe
    function setElemText(id, text) {
        const elem = document.getElementById(id);
        if (elem) elem.textContent = text || '';
    }

    // Auxiliar: Renderizar listas (<ul>)
    function renderList(containerId, items) {
        const container = document.getElementById(containerId);
        if (!container) return;
        container.innerHTML = '';
        if (Array.isArray(items)) {
            items.forEach(itemText => {
                const li = document.createElement('li');
                li.textContent = itemText;
                container.appendChild(li);
            });
        }
    }

    /* ==========================================================================
       5. EVENTOS DE CAMBIO DE IDIOMA
       ========================================================================== */
    const langBtn = document.getElementById('language-button');
    if (langBtn) {
        langBtn.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            localStorage.setItem('preferredLang', currentLang);
            updateUI();
        });
    }

    /* ==========================================================================
       6. SISTEMA DE LIGHTBOX PARA LA GALERÍA
       ========================================================================== */
    const lightbox = document.getElementById('project-lightbox');
    const lightboxImg = document.getElementById('lightbox-image');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.getElementById('lightbox-close');
    const prevBtn = document.getElementById('lightbox-prev');
    const nextBtn = document.getElementById('lightbox-next');

    let currentGalleryKeys = [];
    let currentImageIndex = 0;

    function buildGalleryList() {
        currentGalleryKeys = Object.keys(project.images);
    }

    function openLightbox(key) {
        if (!lightbox || !project.images[key]) return;
        
        buildGalleryList();
        currentImageIndex = currentGalleryKeys.indexOf(key);
        
        if (currentImageIndex === -1) currentImageIndex = 0;

        showLightboxImage(currentImageIndex);
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Bloquear scroll de fondo
    }

    function showLightboxImage(index) {
        const key = currentGalleryKeys[index];
        const imgData = project.images[key];
        if (!imgData) return;

        lightboxImg.src = imgData.src;
        lightboxImg.alt = imgData.caption || '';
        lightboxCaption.textContent = imgData.caption || '';
    }

    function closeLightbox() {
        if (!lightbox) return;
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function prevImage() {
        if (currentGalleryKeys.length === 0) return;
        currentImageIndex = (currentImageIndex - 1 + currentGalleryKeys.length) % currentGalleryKeys.length;
        showLightboxImage(currentImageIndex);
    }

    function nextImage() {
        if (currentGalleryKeys.length === 0) return;
        currentImageIndex = (currentImageIndex + 1) % currentGalleryKeys.length;
        showLightboxImage(currentImageIndex);
    }

    // Registrar clicks en todos los botones con data-project-image
    document.querySelectorAll('[data-project-image]').forEach(button => {
        button.addEventListener('click', () => {
            const imageKey = button.getAttribute('data-project-image');
            openLightbox(imageKey);
        });
    });

    // Eventos de controles de Lightbox
    if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
    if (prevBtn) prevBtn.addEventListener('click', prevImage);
    if (nextBtn) nextBtn.addEventListener('click', nextImage);

    // Cerrar al hacer clic fuera del contenido de la imagen
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Soporte para navegación con teclado
    document.addEventListener('keydown', (e) => {
        if (!lightbox || !lightbox.classList.contains('active')) return;
        
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'ArrowRight') nextImage();
    });

    /* ==========================================================================
       7. INICIALIZACIÓN
       ========================================================================== */
    updateUI();
});
