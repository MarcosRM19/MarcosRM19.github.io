const languageButton = document.getElementById("language-button");

let currentLanguage = "en";


/* =========================================================
   TRADUCCIONES
   ========================================================= */

const translations = {

    en: {

        /* ==================== NAVBAR ==================== */

        home: "Home",
        about: "About me",
        experience: "Experience",
        projects: "Projects",
        documents: "Documents",
        contactButton: "Contact me",

        /* ==================== HERO ==================== */

        heroSubtitle: "Game Programmer",

        /* ==================== TECHNICAL SKILLS ==================== */

        technicalTitle: "Technical Skills",

        coreGraphics: "Core & Graphics",
        enginesTools: "Engines & Tools",
        artificialIntelligence: "Artificial Intelligence",
        production: "Production",

        visualStudio: "Visual Studio / Rider",
        machineLearning: "Machine Learning",
        confluenceNotion: "Confluence & Notion",

        /* ==================== ABOUT ==================== */

        aboutLabel:
            "GAME DEVELOPER SPECIALIZED IN GAME PROGRAMMING",

        aboutTitle:
            "Hi! I'm Marcos!",

        aboutParagraph1:
            `Specialized in <strong>gameplay systems</strong> and
            <strong>artificial intelligence systems for video games</strong>.
            I mainly work with <strong>C++</strong> and engines such as
            <strong>Unreal Engine</strong> and <strong>Unity</strong>, and I
            have worked on a project developed for
            <strong>different devices</strong>.`,

        aboutParagraph2:
            `What interests me most about a video game is how a set of
            <strong>systems creates the foundation on which the game is built</strong>.
            I like understanding how they interact with each other and how
            good architecture allows mechanics to be developed and expanded
            in a solid way.`,

        aboutParagraph3:
            `Before each iteration I use <strong>UML</strong> and
            <strong>technical documentation</strong> to plan and structure
            systems before starting their implementation. This gives me a
            clear vision of what needs to be built and helps reduce problems
            during development.`,

        interested:
            "Interested in my work?",

        contactMe:
            "Contact me",

        /* ==================== EXPERIENCE ==================== */

        experienceTitle:
            "Experience",

        remoteBarcelona:
            "REMOTE · BARCELONA",

        onsiteParets:
            "ON-SITE · PARETS DEL VALLÈS",

        breachDescription:
            `Contributed to the development of an unannounced game,
            working as part of a distributed indie studio team across
            gameplay, artificial intelligence, UI, animation integration
            and internal Unity tooling.`,

        projectUnderNDA:
            "PROJECT UNDER NDA",

        unannouncedTitle:
            "UNANNOUNCED TITLE",

        ndaDescription:
            `Project details, gameplay footage and development assets
            cannot be publicly disclosed. The information presented here
            focuses exclusively on my technical contributions.`,

        aiDescription:
            "Designed autonomous entity behaviour combining pathfinding and decision-making logic.",

        gameplayDescription:
            "Developed gameplay mechanics including character progression, traps and special abilities.",

        uiDescription:
            "Built adaptive interfaces with Unity uGUI for different resolutions and target platforms.",

        animationDescription:
            "Integrated Spine skeletal animations into Unity, connecting animation states and transitions with gameplay logic.",

        toolingDescription:
            "Developed custom Unity Editor tools to improve internal workflows and facilitate content iteration.",

        architectureDescription:
            "Worked with data-driven systems and collaborative production workflows inside an active game project.",

        environment:
            "ENVIRONMENT",

        role:
            "ROLE",

        fredenburgDescription:
            `Professional internship in an industrial environment,
            combining quality control, process automation through Excel
            and Visual Basic, and operational work during the relocation
            of the factory to a new facility.`,

        vbaDescription:
            `Developed Visual Basic macros to automate manual tasks
            and optimize workflows carried out through Excel.`,

        qualityDescription:
            `Performed quality control and inspection of parts within
            an industrial environment, following established quality
            procedures.`,

        relocationDescription:
            `Participated in manual and organizational tasks during the
            relocation of production and work processes to a new facility.`,

        processDescription:
            `Identified repetitive tasks and created automated solutions
            to reduce manual work and improve the workflow with Excel.`,

        /* ==================== PROJECTS ==================== */

        projectsTitle:
            "Personal & University Projects",

        lyraTeam:
            "La Mapachanda / Bachelor's Thesis at ENTI - UB / 2025 - 2026",

        lyraDescription:
            "Wholesome 3D puzzle adventure developed in Unreal Engine 5. Winner of Best TFG at ENTI DemoDay 2026.",

        personalProject2025:
            "Personal Project / 2025 - 2026",

        personalProject:
            "Personal Project",

        universityProject:
            "La Mapachanda / University Project / 2024 - 2025",

        juanDescription:
            "Co-op pirate adventure, focused on chaotic naval combat and cooperative gameplay.",

        viewDetails:
            "View details",

        /* ==================== OTHER PROJECTS ==================== */

        otherProjects:
            "Other Personal Projects",

        visualNovel:
            "Visual Novel",

        barbaridadDescription:
            "Visual Novel where you take on the role of the owner of the typical Bar Manolo for a week.",

        barbaridadHighlight:
            "Designed the day-to-day progression and programmed the gameplay systems.",

        actionCombat25D:
            "2.5D Action & Combat Game",

        ryuzukiDescription:
            "A 2.5D melee combat prototype.",

        ryuzukiHighlight:
            "Programmed enemy and boss behaviour and designed the enemy waves.",

        circlesDescription:
            "Bullet Hell where you are trapped inside a ring and have to survive for 1 minute.",

        circlesHighlight:
            "Programmed deadly elements of the ring and visual effects.",

        playOnItch:
            "Play on Itch.io →",

        /* ==================== DOCUMENTS ==================== */

        documentsTitle:
            "Programming & Analysis Documents",

        documentsIntro:
            "A selection of write-ups, GDDs and post-mortems from the projects above.",

        aiThesis:
            "Artificial Intelligence Bachelor's Thesis",

        lyraDocumentDescription:
            "Read about the design and implementation behind Lyra's artificial intelligence, my Bachelor's Thesis.",

        spanish:
            "SPANISH",

        research:
            "Research",

        selfPlayTitle:
            "Self-Play as a Learning Methodology in Unity",

        selfPlayDescription:
            "Read my study on Machine Learning in Unity and learning through Self-Play.",

        /* ==================== CONTACT ==================== */

        location:
            "LOCATION",

        sendMessage:
            "Send me a message",

        contactTitle:
            "Contact me",

        yourName:
            "Your Name",

        yourEmail:
            "Your Email",

        message:
            "Message",

        namePlaceholder:
            "Enter your name",

        emailPlaceholder:
            "Enter your email",

        messagePlaceholder:
            "Write your message...",

        sendMessageButton:
            "Send message",

        sending:
            "Sending...",

        messageSent:
            "✓ Message sent successfully.",

        messageSentButton:
            "Message sent",

        messageError:
            "The message could not be sent. Please try again."

    },


    es: {

        /* ==================== NAVBAR ==================== */

        home:
            "Inicio",

        about:
            "Quién soy",

        experience:
            "Experiencia",

        projects:
            "Proyectos",

        documents:
            "Documentos",

        contactButton:
            "Contáctame",

        /* ==================== HERO ==================== */

        heroSubtitle:
            "Programador de Videojuegos",

        /* ==================== TECHNICAL SKILLS ==================== */

        technicalTitle:
            "Conocimientos técnicos",

        coreGraphics:
            "Core y Gráficos",

        enginesTools:
            "Motores y Herramientas",

        artificialIntelligence:
            "Inteligencia Artificial",

        production:
            "Producción",

        visualStudio:
            "Visual Studio / Rider",

        machineLearning:
            "Machine Learning",

        confluenceNotion:
            "Confluence y Notion",

        /* ==================== ABOUT ==================== */

        aboutLabel:
            "GAME DEVELOPER ESPECIALIZADO EN GAME PROGRAMMER",

        aboutTitle:
            "¡Hola! ¡Soy Marcos!",

        aboutParagraph1:
            `Especializado en <strong>sistemas de gameplay</strong> y
            <strong>sistemas de inteligencia artificial para videojuegos</strong>.
            Trabajo principalmente con <strong>C++</strong> y motores como
            <strong>Unreal Engine</strong> y <strong>Unity</strong>, y he
            trabajado en un proyecto desarrollado para
            <strong>diferentes dispositivos</strong>.`,

        aboutParagraph2:
            `Lo que más me interesa de un videojuego es cómo el conjunto de
            <strong>sistemas crea la base sobre la que se construye el juego</strong>.
            Me gusta entender cómo interactúan entre ellos y cómo una buena
            arquitectura permite desarrollar y ampliar las mecánicas de forma
            sólida.`,

        aboutParagraph3:
            `Antes de cada iteración utilizo <strong>UML</strong> y
            <strong>documentación técnica</strong> para plantear y estructurar
            los sistemas antes de comenzar su implementación. Esto me permite
            tener una visión clara de lo que se quiere construir y reducir
            problemas durante el desarrollo.`,

        interested:
            "¿Te interesa mi trabajo?",

        contactMe:
            "Contáctame",

        /* ==================== EXPERIENCE ==================== */

        experienceTitle:
            "Experiencia",

        remoteBarcelona:
            "REMOTO · BARCELONA",

        onsiteParets:
            "PRESENCIAL · PARETS DEL VALLÈS",

        breachDescription:
            `Contribuí al desarrollo de un juego no anunciado, trabajando
            como parte de un equipo indie distribuido en diferentes áreas
            como gameplay, inteligencia artificial, UI, integración de
            animaciones y herramientas internas de Unity.`,

        projectUnderNDA:
            "PROYECTO BAJO NDA",

        unannouncedTitle:
            "TÍTULO NO ANUNCIADO",

        ndaDescription:
            `Los detalles del proyecto, imágenes de gameplay y recursos de
            desarrollo no pueden hacerse públicos. La información presentada
            aquí se centra exclusivamente en mis contribuciones técnicas.`,

        aiDescription:
            "Diseñé el comportamiento de entidades autónomas combinando pathfinding y lógica de toma de decisiones.",

        gameplayDescription:
            "Desarrollé mecánicas de gameplay incluyendo progresión de personajes, trampas y habilidades especiales.",

        uiDescription:
            "Desarrollé interfaces adaptativas con Unity uGUI para diferentes resoluciones y plataformas objetivo.",

        animationDescription:
            "Integré animaciones esqueléticas de Spine en Unity, conectando estados y transiciones de animación con la lógica de gameplay.",

        toolingDescription:
            "Desarrollé herramientas personalizadas del Unity Editor para mejorar los flujos de trabajo internos y facilitar la iteración de contenido.",

        architectureDescription:
            "Trabajé con sistemas data-driven y flujos de producción colaborativos dentro de un proyecto de videojuegos activo.",

        environment:
            "ENTORNO",

        role:
            "ROL",

        fredenburgDescription:
            `Prácticas profesionales en un entorno industrial, combinando
            control de calidad, automatización de procesos mediante Excel
            y Visual Basic, y trabajo operativo durante el traslado de la
            fábrica a una nueva instalación.`,

        vbaDescription:
            `Desarrollé macros con Visual Basic para automatizar tareas
            manuales y optimizar procesos de trabajo realizados mediante Excel.`,

        qualityDescription:
            `Realicé tareas de control de calidad y revisión de piezas dentro
            de un entorno industrial, siguiendo los procesos establecidos
            de calidad.`,

        relocationDescription:
            `Participé en tareas manuales y de organización durante el
            traslado de la producción y los procesos de trabajo hacia
            una nueva instalación.`,

        processDescription:
            `Identifiqué tareas repetitivas y creé soluciones automatizadas
            para reducir el trabajo manual y mejorar el flujo de trabajo
            con Excel.`,

        /* ==================== PROJECTS ==================== */

        projectsTitle:
            "Proyectos Personales y Universitarios",

        lyraTeam:
            "La Mapachanda / TFG en ENTI - UB / 2025 - 2026",

        lyraDescription:
            "Aventura de puzles 3D desarrollada en Unreal Engine 5. Ganadora del Mejor TFG en ENTI DemoDay 2026.",

        personalProject2025:
            "Proyecto Personal / 2025 - 2026",

        personalProject:
            "Proyecto Personal",

        universityProject:
            "La Mapachanda / Proyecto Universitario / 2024 - 2025",

        juanDescription:
            "Aventura pirata cooperativa centrada en combates navales caóticos y gameplay cooperativo.",

        viewDetails:
            "Ver detalles",

        /* ==================== OTHER PROJECTS ==================== */

        otherProjects:
            "Otros Proyectos Personales",

        visualNovel:
            "Visual Novel",

        barbaridadDescription:
            "Visual Novel donde asumes el rol de dueño del típico Bar Manolo durante una semana.",

        barbaridadHighlight:
            "Diseñé la progresión de los días y programé los sistemas de gameplay.",

        actionCombat25D:
            "Juego de acción y combate en 2.5D",

        ryuzukiDescription:
            "Un prototipo de combate melee en 2.5D.",

        ryuzukiHighlight:
            "Programé el comportamiento de los enemigos y bosses y diseñé las oleadas del juego.",

        circlesDescription:
            "Bullet Hell donde estás encerrado en un ring y tienes que sobrevivir durante 1 minuto.",

        circlesHighlight:
            "Programé elementos mortales del ring y efectos visuales.",

        playOnItch:
            "Juega en Itch.io →",

        /* ==================== DOCUMENTS ==================== */

        documentsTitle:
            "Documentos de programación y análisis",

        documentsIntro:
            "Selección de write-ups, GDDs y post-mortems de los proyectos de arriba.",

        aiThesis:
            "TFG de Inteligencia Artificial",

        lyraDocumentDescription:
            "Lee el diseño e implementación detrás de la inteligencia artificial de Lyra, mi TFG.",

        spanish:
            "CASTELLANO",

        research:
            "Investigación",

        selfPlayTitle:
            "Self-Play como metodología de aprendizaje en Unity",

        selfPlayDescription:
            "Lee mi estudio sobre el Machine Learning en Unity y el aprendizaje mediante Self-Play.",

        /* ==================== CONTACT ==================== */

        location:
            "UBICACIÓN",

        sendMessage:
            "Envíame un mensaje",

        contactTitle:
            "Contacta conmigo",

        yourName:
            "Tu Nombre",

        yourEmail:
            "Tu Mail",

        message:
            "Mensaje",

        namePlaceholder:
            "Escribe tu nombre",

        emailPlaceholder:
            "Escribe tu email",

        messagePlaceholder:
            "Escribe tu mensaje...",

        sendMessageButton:
            "Enviar mensaje",

        sending:
            "Enviando...",

        messageSent:
            "✓ Mensaje enviado correctamente.",

        messageSentButton:
            "Mensaje enviado",

        messageError:
            "No se ha podido enviar el mensaje. Inténtalo de nuevo."

    }

};


