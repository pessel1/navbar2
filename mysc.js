const navbarToggle = document.getElementById("navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

// Toggle Mobile menu

navbarToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});
