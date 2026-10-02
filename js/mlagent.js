/* =========================================================
   MLAGENT.JS - DICCIONARIO TRADUCCIÓN COMPLETA DE TABLAS Y DIAGRAMAS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    let currentLang = "es";
    try {
        const savedLang = localStorage.getItem("preferredLanguage");
        if (savedLang === "en" || savedLang === "es") {
            currentLang = savedLang;
        }
    } catch (e) {
        console.warn(e);
    }

    const dict = {
        es: {
            home: "Inicio",
            about: "Quién soy",
            experience: "Experiencia",
            projects: "Proyectos",
            documents: "Documentos",
            contactButton: "Contacto",
            moreProjects: "Más Proyectos",
            btnPdf: "Leer Memoria Técnica (PDF 40 Págs)",
            heroTitle: "Unity AI MachineLearning",
            heroTagline: "Entrenamiento de agentes de combate mediante PPO, Curriculum Learning y Self-Play en Unity ML-Agents.",

            badgeAppliedProject: "Proyecto Aplicado de Videojuego (2025-2026)",
            tutorTag: "Tutor: Lluis Gomez Bigorda",

            summaryTitle: "Desarrollo e Investigación de un Agente Autónomo de Combate Vehicular en Unity",
            objectivesTitle: "Objetivos del Proyecto",
            objectivesBody: "El objetivo de este proyecto es desarrollar un agente capaz de dominar las mecánicas de un juego de tanques 3D mediante la herramienta ML-Agents. El reto reside en que el agente adquiera habilidades competitivas de forma autónoma, sin programar comportamientos lógicos manuales ni máquinas de estados tradicionales.\n\nA su vez, se investiga cómo el Self-Play permite la emergencia de estrategias tácticas complejas (como la gestión de la economía del disparo, la espera táctica en cobertura y el engaño mediante trayectoria) que serían muy difíciles de codificar explícitamente, enfatizando una IA que coevoluciona durante el proceso de entrenamiento.",

            statStepsLabel: "Pasos Totales",
            statStepsSub: "Pasos de simulación física",
            statEloLabel: "Máximo ELO Alcanzado",
            statEloSub: "En fase de Self-Play (Modelo 30)",
            statRaycastsLabel: "Observaciones",
            statRaycastsSub: "+ Ray Perception Sensor 3D",
            statCurriculumLabel: "Curriculum Learning",
            statCurriculumSub: "Modelos mentales 24 al 30",

            sec1Title: "Arquitectura del Sistema y Configuración Física en Unity",
            sec1Intro: "El sistema se articula en torno a cinco componentes orientados a objetos que interactúan mediante eventos de física y referencias directas, comunicándose con el trainer de Python mediante un socket TCP en el puerto 5004.",
            diagram1Title: "Diagrama 1: Arquitectura de Clases C# y Flujo de Comunicación Unity - Python",

            /* DIAGRAMA SVG 1 */
            svgMethods: "Métodos Principales:",
            svgObsMethod: "• CollectObservations(sensor) -> 21D",
            svgOnAction: "• OnActionReceived(actions) -> Motor/Tiro",
            svgResetMethod: "• OnEpisodeBegin() -> Reset & Spawns",
            svgApplyMethod: "• ApplyMovement() & ApplyRotation()",
            svgRefs: "Referencias de Control:",
            svgTcpTitle: "Communicator TCP (Puerto 5004)",
            svgSync: "Sincronización por Decision Period (5)",
            svgSends: "→ Envía: Vector 21D + Recompensas",
            svgReceives: "← Recibe: Acciones [Cont(2), Disc(1)]",
            svgSensor: "Ray Perception Sensor 3D Integrado",
            svgStep: "Fixed Timestep = 0.02s (0.1s / decisión)",
            svgCurriculumTitle: "Curriculum & Curiosity Manager",

            /* ENCABEZADOS COMUNES DE TABLA */
            thParam: "Eje X: Parámetro Físico",
            thVal: "Eje Y: Valor Configurado",
            thUnit: "Eje Y: Unidad / Tipo",
            thJust: "Justificación Técnica en la Simulación",

            thDim: "Eje X: Dimensión / Índices Vector",
            thVar: "Eje X: Variable Observada",
            thRange: "Eje Y: Rango Original",
            thNorm: "Eje Y: Normalización Aplicada",
            thPurpose: "Propósito Técnico en la Toma de Decisiones",

            thActIndex: "Eje X: Índice de Acción",
            thCtrlType: "Eje X: Tipo de Control",
            thOutRange: "Eje Y: Rango de Salida",
            thPhysMap: "Eje Y: Mapeo Físico en Unity PhysX",
            thKinBehav: "Comportamiento Cinemático",

            thEvent: "Eje X: Evento / Acción del Agente",
            thCond: "Eje X: Condición de Activación",
            thRVal: "Eje Y: Valor de Recompensa (R)",
            thSigType: "Eje Y: Tipo de Señal",
            thTacPurp: "Propósito Táctico en el Entrenamiento",

            thHyper: "Eje X: Hiperparámetro",
            thDomain: "Eje X: Dominio / Tipo",
            thPpoImpact: "Eje Y: Impacto Técnico en PPO",

            thPhaseModel: "Fase / Modelo Mental",
            thSimSteps: "Eje X: Pasos de Simulación (Steps)",
            thEnvCfg: "Eje X: Configuración del Entorno",
            thRMean: "Eje Y: Recompensa Media (R_mean)",
            thConvMetric: "Eje Y: Métrica de Convergencia",
            thEmBehav: "Comportamiento Emergente",

            thStepsIter: "Eje X: Pasos de Simulación (Iteración)",
            thModelCkpt: "Eje X: Checkpoint del Modelo",
            thExactElo: "Eje Y: Puntuación ELO Exacta",
            thEstWinRate: "Eje Y: Ratio de Victoria Estimado",

            /* TABLA 1: PHYSX RIGIDBODY */
            t1Title: "Tabla 1: Parámetros del Rigidbody de PhysX en Unity",
            t1r1Unit: "Masa (kg)",
            t1r1Just: "Masa normalizada para simplificar el cálculo de fuerzas de aceleración.",
            t1r2Unit: "Fricción Lineal",
            t1r2Just: "Frenado lineal suficiente para detener el tanque al soltar el input de movimiento.",
            t1r3Unit: "Fricción Angular",
            t1r3Just: "Amortigua drásticamente las oscilaciones de rotación generadas por AddTorque.",
            t1r4Unit: "Booleano",
            t1r4Just: "Mantiene el chasis anclado al suelo de la arena de 50m x 50m.",
            t1r5Unit: "Restricción 3D",
            t1r5Just: "Evita desplazamientos verticales y saltos descontrolados por colisión.",
            t1r6Unit: "Restricción 3D",
            t1r6Just: "Impide volcamientos del chasis al impactar muros u obstáculos.",
            t1r7Unit: "Modo Físico PhysX",
            t1r7Just: "Garantiza que proyectiles a alta velocidad no atraviesen la geometría.",

            /* TABLA 2: VECTOR 21D */
            sec2Title: "Diseño del Espacio de Observación (21D) y Acción Híbrido",
            sec2Intro: "El vector de observaciones St pertenece a R^21 y fue diseñado para permanecer estrictamente invariante entre todas las fases de curriculum para evitar tener que reiniciar los pesos de la red neuronal.",
            t2Title: "Tabla 2: Espacio de Observaciones Vectoriales (S ∈ ℝ²¹)",
            t2r1Var: "Dirección al Objetivo",
            t2r1Range: "Vectores (x, y, z)",
            t2r1Purp: "Guía la navegación y aproximación espacial hacia el objetivo.",
            t2r2Var: "Distancia al Objetivo",
            t2r2Purp: "Suaviza la escala de distancia para evitar picos de gradiente.",
            t2r3Var: "Orientación del Agente",
            t2r3Purp: "Informa sobre la dirección hacia la que apunta el chasis.",
            t2r4Var: "Alineación Angular",
            t2r4Range: "Producto escalar cos(θ)",
            t2r4Purp: "Determina qué tan bien alineado está el cañón con el rival.",
            t2r5Var: "Cooldown de Disparo",
            t2r5Range: "Booleano de recarga",
            t2r5Purp: "Indica si el cañón está listo para ejecutar un disparo (150 steps).",
            t2r6Var: "Distancia Relativa a Rango",
            t2r6Purp: "Evalúa si el objetivo está dentro del alcance efectivo de tiro.",
            t2r7Var: "Velocidad del Objetivo",
            t2r7Range: "Vector velocidad rival",
            t2r7Purp: "Permite calcular el disparo predictivo anticipando la trayectoria.",
            t2r8Var: "Magnitud Velocidad Rival",
            t2r8Purp: "Mide la rapidez de desplazamiento del oponente.",
            t2r9Var: "Magnitud Velocidad Propia",
            t2r9Purp: "Permite autorregular la aceleración y el frenado.",
            t2r10Var: "Dirección Velocidad Propia",
            t2r10Range: "Vector movimiento local",
            t2r10Purp: "Detección cinemática de derrapes y acercamiento a bordes.",
            t2r11Var: "Fase del Curriculum",
            t2r11Range: "Nivel activo [0, 3]",
            t2r11Purp: "Modula el comportamiento interno según la dificultad del nivel.",
            t2r12Var: "Línea de Visión (LOS)",
            t2r12Range: "Raycast Booleano",
            t2r12Purp: "Detecta si existe visión directa sin obstáculos interpuestos.",
            t2r13Var: "Distancia al Obstáculo",
            t2r13Range: "Distancia a pared",
            t2r13Purp: "Informa sobre la proximidad de la pared para calcular el rodeo.",

            /* TABLA 3: ESPACIO DE ACCIONES */
            t3Title: "Tabla 3: Espacio de Acciones Híbrido (A ∈ ℝ² × {0,1})",
            t3r1Ctrl: "Acelerador / Tracción",
            t3r1Map: "Proyección de fuerza en transform.forward",
            t3r1Behav: "Avanzar / Retroceder con inercia mediante Vector3.Lerp (factor 8f).",
            t3r2Ctrl: "Dirección del Chasis",
            t3r2Map: "Aplicación de torque con AddTorque",
            t3r2Behav: "Giro proporcional al error de velocidad angular con zona muerta dinámica (0.05 a 0.15).",
            t3r3Ctrl: "Gatillo de Disparo",
            t3r3Map: "Instanciación de prefab BulletDetection",
            t3r3Behav: "Disparo de bala rígida. Respeta un cooldown de 150 pasos de decisión (15s simulación).",

            /* TABLA 4: RECOMPENSAS */
            sec3Title: "Ingeniería de Recompensas (Reward Shaping) y Evolución",
            sec3Intro: "El diseño de la función de recompensa requirió un ajuste minucioso para evitar mínimos locales. La función de recompensa total instantánea Rt se formula explícitamente a continuación:",
            formulaHeader: "Ecuación General de Recompensa Instantánea (Rt)",
            t4Title: "Tabla 4: Sistema Completo de Recompensas y Penalizaciones",
            sigTerminal: "Terminal",
            sigImmediate: "Inmediata",
            sigContinuous: "Continua",
            sigPunish: "Terminal / Castigo",
            t4r1Ev: "Impacto al Objetivo",
            t4r1Cond: "Bala contacta con el rival (BulletDetection)",
            t4r1Purp: "Objetivo principal del agente. Recompensa de mayor magnitud.",
            t4r2Ev: "Disparo bien Alineado",
            t4r2Cond: "Estar bien alineado al pulsar el gatillo de disparo",
            t4r2Purp: "Refuerza el intento de disparo únicamente cuando está bien orientado.",
            t4r3Ev: "Recuperación de LOS",
            t4r3Cond: "_hasLineOfSight && !_hadLineOfSightLastStep",
            t4r3Purp: "Premia instantáneamente el acto de asomarse tras rodear un muro.",
            t4r4Ev: "Posición Perfecta con LOS",
            t4r4Cond: "En rango, buena distancia, alineado y con Cooldown ok",
            t4r4Purp: "Incentiva mantener una posición óptima de combate listo para disparar.",
            t4r5Ev: "Alineación con LOS",
            t4r5Cond: "alignment > desireRotation && hasLOS",
            t4r5Purp: "Guía la rotación hacia el objetivo solo si no hay muro intermedio.",
            t4r6Ev: "Distancia Ideal con LOS",
            t4r6Cond: "Estar en distancia óptima con línea de visión directa",
            t4r6Purp: "Mantiene al agente en el rango efectivo de tiro.",
            t4r7Ev: "Penalización de Tiempo",
            t4r7Cond: "Constante en cada paso temporal (-0.5 / MaxStep)",
            t4r7Purp: "Aplica presión para resolver el episodio eficientemente.",
            t4r8Ev: "Disparo sin LOS",
            t4r8Cond: "Intentar disparar con un muro bloqueando la visión",
            t4r8Purp: "Evita el desperdicio de proyectiles contra obstáculos.",
            t4r9Ev: "Sin LOS en Rango",
            t4r9Cond: "Estar en rango pero sin línea de visión directa",
            t4r9Purp: "Penaliza la parálisis frente a paredes.",
            t4r10Ev: "Colisión con Borde",
            t4r10Cond: "OnCollisionEnter con tag border",
            t4r10Purp: "Evita que el tanque se choque contra los límites de la arena.",
            t4r11Ev: "Colisión con Obstáculo",
            t4r11Cond: "OnCollisionEnter con tag obstacle",
            t4r11Purp: "Desincentiva las colisiones físicas directas contra muros.",
            t4r12Ev: "Bala Impacta Borde",
            t4r12Cond: "El proyectil choca contra el muro exterior",
            t4r12Purp: "Penaliza los disparos fallidos hacia fuera de la arena.",

            /* TABLA 5: HIPERPARÁMETROS */
            sec4Title: "Hiperparámetros de Entrenamiento YAML (PPO)",
            btnCopyCode: "Copiar YAML",
            t5Title: "Tabla 5: Hiperparámetros Configurados en ML-Agents",
            typeInt: "Entero",
            typeFloat: "Flotante",
            typeNN: "Red Neuronal",
            t5r1Imp: "Tamaño del lote para cada actualización del gradiente.",
            t5r2Imp: "Buffer amplio para garantizar diversidad de experiencias en curriculum.",
            t5r3Imp: "Tasa conservadora que preserva el conocimiento entre fases.",
            t5r4Imp: "Coeficiente de entropía para mantener exploración sin desestabilizar.",
            t5r5Imp: "Margen de recorte (clipping) para acotar la actualización de política.",
            t5r6Imp: "Factor de descuento largo para conectar tiro futuro.",
            t5r7Imp: "Pasos para cubrir el ciclo completo de rodeo-reposicionamiento-disparo.",
            t5r8Imp: "Capacidad de la red MLP para aprender relaciones no lineales en 21D.",

            /* TABLA 6: HISTÓRICO CURRICULUM */
            sec5Title: "Pipeline de Curriculum Learning (5 Fases) y Resultados",
            tabPhase1: "Fase 1: Estático sin Muro",
            tabPhase2: "Fase 2: Estático con Muro",
            tabPhase3: "Fase 3: Móvil sin Muro",
            tabPhase4: "Fase 4: Móvil con Muro",
            tabPhase5: "Fase 5: Self-Play",
            t6Title: "Tabla 6: Resultados Históricos de Entrenamiento por Modelo Mental",
            t6r1Env: "Target estático en arena vacía sin obstáculos.",
            t6r1Behav: "Aproximación directa, alineación suave y disparo certero.",
            t6r2Env: "Pared intermedia con obstacle_offset (1.5 -> 0.1).",
            t6r2Behav: "Detección de bloqueo de LOS y rodeo lateral proactivo.",
            t6r3Env: "Target en movimiento cinemático sin muros.",
            t6r3Conv: "Std: 0.5 - 0.8 (Mínima var)",
            t6r3Behav: "Seguimiento continuo y disparo predictivo guiado por V_target.",
            t6r4Env: "Target en movimiento combinado con pared de obstáculo.",
            t6r4Behav: "Espera táctica en cobertura esperando que el rival se asome.",
            t6r5Env: "Duelo simétrico 1v1 con Self-Play y Model Pool.",
            t6r5RMean: "Oscilación en Dientes de Sierra",
            t6r5Behav: "Engaño mediante movimiento, gestión de cooldown y tiro selectivo.",

            /* TABLA 7: ELO REGISTRO */
            sec6Title: "Análisis del Self-Play y Evolución del Sistema ELO",
            selfplayTitle: "Coevolución y Dientes de Sierra",
            selfplayText: "Al intercambiar los roles de los equipos cada 100.000 pasos (team_change), la curva de recompensa presenta un patrón característico en dientes de sierra. Cada valle representa la fase donde el nuevo equipo se adapta al oponente congelado, mientras que los picos crecientes de ELO confirman que el modelo se vuelve progresivamente superior.",
            chartTitle: "Progreso ELO Rating vs Iteraciones (Self-Play)",
            btnReloadChart: "Reanimar",
            t7Title: "Tabla 7: Registro Numérico del Gráfico ELO vs Iteraciones (X → Y)",
            t7ModelInit: "Modelo Inicial / Estado Base",
            t7Sp1: "Checkpoint SP-1",
            t7Sp2: "Checkpoint SP-2",
            t7Sp3: "Checkpoint SP-3",
            t7Sp4: "Checkpoint SP-4",
            t7Sp5: "Checkpoint SP-5",
            t7ModelFinal: "Modelo Final 30",

            /* COMPORTAMIENTOS EMERGENTES */
            emergentTitle: "Análisis de Comportamientos Tácticos Emergentes",
            emergentIntro: "Durante las iteraciones de entrenamiento y la coevolución producida por el Self-Play, surgieron patrones tácticos complejos de forma totalmente autónoma, sin necesidad de programar reglas lógicas explícitas:",
            emBehavior1Title: "Seguimiento y Disparo Predictivo: ",
            emBehavior1Desc: "El agente calcula continuamente el vector de velocidad del oponente, anticipando su trayectoria futura para disparar con un ángulo de avance que impacta exactamente en el punto de intercepción.",
            emBehavior3Title: "Engaño y Amago mediante Trayectoria: ",
            emBehavior3Desc: "El agente ejecuta cambios bruscos de dirección y amagos de avance para inducir al oponente a realizar un disparo precipitadamente hacia una posición vacía.",
            emBehavior4Title: "Gestión de la Economía de Disparo y Cooldown: ",
            emBehavior4Desc: "El agente aprende el ciclo exacto de recarga (150 pasos). Evita disparar sin línea de visión clara para no quedar indefenso e inerme durante el periodo de cooldown.",

            /* CONCLUSIONES PORTFOLIO */
            sec7Title: "Conclusiones y Líneas a Futuro",
            sec71Title: "5.1. Análisis Crítico del Grado de Consecución de Objetivos",
            badge1: "100% Completado",
            obj1Title: "Objetivo Estático (Fase 1)",
            obj1Desc: "Convergencia rápida hacia una política totalmente estable (R_mean = +11.0, std < 1.0), demostrando un control motor y de disparo óptimo sobre escenarios simples.",
            badge2: "Funcional / Rediseñado",
            obj2Title: "Evasión de Cobertura (Fase 2)",
            obj2Desc: "Surgió tendencia a la parálisis frente a muros. Se solucionó tras varias iteraciones de reward shaping, logrando un rodeo dinámico de la pared según su posición relativa.",
            badge3: "Excelente Resultado",
            obj3Title: "Seguimiento Móvil (Fase 3)",
            obj3Desc: "El mejor resultado del proyecto. Gracias a la transferencia de pesos y la bajísima varianza, el agente desarrolló un disparo predictivo certero sobre objetivos cinemáticos.",
            badge4: "Alcanzado Parcialmente",
            obj4Title: "Self-Play Competitivo (Fase 5)",
            obj4Desc: "La arquitectura técnica funcionó con éxito (tendencia alcista de ELO). No obstante, la simplicidad de la arena simétrica limitó la aparición de tácticas de mayor profundidad.",

            sec72Title: "5.2. Principales Aprendizajes Metodológicos",
            learn1Title: "Diseño Crítico de Recompensas:",
            learn1Desc: "A diferencia del software determinista, una mala función de recompensa genera mínimos locales engañosos. Validar exige observar comportamientos emergentes.",
            learn2Title: "Estrategia de Curriculum Learning:",
            learn2Desc: "Desacoplar la dificultad por fases independientes aceleró la convergencia y facilitó el diagnóstico directo de errores al introducir nuevas variables.",
            learn3Title: "Sensibilidad a la Física del Motor:",
            learn3Desc: "Parámetros de PhysX en Unity (Angular Drag, Rigidbody vs Transform) impactan directamente en la estabilidad del modelo tanto como los hiperparámetros.",
            learn4Title: "Proceso Empírico e Iterativo:",
            learn4Desc: "Las soluciones óptimas surgieron de la experimentación continua y el registro detallado de decisiones, clave en proyectos de aprendizaje por refuerzo.",

            sec73Title: "5.3. Líneas de Trabajo Futuro",
            futureTag1: "Entornos Complejos",
            future1Desc: "Diseño de arenas asimétricas con múltiples coberturas destruibles para forzar mayor presión adaptativa en Self-Play.",
            futureTag2: "Agentes Asimétricos",
            future2Desc: "Incorporar clases heterogéneas (tanques ágiles de bajo daño vs vehículos pesados de largo alcance) para fomentar contraestrategias.",
            futureTag3: "Self-Play Riguroso",
            future3Desc: "Aumentar el pool de modelos históricos, reducir la tasa de enfrentamiento actual y ampliar team_change para elevar el nivel táctico.",
            futureTag4: "Sistemas Multi-Agente",
            future4Desc: "Entrenar escuadrones 2v2 o 3v3 con recompensas grupales para favorecer comportamientos de flanqueo coordinado y emboscadas.",

            ctaTitle: "Descarga la Memoria Técnica Completa (PDF)",
            ctaText: "Accede al documento TFG completo de Marcos Ruiz Muñoz (40 páginas) con todos los anexos de código en C#, curvas de TensorBoard y bibliografía.",
            ctaBtn: "Ver Documento PDF Completo (40 Págs) →"
        },
        en: {
            home: "Home",
            about: "About Me",
            experience: "Experience",
            projects: "Projects",
            documents: "Documents",
            contactButton: "Contact",
            moreProjects: "More Projects",
            btnPdf: "Read Technical Paper (PDF 40 Pages)",
            heroTitle: "Unity AI MachineLearning",
            heroTagline: "Combat agent training via PPO, Curriculum Learning, and Self-Play in Unity ML-Agents.",

            badgeAppliedProject: "Applied Game AI Project (2025-2026)",
            tutorTag: "Advisor: Lluis Gomez Bigorda",

            summaryTitle: "Development & Research of an Autonomous Vehicular Combat Agent in Unity",
            objectivesTitle: "Project Objectives",
            objectivesBody: "The objective of this project is to develop an agent capable of mastering 3D tank mechanics using Unity ML-Agents. The challenge lies in enabling the agent to acquire competitive skills autonomously, without hardcoding manual rules or traditional state machines.\n\nFurthermore, it investigates how Self-Play facilitates the emergence of complex tactical behaviors (such as shot economy management, tactical waiting under cover, and trajectory deception) that would be extremely difficult to code manually, highlighting an AI that co-evolves throughout training.",

            statStepsLabel: "Total Steps",
            statStepsSub: "Physical simulation steps",
            statEloLabel: "Peak ELO Rating",
            statEloSub: "Self-Play stage (Model 30)",
            statRaycastsLabel: "Observations",
            statRaycastsSub: "+ Ray Perception Sensor 3D",
            statCurriculumLabel: "Curriculum Learning",
            statCurriculumSub: "Mental models 24 to 30",

            sec1Title: "System Architecture & Physical Setup in Unity",
            sec1Intro: "The system is structured around five object-oriented components interacting via physics events and direct references, communicating with the Python trainer via a TCP socket on port 5004.",
            diagram1Title: "Diagram 1: C# Class Architecture & Unity-Python Communication Flow",

            /* DIAGRAM SVG 1 */
            svgMethods: "Main Methods:",
            svgObsMethod: "• CollectObservations(sensor) -> 21D",
            svgOnAction: "• OnActionReceived(actions) -> Drive/Shoot",
            svgResetMethod: "• OnEpisodeBegin() -> Reset & Spawns",
            svgApplyMethod: "• ApplyMovement() & ApplyRotation()",
            svgRefs: "Control References:",
            svgTcpTitle: "TCP Communicator (Port 5004)",
            svgSync: "Decision Period Synchronization (5)",
            svgSends: "→ Sends: 21D Vector + Rewards",
            svgReceives: "← Receives: Actions [Cont(2), Disc(1)]",
            svgSensor: "Integrated 3D Ray Perception Sensor",
            svgStep: "Fixed Timestep = 0.02s (0.1s / decision)",
            svgCurriculumTitle: "Curriculum & Curiosity Manager",

            /* COMMON TABLE HEADERS */
            thParam: "Axis X: Physical Parameter",
            thVal: "Axis Y: Configured Value",
            thUnit: "Axis Y: Unit / Type",
            thJust: "Technical Justification in Simulation",

            thDim: "Axis X: Dimension / Vector Indices",
            thVar: "Axis X: Observed Variable",
            thRange: "Axis Y: Original Range",
            thNorm: "Axis Y: Applied Normalization",
            thPurpose: "Technical Decision-Making Purpose",

            thActIndex: "Axis X: Action Index",
            thCtrlType: "Axis X: Control Type",
            thOutRange: "Axis Y: Output Range",
            thPhysMap: "Axis Y: Unity PhysX Physical Mapping",
            thKinBehav: "Kinematic Behavior",

            thEvent: "Axis X: Event / Agent Action",
            thCond: "Axis X: Activation Condition",
            thRVal: "Axis Y: Reward Value (R)",
            thSigType: "Axis Y: Signal Type",
            thTacPurp: "Tactical Purpose in Training",

            thHyper: "Axis X: Hyperparameter",
            thDomain: "Axis X: Domain / Type",
            thPpoImpact: "Axis Y: Technical Impact in PPO",

            thPhaseModel: "Phase / Mental Model",
            thSimSteps: "Axis X: Simulation Steps",
            thEnvCfg: "Axis X: Environment Setup",
            thRMean: "Axis Y: Mean Reward (R_mean)",
            thConvMetric: "Axis Y: Convergence Metric",
            thEmBehav: "Emergent Behavior",

            thStepsIter: "Axis X: Simulation Steps (Iteration)",
            thModelCkpt: "Axis X: Model Checkpoint",
            thExactElo: "Axis Y: Exact ELO Rating",
            thEstWinRate: "Axis Y: Estimated Win Rate",

            /* TABLE 1: PHYSX RIGIDBODY */
            t1Title: "Table 1: Unity PhysX Rigidbody Parameters",
            t1r1Unit: "Mass (kg)",
            t1r1Just: "Normalized mass to simplify acceleration force calculations.",
            t1r2Unit: "Linear Drag",
            t1r2Just: "Linear braking sufficient to stop the tank upon releasing movement input.",
            t1r3Unit: "Angular Drag",
            t1r3Just: "Dramatically dampens rotational oscillations generated by AddTorque.",
            t1r4Unit: "Boolean",
            t1r4Just: "Keeps chassis anchored to the 50m x 50m arena floor.",
            t1r5Unit: "3D Constraint",
            t1r5Just: "Prevents vertical displacements and uncontrolled collision bounces.",
            t1r6Unit: "3D Constraint",
            t1r6Just: "Prevents chassis rollovers when impacting walls or obstacles.",
            t1r7Unit: "PhysX Physics Mode",
            t1r7Just: "Ensures high-speed projectiles do not clip through geometry.",

            /* TABLE 2: VECTOR 21D */
            sec2Title: "Observation Space Design (21D) & Hybrid Action Space",
            sec2Intro: "The 21D state vector St was designed to remain strictly invariant across all curriculum stages to avoid resetting neural network weights.",
            t2Title: "Table 2: Vectorial Observation Space (S ∈ ℝ²¹)",
            t2r1Var: "Target Direction",
            t2r1Range: "Vectors (x, y, z)",
            t2r1Purp: "Guides navigation and spatial approach towards the target.",
            t2r2Var: "Target Distance",
            t2r2Purp: "Smooths distance scaling to prevent gradient spikes.",
            t2r3Var: "Agent Orientation",
            t2r3Purp: "Informs about the direction the chassis is facing.",
            t2r4Var: "Angular Alignment",
            t2r4Range: "Dot product cos(θ)",
            t2r4Purp: "Determines how well the cannon is aligned with the enemy.",
            t2r5Var: "Shooting Cooldown",
            t2r5Range: "Reload boolean",
            t2r5Purp: "Indicates whether cannon is ready to fire (150 steps).",
            t2r6Var: "Relative Distance Range",
            t2r6Purp: "Evaluates whether target is within effective firing range.",
            t2r7Var: "Target Velocity",
            t2r7Range: "Enemy velocity vector",
            t2r7Purp: "Allows predictive lead shooting calculations by tracking target trajectory.",
            t2r8Var: "Target Speed Magnitude",
            t2r8Purp: "Measures opponent movement speed.",
            t2r9Var: "Own Speed Magnitude",
            t2r9Purp: "Allows self-regulation of acceleration and braking.",
            t2r10Var: "Own Velocity Direction",
            t2r10Range: "Local movement vector",
            t2r10Purp: "Kinematic detection of skidding and boundary proximity.",
            t2r11Var: "Curriculum Phase",
            t2r11Range: "Active level [0, 3]",
            t2r11Purp: "Modulates internal behavior according to level difficulty.",
            t2r12Var: "Line of Sight (LOS)",
            t2r12Range: "Boolean Raycast",
            t2r12Purp: "Detects if clear direct vision exists without blocking obstacles.",
            t2r13Var: "Obstacle Distance",
            t2r13Range: "Wall distance",
            t2r13Purp: "Informs wall proximity to calculate flanking maneuvers.",

            /* TABLE 3: ACTION SPACE */
            t3Title: "Table 3: Hybrid Action Space (A ∈ ℝ² × {0,1})",
            t3r1Ctrl: "Throttle / Traction",
            t3r1Map: "Force projection along transform.forward",
            t3r1Behav: "Forward / Reverse with inertia using Vector3.Lerp (8f factor).",
            t3r2Ctrl: "Chassis Steering",
            t3r2Map: "Torque application using AddTorque",
            t3r2Behav: "Proportional turning to angular velocity error with dynamic deadzone (0.05 to 0.15).",
            t3r3Ctrl: "Fire Trigger",
            t3r3Map: "BulletDetection prefab instantiation",
            t3r3Behav: "Rigid bullet firing. Respects a 150 decision step cooldown (15s simulation).",

            /* TABLE 4: REWARDS */
            sec3Title: "Reward Engineering (Reward Shaping) & Evolution",
            sec3Intro: "Designing the reward function required meticulous tuning to eliminate local minima. The instant total reward function Rt is explicitly formulated below:",
            formulaHeader: "General Instantaneous Reward Equation (Rt)",
            t4Title: "Table 4: Full Reward & Penalty System",
            sigTerminal: "Terminal",
            sigImmediate: "Immediate",
            sigContinuous: "Continuous",
            sigPunish: "Terminal / Punishment",
            t4r1Ev: "Target Hit",
            t4r1Cond: "Bullet contacts opponent (BulletDetection)",
            t4r1Purp: "Primary agent objective. Highest reward magnitude.",
            t4r2Ev: "Well-Aligned Shot",
            t4r2Cond: "Properly aligned when pressing fire trigger",
            t4r2Purp: "Reinforces firing attempts only when facing opponent.",
            t4r3Ev: "LOS Recovery",
            t4r3Cond: "_hasLineOfSight && !_hadLineOfSightLastStep",
            t4r3Purp: "Instantly rewards peeking around a wall.",
            t4r4Ev: "Optimal Stance with LOS",
            t4r4Cond: "In range, optimal distance, aligned & cooldown ok",
            t4r4Purp: "Incentivizes maintaining optimal combat stance ready to shoot.",
            t4r5Ev: "Alignment with LOS",
            t4r5Cond: "alignment > desireRotation && hasLOS",
            t4r5Purp: "Guides rotation towards target only if unobstructed.",
            t4r6Ev: "Ideal Distance with LOS",
            t4r6Cond: "In optimal range with direct Line of Sight",
            t4r6Purp: "Keeps agent within effective firing distance.",
            t4r7Ev: "Time Penalty",
            t4r7Cond: "Constant each timestep (-0.5 / MaxStep)",
            t4r7Purp: "Applies pressure to solve episode efficiently.",
            t4r8Ev: "Shot without LOS",
            t4r8Cond: "Firing while a wall blocks line of sight",
            t4r8Purp: "Prevents wasting projectiles against obstacles.",
            t4r9Ev: "No LOS in Range",
            t4r9Cond: "In range without direct line of sight",
            t4r9Purp: "Penalizes wall paralysis.",
            t4r10Ev: "Boundary Collision",
            t4r10Cond: "OnCollisionEnter with tag border",
            t4r10Purp: "Prevents tank from driving into arena borders.",
            t4r11Ev: "Obstacle Collision",
            t4r11Cond: "OnCollisionEnter with tag obstacle",
            t4r11Purp: "Discourages physical wall impacts.",
            t4r12Ev: "Bullet Hits Boundary",
            t4r12Cond: "Projectile hits outer boundary wall",
            t4r12Purp: "Penalizes missed shots outside arena.",

            /* TABLE 5: HYPERPARAMETERS */
            sec4Title: "YAML Training Hyperparameters (PPO)",
            btnCopyCode: "Copy YAML",
            t5Title: "Table 5: ML-Agents Configured Hyperparameters",
            typeInt: "Integer",
            typeFloat: "Float",
            typeNN: "Neural Network",
            t5r1Imp: "Batch size for each gradient update.",
            t5r2Imp: "Large buffer ensuring diverse experience across curriculum.",
            t5r3Imp: "Conservative rate preserving knowledge across stages.",
            t5r4Imp: "Entropy coefficient maintaining exploration without instability.",
            t5r5Imp: "Clipping margin constraining policy updates.",
            t5r6Imp: "Long discount factor connecting future shot rewards.",
            t5r7Imp: "Steps covering full flank-reposition-fire loop.",
            t5r8Imp: "MLP capacity learning non-linear relations in 21D.",

            /* TABLE 6: CURRICULUM HISTORY */
            sec5Title: "Progressive Curriculum Learning Pipeline (5 Stages) & Results",
            tabPhase1: "Stage 1: Static / No Wall",
            tabPhase2: "Stage 2: Static / Wall",
            tabPhase3: "Stage 3: Moving / No Wall",
            tabPhase4: "Stage 4: Moving / Wall",
            tabPhase5: "Stage 5: Self-Play",
            t6Title: "Table 6: Historical Training Results by Mental Model",
            t6r1Env: "Static target in open arena without obstacles.",
            t6r1Behav: "Direct approach, smooth alignment, accurate firing.",
            t6r2Env: "Center wall with obstacle_offset (1.5 -> 0.1).",
            t6r2Behav: "LOS block detection and proactive lateral flanking.",
            t6r3Env: "Target in kinematic motion without walls.",
            t6r3Conv: "Std: 0.5 - 0.8 (Lowest var)",
            t6r3Behav: "Continuous tracking and V_target-guided lead shooting.",
            t6r4Env: "Moving target combined with center obstacle wall.",
            t6r4Behav: "Tactical waiting under cover waiting for opponent to peek.",
            t6r5Env: "Symmetric 1v1 duel with Self-Play & Model Pool.",
            t6r5RMean: "Sawtooth Oscillation Pattern",
            t6r5Behav: "Trajectory baiting, cooldown management, selective sniping.",

            /* TABLE 7: ELO REGISTER */
            sec6Title: "Self-Play Analysis & ELO Rating Progress",
            selfplayTitle: "Co-evolution & Sawtooth Pattern",
            selfplayText: "Swapping team roles every 100,000 steps (team_change) produces a characteristic sawtooth reward pattern. Each valley represents the adaptation phase of the new team, while rising ELO peaks confirm that the agent becomes steadily superior.",
            chartTitle: "ELO Rating Progress vs Iterations (Self-Play)",
            btnReloadChart: "Reanimate",
            t7Title: "Table 7: Numerical Record of ELO vs Iterations (X → Y)",
            t7ModelInit: "Initial Model / Base State",
            t7Sp1: "Checkpoint SP-1",
            t7Sp2: "Checkpoint SP-2",
            t7Sp3: "Checkpoint SP-3",
            t7Sp4: "Checkpoint SP-4",
            t7Sp5: "Checkpoint SP-5",
            t7ModelFinal: "Final Model 30",

            /* EMERGENT BEHAVIORS */
            emergentTitle: "Emergent Tactical Behaviors Analysis",
            emergentIntro: "Throughout training iterations and Self-Play co-evolution, complex tactical behaviors emerged fully autonomously without any hardcoded logic:",
            emBehavior1Title: "Predictive Lead Shooting: ",
            emBehavior1Desc: "The agent continuously estimates opponent velocity, predicting future trajectory to shoot at lead angles that strike the target upon interception.",
            emBehavior3Title: "Trajectory Deception & Baiting: ",
            emBehavior3Desc: "The agent performs sharp directional changes to bait the enemy into discharging shots prematurely into empty space.",
            emBehavior4Title: "Shot Economy & Cooldown Management: ",
            emBehavior4Desc: "The agent masters the exact 150-step reload cycle, avoiding wasted shots without LOS to prevent remaining defenseless during cooldown.",

            /* CONCLUSIONS 2x2 */
            sec7Title: "Conclusions & Future Lines of Work",
            sec71Title: "5.1. Critical Analysis of Objective Achievement",
            badge1: "100% Completed",
            obj1Title: "Static Target (Stage 1)",
            obj1Desc: "Fast convergence to a fully stable policy (R_mean = +11.0, std < 1.0), showing optimal driving and shooting control in simple settings.",
            badge2: "Functional / Redesigned",
            obj2Title: "Cover Evasion (Stage 2)",
            obj2Desc: "Identified wall paralysis tendency. Fixed through reward shaping iterations, achieving dynamic wall flanking based on relative positioning.",
            badge3: "Excellent Result",
            obj3Title: "Moving Pursuit (Stage 3)",
            obj3Desc: "Best overall performance. Thanks to weight transfer and ultra-low variance, the agent developed highly accurate lead shooting on kinematic targets.",
            badge4: "Partially Achieved",
            obj4Title: "Competitive Self-Play (Stage 5)",
            obj4Desc: "Technical architecture succeeded (upward ELO trend). However, arena simplicity limited the emergence of higher tactical depth.",

            sec72Title: "5.2. Major Methodological Learnings",
            learn1Title: "Critical Reward Design:",
            learn1Desc: "Unlike deterministic software, a flawed reward function creates deceptive local minima. Validation requires observing emergent behavior.",
            learn2Title: "Curriculum Learning Strategy:",
            learn2Desc: "Decoupling difficulty into independent stages accelerated convergence and simplified bug isolation upon introducing new variables.",
            learn3Title: "Engine Physics Sensitivity:",
            learn3Desc: "Unity PhysX parameters (Angular Drag, Rigidbody vs Transform) directly dictate neural model stability alongside hyperparameters.",
            learn4Title: "Empirical & Iterative Nature:",
            learn4Desc: "Optimal policies resulted from continuous experimentation and rigorous decision logging, essential in reinforcement learning.",

            sec73Title: "5.3. Future Lines of Work",
            futureTag1: "Complex Environments",
            future1Desc: "Design asymmetric arenas with destructible cover to force greater adaptive pressure during Self-Play.",
            futureTag2: "Asymmetric Agents",
            future2Desc: "Introduce heterogeneous classes (fast low-damage vs slow long-range tanks) to foster counter-strategies.",
            futureTag3: "Rigorously Competitive Self-Play",
            future3Desc: "Expand historical model pools, reduce current model matchup ratios, and increase team_change duration.",
            futureTag4: "Multi-Agent Systems",
            future4Desc: "Train 2v2 or 3v3 squads with group rewards to encourage coordinated flanking tactics and baiting.",

            ctaTitle: "Download Full Technical Paper (PDF)",
            ctaText: "Access the complete 40-page TFG paper by Marcos Ruiz Muñoz with C# code appendixes, TensorBoard curves, and references.",
            ctaBtn: "View Full PDF Document (40 Pages) →"
        }
    };

    function applyLanguage() {
        const langData = dict[currentLang] || dict.es;
        const langBtn = document.getElementById("language-button");
        if (langBtn) langBtn.textContent = currentLang.toUpperCase();

        document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.getAttribute("data-i18n");
            if (langData[key]) {
                el.innerText = langData[key];
            }
        });
    }

    const langBtn = document.getElementById("language-button");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLang = currentLang === "es" ? "en" : "es";
            try {
                localStorage.setItem("preferredLanguage", currentLang);
            } catch (e) {
                console.warn(e);
            }
            applyLanguage();
            renderCurriculumPanel(currentCurriculumPhase);
        });
    }

    /* ---------------------------------------------------------
       DATOS REALES DEL CURRICULUM (5 FASES)
       --------------------------------------------------------- */
    let currentCurriculumPhase = "1";
    const curriculumData = {
        es: {
            "1": {
                title: "Fase 1: Objetivo Estático sin Obstáculo (Modelo 24)",
                desc: "Primer contacto del agente con la simulación física. Se elimina todo tipo de barrera física. El agente aprende a controlar las acciones continuas de aceleración/rotación y la acción discreta de disparo para alinearse y golpear una diana estática.",
                target: "Recompensa Media: +11.0 | Desviación Estándar < 1.0",
                steps: "0.0M - 5.0M Pasos de Simulación"
            },
            "2": {
                title: "Fase 2: Objetivo Estático con Obstáculo (Modelo 25)",
                desc: "Se introduce una pared central que bloquea la línea de visión (LOS). Mediante el parámetro 'obstacle_offset' (1.5 -> 0.1), el obstáculo se estrecha progresivamente. El agente aprende a rodear el muro y reorientar el cañón tras recuperar la visión.",
                target: "Recompensa Media: +9.0 a +10.0 | Rodeo proactivo",
                steps: "0.0M - 8.0M Pasos de Simulación"
            },
            "3": {
                title: "Fase 3: Objetivo en Movimiento sin Obstáculo (Modelo 26)",
                desc: "La diana se desplaza mediante patrones cinemáticos aleatorios. Al recibir en su vector 21D la velocidad del objetivo (obs 10-13), la red neuronal aprende la habilidad del disparo predictivo, disparando hacia donde estará la diana en t+dt.",
                target: "Recompensa Media: +11.25 | Mínima varianza (Std: 0.5)",
                steps: "0.0M - 8.0M Pasos de Simulación"
            },
            "4": {
                title: "Fase 4: Objetivo en Movimiento con Obstáculo (Modelo 27)",
                desc: "Unión de la diana móvil y la pared central. Surge el comportamiento emergente de 'espera táctica en cobertura': el agente permanece resguardado tras la pared hasta que la trayectoria de la diana garantiza una línea de visión directa antes de disparar.",
                target: "Recompensa Media: +10.0 | Dominio de cobertura",
                steps: "0.0M - 8.0M Pasos de Simulación"
            },
            "5": {
                title: "Fase 5: Duelo Simétrico 1v1 con Self-Play (Modelo 30)",
                desc: "Entrenamiento altamente competitivo enfrentando al agente contra versiones anteriores de sí mismo (Model Pool) en un entorno 1v1 simétrico. Emergen tácticas complejas como la gestión del cooldown de disparo, amagos de trayectoria y tiros selectivos.",
                target: "ELO Rating: 1611 a 2200+ | Coevolución ilimitada",
                steps: "0.0M - 10.0M+ Pasos Totales"
            }
        },
        en: {
            "1": {
                title: "Stage 1: Static Target without Obstacles (Model 24)",
                desc: "First contact with physical simulation in open space. The agent learns continuous driving and discrete shooting controls to hit a stationary target.",
                target: "Mean Reward: +11.0 | Standard Dev < 1.0",
                steps: "0.0M - 5.0M Simulation Steps"
            },
            "2": {
                title: "Stage 2: Static Target with Obstacle (Model 25)",
                desc: "A center wall blocks Line of Sight. Controlled via 'obstacle_offset' (1.5 -> 0.1), the agent learns to flank around the wall and re-align upon regaining vision.",
                target: "Mean Reward: +9.0 to +10.0 | Proactive flanking",
                steps: "0.0M - 8.0M Simulation Steps"
            },
            "3": {
                title: "Stage 3: Moving Target without Obstacles (Model 26)",
                desc: "Target moves using random kinematic trajectories. Fed with target velocity vector in its 21D state, the agent learns predictive lead shooting.",
                target: "Mean Reward: +11.25 | Lowest Variance (Std: 0.5)",
                steps: "0.0M - 8.0M Simulation Steps"
            },
            "4": {
                title: "Stage 4: Moving Target with Obstacle (Model 27)",
                desc: "Combining moving target and central wall. 'Tactical waiting under cover' emerges: the agent stays sheltered until target trajectory guarantees clear Line of Sight.",
                target: "Mean Reward: +10.0 | Cover mastery",
                steps: "0.0M - 8.0M Simulation Steps"
            },
            "5": {
                title: "Stage 5: Symmetric 1v1 Self-Play (Model 30)",
                desc: "Competitive 1v1 duels against historic checkpoints in a Model Pool. Shot economy, trajectory deception, and selective sniping emerge.",
                target: "ELO Rating: 1611 to 2200+ | Continuous co-evolution",
                steps: "0.0M - 10.0M+ Total Steps"
            }
        }
    };

    function renderCurriculumPanel(phase) {
        currentCurriculumPhase = phase;
        const panel = document.getElementById("curriculum-content-panel");
        const lang = currentLang === "en" ? "en" : "es";
        const data = curriculumData[lang][phase];

        if (panel && data) {
            panel.innerHTML = `
                <h3 style="color:#ffffff; font-size:1.15rem; margin-bottom:8px;">${data.title}</h3>
                <p style="color:#cbd5e1; font-size:0.95rem; margin-bottom:16px; line-height:1.6;">${data.desc}</p>
                <div class="tech-stats-grid">
                    <div class="tech-stat-card">
                        <span class="stat-label">${lang === 'en' ? 'Performance Metric' : 'Métrica de Rendimiento'}</span>
                        <span class="stat-sub" style="color:#00ff88; font-weight:bold; font-size:0.9rem;">${data.target}</span>
                    </div>
                    <div class="tech-stat-card">
                        <span class="stat-label">${lang === 'en' ? 'Training Steps' : 'Pasos de Entrenamiento'}</span>
                        <span class="stat-sub" style="color:#ffffff; font-weight:bold; font-size:0.9rem;">${data.steps}</span>
                    </div>
                </div>
            `;
        }
    }

    document.querySelectorAll(".curr-tab-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".curr-tab-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderCurriculumPanel(btn.getAttribute("data-phase"));
        });
    });

    /* ---------------------------------------------------------
       DIBUJO DEL GRÁFICO CANVAS CON EJES EN VERDE
       --------------------------------------------------------- */
    const canvas = document.getElementById("eloCanvas");
    const reloadBtn = document.getElementById("btn-reload-chart");

    if (canvas) {
        const ctx = canvas.getContext("2d");
        let progress = 0;
        let animId;

        const rawPoints = [
            { x: 0.0, y: 1200 },
            { x: 1.5, y: 1270 },
            { x: 3.0, y: 1332 },
            { x: 5.0, y: 1435 },
            { x: 7.0, y: 1611 },
            { x: 8.5, y: 1950 },
            { x: 10.0, y: 2200 }
        ];

        const margin = { left: 50, right: 20, top: 25, bottom: 35 };
        const graphW = canvas.width - margin.left - margin.right;
        const graphH = canvas.height - margin.top - margin.bottom;

        function mapX(val) {
            return margin.left + (val / 10.0) * graphW;
        }

        function mapY(val) {
            return margin.top + graphH - ((val - 1000) / 1400) * graphH;
        }

        function drawChart() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Rejilla y Eje Y
            ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
            ctx.lineWidth = 1;
            ctx.fillStyle = "#94a3b8";
            ctx.font = "10px 'Fira Code', monospace";
            ctx.textAlign = "right";

            for (let elo = 1000; elo <= 2400; elo += 350) {
                const yPos = mapY(elo);
                ctx.beginPath();
                ctx.moveTo(margin.left, yPos);
                ctx.lineTo(canvas.width - margin.right, yPos);
                ctx.stroke();
                ctx.fillText(elo.toString(), margin.left - 8, yPos + 3);
            }

            // Eje X
            ctx.textAlign = "center";
            for (let step = 0; step <= 10; step += 2) {
                const xPos = mapX(step);
                ctx.beginPath();
                ctx.moveTo(xPos, margin.top);
                ctx.lineTo(xPos, canvas.height - margin.bottom);
                ctx.stroke();
                ctx.fillText(step + "M", xPos, canvas.height - margin.bottom + 15);
            }

            // Nombres de Ejes
            ctx.fillStyle = "#00ff88";
            ctx.font = "10px sans-serif";
            ctx.fillText(currentLang === "en" ? "Axis X: Simulation Steps" : "Eje X: Pasos de Simulación (Steps)", margin.left + graphW / 2, canvas.height - 5);

            ctx.save();
            ctx.translate(12, margin.top + graphH / 2);
            ctx.rotate(-Math.PI / 2);
            ctx.fillText(currentLang === "en" ? "Axis Y: ELO Rating" : "Eje Y: ELO Rating", 0, 0);
            ctx.restore();

            // Curva Animada
            ctx.strokeStyle = "#00ff88";
            ctx.lineWidth = 2.5;
            ctx.beginPath();

            const currentMaxX = 10.0 * progress;
            let first = true;

            for (let i = 0; i < rawPoints.length; i++) {
                const pt = rawPoints[i];
                if (pt.x <= currentMaxX) {
                    const px = mapX(pt.x);
                    const py = mapY(pt.y);
                    if (first) {
                        ctx.moveTo(px, py);
                        first = false;
                    } else {
                        ctx.lineTo(px, py);
                    }
                } else {
                    const prev = rawPoints[i - 1];
                    const factor = (currentMaxX - prev.x) / (pt.x - prev.x);
                    const interpY = prev.y + factor * (pt.y - prev.y);
                    ctx.lineTo(mapX(currentMaxX), mapY(interpY));
                    break;
                }
            }
            ctx.stroke();

            // Puntos
            for (let i = 0; i < rawPoints.length; i++) {
                if (rawPoints[i].x <= currentMaxX) {
                    const px = mapX(rawPoints[i].x);
                    const py = mapY(rawPoints[i].y);
                    ctx.fillStyle = "#ffffff";
                    ctx.beginPath();
                    ctx.arc(px, py, 3.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            if (progress < 1) {
                progress += 0.015;
                animId = requestAnimationFrame(drawChart);
            }
        }

        drawChart();

        if (reloadBtn) {
            reloadBtn.addEventListener("click", () => {
                cancelAnimationFrame(animId);
                progress = 0;
                drawChart();
            });
        }
    }

    /* COPIAR CÓDIGO YAML */
    const copyBtn = document.getElementById("btn-copy-code");
    const codeBlock = document.getElementById("code-yaml-block");

    if (copyBtn && codeBlock) {
        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(codeBlock.textContent).then(() => {
                copyBtn.textContent = currentLang === "en" ? "Copied!" : "¡Copiado!";
                setTimeout(() => {
                    copyBtn.textContent = currentLang === "en" ? "Copy YAML" : "Copiar YAML";
                }, 2000);
            });
        });
    }

    applyLanguage();
    renderCurriculumPanel("1");
});
