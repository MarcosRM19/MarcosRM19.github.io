const projects = {

    /* =========================================================
       LYRA
       ========================================================= */

    lyra: {

        title: "Lyra",

        subtitle: "AI Game Programmer",

        heroSubtitle: "AI Game Programmer",

        year: "2025 — 2026",

        label: "UNIVERSITY PROJECT",

        description:
            "Wholesome 3D puzzle adventure developed in Unreal Engine 5.",

        description2:
            "A project focused on intelligent animal-like AI behaviour, dynamic navigation and systemic gameplay.",

        itch:
            "",

        heroVideo:
            "",

        trailer:
            "",

        images: {

            infoLeft:
                "img/projects/lyra/info-left.jpg",

            infoRight1:
                "img/projects/lyra/info-right-1.jpg",

            infoRight2:
                "img/projects/lyra/info-right-2.jpg",

            gallery1:
                "img/projects/lyra/screenshot-1.jpg",

            gallery2:
                "img/projects/lyra/screenshot-2.jpg",

            gallery3:
                "img/projects/lyra/screenshot-3.jpg",

            gallery4:
                "img/projects/lyra/screenshot-4.jpg"

        },

        contributionTitle:
            "AI & Gameplay Systems",

        contributionDescription:
            "My main responsibility in Lyra was the development of the artificial intelligence systems and the technical foundations required for autonomous character behaviour.",

        contributions: [

            "Designed a custom <strong>Organic Locomotion System</strong> using Bézier curves and NavMesh for fluid, animal-like AI movement.",

            "Built a <strong>Decoupled AI Architecture</strong> combining FSMs and Behaviour Trees through Blueprint Interfaces.",

            "Developed <strong>Dynamic Navigation & Avoidance Systems</strong> for coordinated multi-agent movement."

        ],

        learningTitle:
            "Building AI systems for production",

        learningDescription:
            "Through Lyra I learned how to design AI systems as reusable and scalable gameplay systems. I improved my understanding of navigation, behaviour architecture and how different systems can communicate without becoming tightly coupled."

    },


    /* =========================================================
       UNITY AI MACHINE LEARNING
       ========================================================= */

    tank: {

        title: "Unity AI MachineLearning",

        subtitle: "Designer & Programmer",

        heroSubtitle: "Autonomous Combat AI",

        year: "2025 — 2026",

        label: "PERSONAL PROJECT",

        description:
            "Engine-native autonomous combat agent built with Unity ML-Agents and PPO for a 3D tank combat simulation.",

        description2:
            "The project explores curriculum learning, reward shaping and competitive self-play to progressively train autonomous combat agents.",

        itch:
            "",

        heroVideo:
            "",

        trailer:
            "",

        images: {

            infoLeft:
                "img/projects/tank/info-left.jpg",

            infoRight1:
                "img/projects/tank/info-right-1.jpg",

            infoRight2:
                "img/projects/tank/info-right-2.jpg",

            gallery1:
                "img/projects/tank/screenshot-1.jpg",

            gallery2:
                "img/projects/tank/screenshot-2.jpg",

            gallery3:
                "img/projects/tank/screenshot-3.jpg",

            gallery4:
                "img/projects/tank/screenshot-4.jpg"

        },

        contributionTitle:
            "Machine Learning & Combat AI",

        contributionDescription:
            "I developed the complete training pipeline and the systems required to create, train and evaluate autonomous tank combat agents.",

        contributions: [

            "Built a <strong>PPO Combat Agent</strong> with custom observations, hybrid action spaces and reward shaping.",

            "Designed a <strong>4-Phase Curriculum Learning Pipeline</strong> for progressive autonomous training.",

            "Implemented <strong>Self-Play & ELO Evaluation</strong> with a historical model pool."

        ],

        learningTitle:
            "Training autonomous agents",

        learningDescription:
            "This project taught me how to structure a machine learning problem for a game environment, from observation design and reward functions to curriculum learning and evaluation through self-play."

    },


    /* =========================================================
       JUAN PIEZA
       ========================================================= */

    "juan-pieza": {

        title: "Juan Pieza",

        subtitle: "Game Programmer & Level Designer",

        heroSubtitle: "Game Programmer & Level Designer",

        year: "2024 — 2025",

        label: "UNIVERSITY PROJECT",

        description:
            "Co-op pirate adventure focused on chaotic naval combat and cooperative gameplay.",

        description2:
            "The project combines cooperative gameplay, naval combat, environmental systems and structured enemy encounters.",

        itch:
            "",

        heroVideo:
            "",

        trailer:
            "",

        images: {

            infoLeft:
                "img/projects/juan-pieza/info-left.jpg",

            infoRight1:
                "img/projects/juan-pieza/info-right-1.jpg",

            infoRight2:
                "img/projects/juan-pieza/info-right-2.jpg",

            gallery1:
                "img/projects/juan-pieza/screenshot-1.jpg",

            gallery2:
                "img/projects/juan-pieza/screenshot-2.jpg",

            gallery3:
                "img/projects/juan-pieza/screenshot-3.jpg",

            gallery4:
                "img/projects/juan-pieza/screenshot-4.jpg"

        },

        contributionTitle:
            "Gameplay & Level Design",

        contributionDescription:
            "My work focused on developing the core gameplay systems and designing the systems responsible for structuring naval encounters.",

        contributions: [

            "Developed <strong>Core Gameplay Systems</strong> including ship controls, combat and environmental interactions.",

            "Developed <strong>Weather Systems</strong> to enhance the game's naval gameplay.",

            "Designed <strong>Enemy Wave Systems & Encounter Flow</strong> to structure the game's combat progression."

        ],

        learningTitle:
            "Designing gameplay systems",

        learningDescription:
            "Juan Pieza helped me understand how gameplay systems, level design and encounter structure need to work together to create a consistent player experience."

    }

};


