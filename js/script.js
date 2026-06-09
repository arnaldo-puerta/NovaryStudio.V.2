const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const body = document.body;

const toggleMenu = () => {
    menuToggle.classList.toggle("active");
    mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");
    body.classList.toggle("menu-open");
};

const closeMenu = () => {
    menuToggle.classList.remove("active");
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    body.classList.remove("menu-open");
};

menuToggle.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);

// Cerrar menú al interactuar con links móviles
document.querySelectorAll(".mobile-menu a").forEach(link => {
    link.addEventListener("click", closeMenu);
});

//

const reveals = document.querySelectorAll(
    ".reveal, .card-futuristic"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);

reveals.forEach(section => {
    observer.observe(section);
});