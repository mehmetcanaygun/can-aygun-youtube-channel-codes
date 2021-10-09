// DOM Elements
const orderByNameBtn = document.querySelector(".order-by-name-btn");
const orderByCategoryBtn = document.querySelector(".order-by-category-btn");
const projectList = document.querySelector(".project-list");
const listItems = document.querySelectorAll(".list-item");

// Order list items by either name or category
function order(by) {
  const arr = Array.from(listItems);

  arr.sort((a, b) => {
    const aName = a.querySelector(by).innerText;
    const bName = b.querySelector(by).innerText;

    if (aName < bName) return -1;

    if (aName > bName) return 1;

    return 0;
  });

  arr.forEach((item) => {
    projectList.appendChild(item);
  });
}

// Event Listeners
orderByNameBtn.addEventListener("click", () => order(".yt-link"));
orderByCategoryBtn.addEventListener("click", () => order(".category"));
