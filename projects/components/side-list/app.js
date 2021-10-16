// DOM Elements
const openBtns = document.querySelectorAll(".open-sub-list-btn");
const closeBtns = document.querySelectorAll(".close-sub-list-btn");

// Variables
let toggledSublist;

// Toggle sub list when open btn is clicked
function openSubList(el) {
  toggledSublist = el.nextElementSibling;
  toggledSublist.classList.add("toggled");
}

// Close sub list when back btn is clicked
function closeSubList() {
  toggledSublist.classList.remove("toggled");
}

// Event Listeners
openBtns.forEach((btn) =>
  btn.addEventListener("click", (e) => openSubList(e.target))
);
closeBtns.forEach((btn) => btn.addEventListener("click", closeSubList));
