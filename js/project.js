const projects = {
    lyra: {
        category: "AI / GAME PROGRAMMING",
        title: "Lyra",
        years: "2025 — 2026",
        trailerVideo: "vid/Lyra.mp4",
        youtubeId: "YIcgUIwu89U",
        hero: "img/projects/lyra/hero.jpg",
        infoRight1: "img/projects/lyra/info-right-1.jpg",
        infoRight2: "img/projects/lyra/info-right-2.jpg",
        screenshot1: "img/projects/lyra/screenshot-1.jpg",
        screenshot2: "img/projects/lyra/screenshot-2.jpg",
        screenshot3: "img/projects/lyra/screenshot-3.jpg",
        screenshot4: "img/projects/lyra/screenshot-4.jpg",
        itch: "#",

        en: {
            tagline: "A 3D wholesome puzzle-adventure about two baby dragons, built in Unreal Engine 5.",
            description: "Lyra is a 3D wholesome puzzle-adventure developed in Unreal Engine 5 as my Bachelor's Thesis (TFG) at ENTI-UB. I worked as an AI Game Programmer, designing and implementing custom AI systems and an organic locomotion model for the two baby dragon companions. The project won Best TFG at ENTI DemoDay 2026.",
            role: "My role focused on AI gameplay programming, custom locomotion design, multi-agent navigation, and decoupling cognitive logic from physical execution.",
            taskTitle: "TASK OVERVIEW",
            tasks: [
                "Designed a custom Organic Locomotion System using Bézier curves to eliminate rigid pathfinding.",
                "Programmed a NavMesh detection and terrain validation system tailored for organic curve paths.",
                "Built a Decoupled AI Architecture combining FSMs, Behavior Trees, and Blueprint Interfaces.",
                "Developed dynamic navigation and avoidance systems for coordinated multi-agent movement."
            ],

            /* ZONA 3: MIS CONTRIBUCIONES (MY CONTRIBUTIONS) */
            contributionsTitle: "My Contributions",
            contributionsIntro: "Lyra was my Bachelor's Thesis (TFG), where I took full ownership of the AI design and programming for the two baby dragon companions. The core objective was to break away from standard, linear pathfinding defaults in engines like Unity or Unreal, creating a fluid and expressive sense of life.",
            contributions: [
                {
                    title: "Custom Organic Locomotion System",
                    text: "Designed and programmed S-curve motion paths using Bézier curves, replacing rigid linear interpolation with fluid, lifelike agent movements."
                },
                {
                    title: "Terrain & NavMesh Validation",
                    text: "Developed a real-time point validation pipeline that constantly samples the NavMesh to guarantee agents never step outside walkable boundaries during curve evaluation."
                },
                {
                    title: "Velocity Blending",
                    text: "Implemented dynamic speed blending along procedural curves, ensuring natural acceleration and deceleration through sharp turns and procedural paths."
                },
                {
                    title: "Dual Architecture (Mind & Body)",
                    text: "Engineered a decoupled system separating cognitive decision-making (FSMs & Behavior Trees) from physical locomotion execution, communicating seamlessly via Blueprint Interfaces."
                },
                {
                    title: "Dynamic Navigation & Avoidance",
                    text: "Programmed a centralized manager to process spatial data globally, eliminating redundant per-agent queries and broadcasting pre-processed avoidance data for coordinated movement."
                }
            ],

            /* ZONA 3: LO QUE APRENDÍ (WHAT I LEARNED) */
            learningTitle: "What I Learned",
            learningText: "Developing Lyra pushed me to bridge complex mathematical concepts with practical AI architecture in Unreal Engine 5. I learned how to build custom locomotion models from scratch rather than relying on stock engine defaults, how to decouple cognitive AI logic from physical execution for modular maintainability, and how to optimize multi-agent spatial queries. Winning Best TFG at ENTI DemoDay 2026 validated the importance of combining technical rigor with expressive, organic agent behavior.",
            playBtn: "Play on itch.io"
        },

        es: {
            tagline: "Una aventura de puzles en 3D sobre dos bebés dragón, desarrollada en Unreal Engine 5.",
            description: "Lyra es un juego de aventura y puzles en 3D desarrollado en Unreal Engine 5 como mi Trabajo de Fin de Grado (TFG) en ENTI-UB. Trabajé como AI Game Programmer, diseñando e implementando sistemas de IA y una locomoción orgánica para los dos dragones. Ganó el premio a Mejor TFG en el ENTI DemoDay 2026.",
            role: "Mi rol se centró en la programación de IA, diseño de locomoción personalizada, navegación multi-agente y la separación de la lógica cognitiva de la ejecución física.",
            taskTitle: "RESUMEN DE TAREAS",
            tasks: [
                "Diseño de un sistema de locomoción orgánica personalizado mediante curvas de Bézier.",
                "Programación de un sistema de detección y validación en NavMesh para rutas curvas.",
                "Construcción de una arquitectura de IA desacoplada combinando FSMs y Behavior Trees.",
                "Desarrollo de sistemas de navegación dinámica y evitación de colisiones multi-agente."
            ],
            contributionsTitle: "Mis Contribuciones",
            contributionsIntro: "Lyra fue mi TFG, donde fui responsable del diseño y programación de la inteligencia artificial de los dos dragones. El objetivo principal era alejarse de los movimientos lineales por defecto de motores como Unity o Unreal para lograr una sensación de vida orgánica.",
            contributions: [
                {
                    title: "Sistema de Locomoción Orgánica",
                    text: "Diseñé y programé trayectorias en forma de S mediante curvas de Bézier, sustituyendo la interpolación lineal rígida por movimientos fluidos y naturales."
                },
                {
                    title: "Validación de Terreno y NavMesh",
                    text: "Desarrollé un sistema de validación de puntos a lo largo de las curvas para garantizar que el recorrido del agente no se salga de las zonas transitables del NavMesh."
                },
                {
                    title: "Blend de Velocidades",
                    text: "Implementé un sistema de aceleración y desaceleración dinámica en curvas para mantener un ritmo natural en los giros y cambios de dirección."
                },
                {
                    title: "Arquitectura Dual (Mente y Cuerpo)",
                    text: "Diseñé una arquitectura desacoplada que separa la toma de decisiones (FSMs y Behavior Trees) de la ejecución física, comunicadas mediante interfaces en Blueprints."
                },
                {
                    title: "Navegación Dinámica y Evitación",
                    text: "Programé un sistema centralizado para evitar consultas repetidas por agente, enviando información procesada para coordinar el movimiento de múltiples agentes."
                }
            ],
            learningTitle: "Lo que aprendí",
            learningText: "Desarrollar Lyra me permitió conectar conceptos matemáticos avanzados con la arquitectura de IA en Unreal Engine 5. Aprendí a construir modelos de locomoción propios en lugar de depender de los componentes por defecto, a desacoplar la mente de la ejecución física para mantener un código limpio y a optimizar consultas espaciales en tiempo real. Ganar el premio a Mejor TFG en el ENTI DemoDay 2026 confirmó el valor de combinar rigor técnico con comportamientos vivos y expresivos.",
            playBtn: "Juega en itch.io"
        }
    }
};