/* =========================================================
   FUNCIÓN PARA OBTENER UNA TRADUCCIÓN
   ========================================================= */

function translate(key) {

    return translations[currentLanguage][key];

}


/* =========================================================
   ACTUALIZAR ELEMENTOS data-i18n
   ========================================================= */

function updateTextTranslations() {

    const elements =
        document.querySelectorAll("[data-i18n]");


    elements.forEach(function (element) {

        const key =
            element.getAttribute("data-i18n");


        if (
            translations[currentLanguage][key] !== undefined
        ) {

            element.innerHTML =
                translations[currentLanguage][key];

        }

    });

}


/* =========================================================
   ACTUALIZAR PLACEHOLDERS
   ========================================================= */

function updatePlaceholderTranslations() {

    const elements =
        document.querySelectorAll(
            "[data-i18n-placeholder]"
        );


    elements.forEach(function (element) {

        const key =
            element.getAttribute(
                "data-i18n-placeholder"
            );


        if (
            translations[currentLanguage][key] !== undefined
        ) {

            element.placeholder =
                translations[currentLanguage][key];

        }

    });

}


/* =========================================================
   ACTUALIZAR IDIOMA DEL HTML
   ========================================================= */

function updateDocumentLanguage() {

    document.documentElement.lang =
        currentLanguage;

}


