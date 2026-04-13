const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const links = document.querySelectorAll(".menu-link");

btn.addEventListener("click", () => {
    menu.classList.toggle("translate-x-full");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.add("translate-x-full");
    });
});

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove(
                "opacity-0",
                "-translate-x-20",
                "translate-x-20",
                "translate-y-20"
            );

            entry.target.classList.add("opacity-100", "translate-x-0", "translate-y-0");
        }
    });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));


const reveals = document.querySelectorAll(".reveal-right");

const blblb = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.remove(
                "opacity-0",
                "translate-x-20",
                "-translate-x-20",
                "translate-y-20"
            );
        }
    });
}, { threshold: 0.2 });

reveals.forEach(el => observer.observe(el));