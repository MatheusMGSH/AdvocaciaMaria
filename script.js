// =========================
// MENU MOBILE
// =========================

const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("active");

    const icon = menuButton.querySelector("i");

    if (nav.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


// Fecha o menu ao clicar em um link

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        const icon = menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


// =========================
// FAQ
// =========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("active");

        faqItems.forEach(otherItem => {

            otherItem.classList.remove("active");

            const otherAnswer =
                otherItem.querySelector(".faq-answer");

            otherAnswer.style.maxHeight = null;

        });

        if (!isActive) {

            item.classList.add("active");

            answer.style.maxHeight =
                answer.scrollHeight + "px";

        }

    });

});


// =========================
// FORMULÁRIO → WHATSAPP
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const subject =
        document.getElementById("subject").value;


    if (!name || !phone || !subject) {

        alert("Por favor, preencha todos os campos.");

        return;

    }


    const message =
        `Olá, Maria Natália!%0A%0A` +
        `Meu nome é ${name}.%0A` +
        `Meu WhatsApp: ${phone}.%0A%0A` +
        `Gostaria de obter informações sobre: ${subject}.`;


    // SUBSTITUA PELO NÚMERO REAL DA ADVOGADA
    const whatsappNumber = "5500000000000";


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=${message}`;


    window.open(whatsappURL, "_blank");

});


// =========================
// MÁSCARA DE TELEFONE
// =========================

const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function() {

    let value = phoneInput.value.replace(/\D/g, "");

    value = value.substring(0, 11);


    if (value.length <= 10) {

        value = value.replace(
            /^(\d{2})(\d{4})(\d{0,4})/,
            "($1) $2-$3"
        );

    } else {

        value = value.replace(
            /^(\d{2})(\d{5})(\d{0,4})/,
            "($1) $2-$3"
        );

    }

    phoneInput.value = value;

});


// =========================
// ANIMAÇÃO AO ROLAR
// =========================

const revealElements =
    document.querySelectorAll(
        ".practice-card, .process-step, .feature, .about-content, .contact-form-container"
    );


const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});