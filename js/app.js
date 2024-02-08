const navbar = document.querySelector(".navbar");
const btn = document.querySelector(".menu-btn");

navbar.addEventListener("click", () => {
    navbar.classList.toggle("close");
});