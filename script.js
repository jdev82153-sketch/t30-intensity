document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       LOADER
    ========================================= */

    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(() => {
            loader.classList.add("hide");
        }, 1000);
    }


    /* =========================================
       FADE-IN AUTOMÁTICO
    ========================================= */

    // Elementos que vão aparecer conforme a pessoa rola
    const revealElements = document.querySelectorAll(
        "section:not(.hero), " +
        ".differential-card, " +
        ".plan, " +
        ".partnership, " +
        ".schedule-wrapper, " +
        ".location-grid, " +
        ".final-cta"
    );

    revealElements.forEach((element, index) => {
        element.classList.add("reveal");

        // Pequeno atraso entre os elementos
        element.style.transitionDelay = `${(index % 4) * 0.08}s`;
    });


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
            rootMargin: "0px 0px -50px 0px"
        }
    );


    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });


    /* =========================================
       HERO — ENTRADA
    ========================================= */

    const heroContent = document.querySelector(".hero-content");

    if (heroContent) {
        heroContent.classList.add("hero-enter");
    }


    /* =========================================
       MENU MOBILE
    ========================================= */

    const menuButton = document.querySelector(".menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");
            menuButton.classList.toggle("active");

        });

        mobileMenu.querySelectorAll("a").forEach((link) => {

            link.addEventListener("click", () => {

                mobileMenu.classList.remove("active");
                menuButton.classList.remove("active");

            });

        });
    }


    /* =========================================
       SCROLL SUAVE
    ========================================= */

    document.querySelectorAll('a[href^="#"]').forEach((link) => {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {

                event.preventDefault();

                const header = document.querySelector("header");
                const headerHeight = header
                    ? header.offsetHeight
                    : 0;

                const position =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    headerHeight;

                window.scrollTo({
                    top: position,
                    behavior: "smooth"
                });
            }

        });

    });


    /* =========================================
       HEADER AO ROLAR
    ========================================= */

    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }


    /* =========================================
       ANO
    ========================================= */

    const year = document.querySelector("#current-year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

});