/* =========================================================
   OBTENER PROYECTO DE LA URL
   ========================================================= */

const params =
    new URLSearchParams(window.location.search);

const projectId =
    params.get("project");


/* =========================================================
   COMPROBAR PROYECTO
   ========================================================= */

if (!projects[projectId]) {

    console.error(
        "Project not found:",
        projectId
    );

} else {

    loadProject(
        projects[projectId]
    );

}


/* =========================================================
   CARGAR PROYECTO
   ========================================================= */

function loadProject(project) {


    /* ==================== TÍTULOS ==================== */

    document.title =
        `Marcos RM19 | ${project.title}`;


    document.getElementById(
        "project-hero-title"
    ).textContent =
        project.title;


    document.getElementById(
        "project-hero-subtitle"
    ).textContent =
        project.heroSubtitle;


    document.getElementById(
        "project-info-label"
    ).textContent =
        project.label;


    document.getElementById(
        "project-info-title"
    ).textContent =
        project.title;


    document.getElementById(
        "project-info-subtitle"
    ).textContent =
        project.subtitle;


    document.getElementById(
        "project-info-year"
    ).textContent =
        project.year;



    /* ==================== DESCRIPCIONES ==================== */

    document.getElementById(
        "project-info-description"
    ).textContent =
        project.description;


    document.getElementById(
        "project-info-description-2"
    ).textContent =
        project.description2;



    /* ==================== ITCH ==================== */

    document.getElementById(
        "project-hero-itch"
    ).href =
        project.itch;


    document.getElementById(
        "project-info-itch"
    ).href =
        project.itch;



    /* ==================== IMAGENES ==================== */

    document.getElementById(
        "project-info-image-left"
    ).src =
        project.images.infoLeft;


    document.getElementById(
        "project-info-image-right-1"
    ).src =
        project.images.infoRight1;


    document.getElementById(
        "project-info-image-right-2"
    ).src =
        project.images.infoRight2;


    document.getElementById(
        "project-gallery-1"
    ).src =
        project.images.gallery1;


    document.getElementById(
        "project-gallery-2"
    ).src =
        project.images.gallery2;


    document.getElementById(
        "project-gallery-3"
    ).src =
        project.images.gallery3;


    document.getElementById(
        "project-gallery-4"
    ).src =
        project.images.gallery4;



    /* ==================== VIDEOS ==================== */

    document.getElementById(
        "project-hero-youtube"
    ).src =
        project.heroVideo;


    document.getElementById(
        "project-trailer-youtube"
    ).src =
        project.trailer;



    /* ==================== CONTRIBUCIÓN ==================== */

    document.getElementById(
        "contribution-title"
    ).textContent =
        project.contributionTitle;


    document.getElementById(
        "contribution-description"
    ).textContent =
        project.contributionDescription;


    const contributionList =
        document.getElementById(
            "contribution-list"
        );


    contributionList.innerHTML = "";


    project.contributions.forEach(
        function (contribution) {

            const li =
                document.createElement("li");

            li.innerHTML =
                contribution;

            contributionList.appendChild(li);

        }
    );



    /* ==================== APRENDIZAJE ==================== */

    document.getElementById(
        "learning-title"
    ).textContent =
        project.learningTitle;


    document.getElementById(
        "learning-description"
    ).textContent =
        project.learningDescription;

}
