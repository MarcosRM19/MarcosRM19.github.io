const languageButton = document.getElementById("language-button");

let currentLanguage = "es";

languageButton.addEventListener("click", () => {

    if (currentLanguage === "es") {

        currentLanguage = "en";

        // Navegación
        document.querySelector('a[href="#sobre-mi"]').textContent = "About me";
        document.querySelector('a[href="#experiencia"]').textContent = "Experience";
        document.querySelector('a[href="#proyectos"]').textContent = "Projects";
        document.querySelector('a[href="#contacto"]').textContent = "Contact";

        // Botón: ahora permite volver al español
        languageButton.textContent = "ES";

    } else {

        currentLanguage = "es";

        // Navegación
        document.querySelector('a[href="#sobre-mi"]').textContent = "Quién soy";
        document.querySelector('a[href="#experiencia"]').textContent = "Experiencia";
        document.querySelector('a[href="#proyectos"]').textContent = "Proyectos";
        document.querySelector('a[href="#contacto"]').textContent = "Contacto";

        // Botón: ahora permite cambiar al inglés
        languageButton.textContent = "EN";
    }
});
