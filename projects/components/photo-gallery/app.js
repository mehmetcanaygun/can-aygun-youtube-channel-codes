// DOM Elements
const images = document.querySelectorAll(".image-container img");
const imageModal = document.querySelector(".image-modal");
const fullscreenImage = document.querySelector(
  ".fullscreen-image-container img"
);

// Variables
let imgSrc = "";

// Click to display images on the modal
function displayImage(image) {
  // Get img src
  imgSrc = image.getAttribute("src");

  // Set fullscreen image src
  fullscreenImage.setAttribute("src", imgSrc);

  // Toggle modal
  imageModal.classList.add("toggled");
}

// Event Listeners
images.forEach((image) =>
  image.addEventListener("click", (e) => displayImage(e.target))
);

// To close the modal
imageModal.addEventListener("click", (e) => {
  if (e.target.classList.contains("image-modal")) {
    imageModal.classList.remove("toggled");
  }
});
