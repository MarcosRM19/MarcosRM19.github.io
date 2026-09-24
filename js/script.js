const languageButton = document.getElementById("language-button");

let currentLanguage = "en";

const translations = {
    en: {
        logo: "MarcosRuiz Portfolio",

        home: "Home",
        about: "About me",
        experience: "Experience",
        projects: "Projects",
        contact: "Contact",

        contactButton: "Contact me",

        heroSubtitle: "Game Designer"
    },

    es: {
        logo: "MarcosRuiz Portfolio",

        home: "Inicio",
        about: "Quién soy",
        experience: "Experiencia",
        projects: "Proyectos",
        contact: "Contacto",

        contactButton: "Contáctame",

        heroSubtitle: "Diseñador de Videojuegos"
    }
};


function updateLanguage() {

    const language = translations[currentLanguage];

    document.getElementById("logo").textContent =
        language.logo;

    document.getElementById("nav-home").textContent =
        language.home;

    document.getElementById("nav-about").textContent =
        language.about;

    document.getElementById("nav-experience").textContent =
        language.experience;

    document.getElementById("nav-projects").textContent =
        language.projects;

    document.getElementById("nav-contact").textContent =
        language.contact;

    document.getElementById("contact-button").textContent =
        language.contactButton;

    document.getElementById("hero-subtitle").textContent =
        language.heroSubtitle;

    // El botón muestra el idioma actual
    languageButton.textContent =
        currentLanguage === "en" ? "EN" : "ES";
}


languageButton.addEventListener("click", () => {

    if (currentLanguage === "en") {
        currentLanguage = "es";
    } else {
        currentLanguage = "en";
    }

    updateLanguage();
});


updateLanguage();
