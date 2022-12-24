let headerNav = document.querySelector(".header-nav");
let navToggleButton = document.querySelector(".nav-toggle");
let navCloseButton = document.querySelector(".nav-close");

navToggleButton.addEventListener('click', toggleNavbar);
navCloseButton.addEventListener('click', toggleNavbar);

function toggleNavbar() {
    headerNav.classList.toggle("collapse");
}