/* =========================================================
   ACTUALIZAR BOTÓN DE IDIOMA
   ========================================================= */

function updateLanguageButton() {

    if (!languageButton) {
        return;
    }


    languageButton.textContent =
        currentLanguage === "en"
            ? "ES"
            : "EN";

}


/* =========================================================
   ACTUALIZAR FORMULARIO DE CONTACTO
   ========================================================= */

function updateContactForm() {

    const contactSubmit =
        document.getElementById("contact-submit");


    if (contactSubmit) {

        /*
         * Solo cambiamos el texto si el botón
         * no está deshabilitado/enviando.
         */

        if (!contactSubmit.disabled) {

            contactSubmit.textContent =
                translate("sendMessageButton");

        }

    }

}


/* =========================================================
   ACTUALIZAR TODA LA PÁGINA
   ========================================================= */

function updateLanguage() {

    updateTextTranslations();

    updatePlaceholderTranslations();

    updateDocumentLanguage();

    updateLanguageButton();

    updateContactForm();

}


/* =========================================================
   CAMBIAR IDIOMA
   ========================================================= */

if (languageButton) {

    languageButton.addEventListener(
        "click",
        function () {

            if (currentLanguage === "en") {

                currentLanguage = "es";

            } else {

                currentLanguage = "en";

            }


            updateLanguage();

        }
    );

}


/* =========================================================
   INICIALIZACIÓN
   ========================================================= */

updateLanguage();


/* =========================================================
   HACER LA TRADUCCIÓN ACCESIBLE PARA EL FORMULARIO
   INLINE SCRIPT
   ========================================================= */

window.portfolioTranslate = translate;

window.portfolioGetLanguage = function () {

    return currentLanguage;

};

