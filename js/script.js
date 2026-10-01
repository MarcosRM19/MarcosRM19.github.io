// =========================================================
// SCRIPT PRINCIPAL (index.html)
// =========================================================

document.addEventListener("DOMContentLoaded", () => {
    // 1. Cargar el idioma guardado o usar español por defecto
    let currentLang = localStorage.getItem("preferredLanguage") || "es";

    // 2. Diccionario de traducciones para la web principal
    const translations = {
        es: {
            home: "Inicio",
            about: "Quién soy",
            experience: "Experiencia",
            projects: "Proyectos",
            documents: "Documentos",
            contactButton: "Contacto"
            // Puedes añadir aquí más claves según tu HTML en index.html
        },
        en: {
            home: "Home",
            about: "About me",
            experience: "Experience",
            projects: "Projects",
            documents: "Documents",
            contactButton: "Contact me"
        }
    };

    const langBtn = document.getElementById("language-button");

    // 3. Función para actualizar los textos de la página
    function updatePageLanguage() {
        // Guardar la preferencia en localStorage para que la lean las otras páginas
        localStorage.setItem("preferredLanguage", currentLang);

        // Cambiar el texto del botón
        if (langBtn) {
            langBtn.textContent = currentLang === "es" ? "EN" : "ES";
        }

        // Actualizar todos los elementos con el atributo data-i18n
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            if (translations[currentLang] && translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });
    }

    // 4. Event listener para el botón de cambio de idioma
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLang = currentLang === "es" ? "en" : "es";
            updatePageLanguage();
        });
    }

    // Inicializar el idioma al cargar la página
    updatePageLanguage();
});
