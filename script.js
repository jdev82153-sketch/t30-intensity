document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       CARREGAR TODAS AS IMAGENS DA T30
    ===================================================== */

    const images = document.querySelectorAll("img");

    images.forEach((img) => {
        img.loading = "eager";
        img.decoding = "async";
    });


    /* =====================================================
       LOADER
    ===================================================== */

    const loader = document.getElementById("loader");

    function hideLoader() {
        if (loader) {
            loader.classList.add("hide");
        }
    }

    window.addEventListener("load", () => {
        setTimeout(hideLoader, 500);
    });

    // Segurança para nunca ficar preso
    setTimeout(hideLoader, 2000);


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
            threshold: 0.05,
            rootMargin: "0px 0px 80px 0px"
        }
    );


    revealElements.forEach((element, index) => {

        element.style.transitionDelay =
            `${(index % 3) * 0.08}s`;

        revealObserver.observe(element);

    });


    /* =====================================================
       GARANTIR QUE ELEMENTOS MUITO GRANDES APAREÇAM
    ===================================================== */

    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {

        if (!section.classList.contains("reveal")) {
            section.classList.add("reveal");
            revealObserver.observe(section);
        }

    });


    /* =====================================================
       MENU MOBILE
    ===================================================== */

    const menuButton =
        document.querySelector(".menu-button");

    const mobileMenu =
        document.querySelector(".mobile-menu");


    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

            menuButton.classList.toggle("active");

        });


        mobileMenu
            .querySelectorAll("a")
            .forEach((link) => {

                link.addEventListener("click", () => {

                    mobileMenu.classList.remove("active");

                    menuButton.classList.remove("active");

                });

            });

    }


    /* =====================================================
       SCROLL SUAVE
    ===================================================== */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach((link) => {

            link.addEventListener("click", function (event) {

                const id =
                    this.getAttribute("href");

                if (!id || id === "#") {
                    return;
                }

                const target =
                    document.querySelector(id);

                if (!target) {
                    return;
                }

                event.preventDefault();

                const header =
                    document.querySelector(".site-header");

                const headerHeight =
                    header
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

            });

        });


    /* =====================================================
       HEADER
    ===================================================== */

    const header =
        document.querySelector(".site-header");

    if (header) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 30) {

                header.classList.add("scrolled");

            } else {

                header.classList.remove("scrolled");

            }

        });

    }


    /* =====================================================
       ANO
    ===================================================== */

    const year =
        document.getElementById("current-year");

    if (year) {
        year.textContent =
            new Date().getFullYear();
    }

});
