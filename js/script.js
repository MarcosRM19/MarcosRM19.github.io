/* =========================================================
   SCRIPT PRINCIPAL (index.html) CON SOPORTE PARA POP-UPS
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    let currentLang = "es";
    try {
        const savedLang = localStorage.getItem("preferredLanguage");
        if (savedLang === "en" || savedLang === "es") {
            currentLang = savedLang;
        }
    } catch (e) {
        console.warn("No se pudo acceder a localStorage:", e);
    }

    // Añade aquí todas las traducciones de tu index.html y de tus pop-ups
    const translations = {
        es: {
            // Navegación principal
            home: "Inicio",
            about: "Quién soy",
            experience: "Experiencia",
            projects: "Proyectos",
            documents: "Documentos",
            contactButton: "Contacto",

            // Textos dentro del Pop-Up / Modal (ajusta las claves según tu HTML)
            popupTitle: "Contacto",
            popupSubtitle: "¿Tienes alguna pregunta o propuesta?",
            popupNameLabel: "Nombre",
            popupEmailLabel: "Correo Electrónico",
            popupMessageLabel: "Mensaje",
            popupSendBtn: "Enviar mensaje",
            popupCloseBtn: "Cerrar"
        },
        en: {
            // Main navigation
            home: "Home",
            about: "About me",
            experience: "Experience",
            projects: "Projects",
            documents: "Documents",
            contactButton: "Contact me",

            // Pop-Up / Modal Texts
            popupTitle: "Contact",
            popupSubtitle: "Have a question or a project proposal?",
            popupNameLabel: "Name",
            popupEmailLabel: "Email Address",
            popupMessageLabel: "Message",
            popupSendBtn: "Send Message",
            popupCloseBtn: "Close"
        }
    };

    const langBtn = document.getElementById("language-button");

    function updatePageLanguage() {
        try {
            localStorage.setItem("preferredLanguage", currentLang);
        } catch (e) {
            console.warn("No se pudo guardar preferencia de idioma:", e);
        }

        if (langBtn) {
            langBtn.textContent = currentLang.toUpperCase();
        }

        // Recorre TODOS los elementos con data-i18n (incluidos los que están dentro de pop-ups o modales)
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            if (translations[currentLang] && translations[currentLang][key]) {
                // Si el elemento es un input/textarea con placeholder
                if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
                    element.placeholder = translations[currentLang][key];
                } else {
                    element.textContent = translations[currentLang][key];
                }
            }
        });
    }

    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLang = currentLang === "es" ? "en" : "es";
            updatePageLanguage();
        });
    }

    updatePageLanguage();
});
