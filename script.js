document.addEventListener("DOMContentLoaded", function () {

    // LIBERA O SITE AUTOMATICAMENTE
    const loader = document.querySelector(".loader");

    if (loader) {
        setTimeout(function () {
            loader.classList.add("hide");
        }, 1200);
    }

    // FADE-IN DAS SEÇÕES
    const elementos = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    }, {
        threshold: 0.10
    });

    elementos.forEach(function (elemento) {
        observer.observe(elemento);
    });


    // MENU MOBILE
    const menuButton = document.querySelector(".menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuButton && mobileMenu) {

        menuButton.addEventListener("click", function () {

            mobileMenu.classList.toggle("active");
            menuButton.classList.toggle("active");

        });

        const links = mobileMenu.querySelectorAll("a");

        links.forEach(function (link) {

            link.addEventListener("click", function () {

                mobileMenu.classList.remove("active");
                menuButton.classList.remove("active");

            });

        });
    }


    // SCROLL SUAVE
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const id = this.getAttribute("href");

            if (!id || id === "#") return;

            const destino = document.querySelector(id);

            if (destino) {

                event.preventDefault();

                destino.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    // HEADER
    const header = document.querySelector("header");

    if (header) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

        });

    }

});
