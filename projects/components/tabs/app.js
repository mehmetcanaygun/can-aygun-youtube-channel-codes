// DOM Elements
const titleBtns = document.querySelectorAll(".title-btn");
const contents = document.querySelectorAll(".content");

// Change Tabs
function changeTab(i) {
  // Remove active class from other titleBtn & content
  contents.forEach((content) => (content.className = "content"));
  titleBtns.forEach((titleBtn) => (titleBtn.classList = "title-btn"));

  // Add active class to the clicked titleBtn & content
  contents[i].classList.add("active");
  titleBtns[i].classList.add("active");
  //
}

// Event Listeners
titleBtns.forEach((titleBtn, index) =>
  titleBtn.addEventListener("click", () => changeTab(index))
);
