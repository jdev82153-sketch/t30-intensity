// ================================
// T30 INTENSITY 2.0
// Interações da Landing Page
// ================================

document.addEventListener("DOMContentLoaded", () => {

    // --------------------------------
    // FADE-IN DA PÁGINA AO ENTRAR
    // --------------------------------
    document.body.classList.add("page-loaded");


    // --------------------------------
    // ANIMAÇÃO DOS ELEMENTOS AO ROLAR
    // --------------------------------
    const revealElements = document.querySelectorAll(
        ".reveal, section, .card, .plan, .feature, .diferencial"
    );

    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal");
        revealObserver.observe(element);
    });


    // --------------------------------
    // SCROLL SUAVE NOS LINKS
    // --------------------------------
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
        link.addEventListener("click", function (event) {
            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });


    // --------------------------------
    // HEADER FICA MAIS SÓLIDO AO ROLAR
    // --------------------------------
    const header = document.querySelector("header");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }


    // --------------------------------
    // MENU MOBILE
    // --------------------------------
    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector("nav");

    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            nav.classList.toggle("active");
            menuButton.classList.toggle("active");
        });

        nav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                menuButton.classList.remove("active");
            });
        });
    }


    // --------------------------------
    // BOTÕES DE WHATSAPP
    // --------------------------------
    const whatsappNumber = "5596991468330";

    document.querySelectorAll(".whatsapp-btn").forEach((button) => {
        button.addEventListener("click", () => {

            const message =
                "Olá! Vi o site da T30 Intensity 2.0 e gostaria de saber mais sobre os planos.";

            const url =
                `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

            window.open(url, "_blank");
        });
    });


    // --------------------------------
    // EFEITO PARALLAX LEVE NO BANNER
    // --------------------------------
    const hero = document.querySelector(".hero");

    if (hero) {
        window.addEventListener("scroll", () => {
            const scroll = window.scrollY;

            if (scroll < 700) {
                hero.style.backgroundPosition =
                    `center ${scroll * 0.15}px`;
            }
        });
    }


    // --------------------------------
    // ANO AUTOMÁTICO NO FOOTER
    // --------------------------------
    const year = document.querySelector("#current-year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
