// DOM Elements
const navbarNav = document.querySelector(".navbar-nav");
const navbarMenuBtn = document.querySelector(".navbar-menu-btn");

// Toggle menu btn & nav list
function toggleNavbar() {
  navbarMenuBtn.classList.toggle("toggled");
  navbarNav.classList.toggle("toggled");
}

// Event Listeners
navbarMenuBtn.addEventListener("click", toggleNavbar);
