document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.getElementById("loader");

    const hideLoader = () => {
        if (loader) {
            loader.classList.add("hide");
        }
    };

    // Não deixa o loader ficar preso
    window.addEventListener("load", () => {
        setTimeout(hideLoader, 500);
    });

    // Segurança: mesmo se alguma imagem demorar
    setTimeout(hideLoader, 2500);


    /* =====================================================
       FADE-IN
    ===================================================== */

    const revealElements = document.querySelectorAll(".reveal");

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
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );


    revealElements.forEach((element, index) => {

        // Pequeno atraso para deixar a entrada mais elegante
        element.style.transitionDelay =
            `${(index % 4) * 0.08}s`;

        revealObserver.observe(element);

    });


    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuButton = document.querySelector(".menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

            menuButton.classList.toggle("active");

        });


        // Fecha o menu quando clicar em alguma opção

        mobileMenu.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");

                menuButton.classList.remove("active");

            });

        });

    }


    /* =====================================================
       SCROLL SUAVE
    ===================================================== */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") {
                return;
            }

            const target = document.querySelector(targetId);

            if (!target) {
                return;
            }

            event.preventDefault();

            const header = document.querySelector(".site-header");

            const headerHeight = header
                ? header.offsetHeight
                : 0;

            const targetPosition =
                target.getBoundingClientRect().top +
                window.scrollY -
                headerHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });


    /* =====================================================
       HEADER AO ROLAR
    ===================================================== */

    const header = document.querySelector(".site-header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 40) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }


    /* =====================================================
       ANO AUTOMÁTICO
    ===================================================== */

    const year = document.getElementById("current-year");

    if (year) {

        year.textContent =
            new Date().getFullYear();

    }

});
