/* =========================================================
   SCRIPT PRINCIPAL (index.html) - IDIOMAS Y MODAL DE CONTACTO
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // 1. GESTIÓN DE IDIOMA Y PERSISTENCIA
    let currentLang = "es";
    try {
        const savedLang = localStorage.getItem("preferredLanguage");
        if (savedLang === "en" || savedLang === "es") {
            currentLang = savedLang;
        }
    } catch (e) {
        console.warn("No se pudo acceder a localStorage:", e);
    }

    // 2. DICCIONARIO COMPLETO DE TRADUCCIONES
    const translations = {
        es: {
            // Navegación y UI General
            home: "Inicio",
            about: "Quién soy",
            experience: "Experiencia",
            projects: "Proyectos",
            documents: "Documentos",
            contactButton: "Contacto",

            // Pop-Up de Contacto
            contactTitle: "Contacta conmigo",
            yourName: "Tu Nombre",
            namePlaceholder: "Escribe tu nombre",
            yourEmail: "Tu Mail",
            emailPlaceholder: "Escribe tu email",
            message: "Mensaje",
            messagePlaceholder: "Escribe tu mensaje...",
            sendMessageButton: "Enviar mensaje",

            // Estados del Formulario (Formspree)
            statusSending: "Enviando mensaje...",
            statusSuccess: "¡Mensaje enviado con éxito!",
            statusError: "Hubo un error al enviar el mensaje. Inténtalo de nuevo."
        },
        en: {
            // Navigation and General UI
            home: "Home",
            about: "About Me",
            experience: "Experience",
            projects: "Projects",
            documents: "Documents",
            contactButton: "Contact",

            // Contact Pop-Up
            contactTitle: "Contact Me",
            yourName: "Your Name",
            namePlaceholder: "Enter your name",
            yourEmail: "Your Email",
            emailPlaceholder: "Enter your email",
            message: "Message",
            messagePlaceholder: "Write your message...",
            sendMessageButton: "Send Message",

            // Form Statuses (Formspree)
            statusSending: "Sending message...",
            statusSuccess: "Message sent successfully!",
            statusError: "There was an error sending your message. Please try again."
        }
    };

    // 3. FUNCIÓN DE ACTUALIZACIÓN DE IDIOMA EN EL DOM
    function updatePageLanguage() {
        try {
            localStorage.setItem("preferredLanguage", currentLang);
        } catch (e) {
            console.warn("No se pudo guardar la preferencia en localStorage:", e);
        }

        const langBtn = document.getElementById("language-button");
        if (langBtn) {
            langBtn.textContent = currentLang.toUpperCase();
        }

        // Traducir elementos de texto (data-i18n)
        document.querySelectorAll("[data-i18n]").forEach((element) => {
            const key = element.getAttribute("data-i18n");
            if (translations[currentLang] && translations[currentLang][key]) {
                element.textContent = translations[currentLang][key];
            }
        });

        // Traducir placeholders (data-i18n-placeholder)
        document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
            const key = element.getAttribute("data-i18n-placeholder");
            if (translations[currentLang] && translations[currentLang][key]) {
                element.placeholder = translations[currentLang][key];
            }
        });
    }

    // Listener para cambiar de idioma
    const langBtn = document.getElementById("language-button");
    if (langBtn) {
        langBtn.addEventListener("click", () => {
            currentLang = currentLang === "es" ? "en" : "es";
            updatePageLanguage();
        });
    }

    // Aplicar traducción inicial
    updatePageLanguage();

    // 4. LÓGICA DEL MODAL DE CONTACTO
    const contactModal = document.getElementById("contact-modal");
    const closeContactBtn = document.getElementById("close-contact");
    const openContactBtns = document.querySelectorAll(".open-contact, [data-i18n='contactButton']");
    const contactForm = document.getElementById("contact-form");
    const contactStatus = document.getElementById("contact-status");

    function openModal() {
        if (contactModal) {
            contactModal.classList.add("is-open", "active");
            contactModal.setAttribute("aria-hidden", "false");
        }
    }

    function closeModal() {
        if (contactModal) {
            contactModal.classList.remove("is-open", "active");
            contactModal.setAttribute("aria-hidden", "true");
        }
    }

    // Abrir modal con los botones asignados
    openContactBtns.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            openModal();
        });
    });

    // Cerrar modal con el botón X
    if (closeContactBtn) {
        closeContactBtn.addEventListener("click", closeModal);
    }

    // Cerrar modal al hacer clic fuera del contenido
    if (contactModal) {
        contactModal.addEventListener("click", (e) => {
            if (e.target === contactModal) {
                closeModal();
            }
        });
    }

    // Cerrar modal con la tecla Escape
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && contactModal && (contactModal.classList.contains("is-open") || contactModal.classList.contains("active"))) {
            closeModal();
        }
    });

    // 5. ENVÍO DEL FORMULARIO CON FORMSPREE Y RESPUESTA DINÁMICA DE IDIOMA
    if (contactForm) {
        contactForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            // Copiar email al campo _replyto
            const emailInput = document.getElementById("contact-email");
            const replyInput = document.getElementById("contact-reply");
            if (emailInput && replyInput) {
                replyInput.value = emailInput.value;
            }

            if (contactStatus) {
                contactStatus.textContent = translations[currentLang].statusSending;
                contactStatus.style.color = "#ffffff";
            }

            const formData = new FormData(contactForm);

            try {
                const response = await fetch(contactForm.action, {
                    method: contactForm.method,
                    body: formData,
                    headers: {
                        Accept: "application/json"
                    }
                });

                if (response.ok) {
                    if (contactStatus) {
                        contactStatus.textContent = translations[currentLang].statusSuccess;
                        contactStatus.style.color = "#4CAF50";
                    }
                    contactForm.reset();
                    setTimeout(() => {
                        closeModal();
                        if (contactStatus) contactStatus.textContent = "";
                    }, 2500);
                } else {
                    throw new Error("Error en la respuesta del servidor");
                }
            } catch (error) {
                if (contactStatus) {
                    contactStatus.textContent = translations[currentLang].statusError;
                    contactStatus.style.color = "#f44336";
                }
            }
        });
    }
});
