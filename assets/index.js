const btn = document.getElementById("menu-btn");
const menu = document.getElementById("mobile-menu");
const links = document.querySelectorAll(".menu-link");



//Menu burger
btn.addEventListener("click", () => {
    menu.classList.toggle("translate-x-full");
});

links.forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.add("translate-x-full");
    });
});



//Apparrition des section quand l'utilisateur arrive au niveau 
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


const projectCard = document.querySelector(".project-card");
if (projectCard) {
    projectCard.addEventListener("click", () => {
        window.location.href = "/projects/UnJourInternet.html";
    });
}

const projectPortfolio = document.querySelector(".project-portfolio");
if (projectPortfolio) {
    projectPortfolio.addEventListener("click", () => {
        window.location.href = "/projects/portfolio.html";
    });
}

const projectBrakdanet = document.querySelector(".project-brakdanet");
if (projectBrakdanet) {
    projectBrakdanet.addEventListener("click", () => {
        window.location.href = "/projects/BreakDaNet.html";
    });
}