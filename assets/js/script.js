"use strict";

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Hlprojects modal functionality
const hlprojectsItems = document.querySelectorAll("[data-hlprojects-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal buttons
const githubBtn = document.querySelector("[data-github-link]");

const hlprojectsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Add click event to all hlprojects items
for (let i = 0; i < hlprojectsItems.length; i++) {
  hlprojectsItems[i].addEventListener("click", function () {
    const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalText = document.querySelector("[data-modal-text]");
    const modalVideoContainer = document.querySelector(
      "[data-modal-video-container]"
    );
    const modalVideo = document.querySelector("[data-modal-video]");

    modalImg.src = this.querySelector("[data-hlprojects-icon]").src;
    modalImg.alt = this.querySelector("[data-hlprojects-icon]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-hlprojects-title]"
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-hlprojects-text]"
    ).innerHTML;

    // Get video and github URLs
    const videoUrl = this.getAttribute("data-video-url");
    const githubUrl = this.getAttribute("data-github-url");

    // Handle video display in modal and load video only when clicked
    if (videoUrl && videoUrl.trim() !== "") {
      modalVideo.src = videoUrl; // Load video source
      modalVideoContainer.style.display = "block";
    } else {
      modalVideo.src = ""; // Clear video source
      modalVideoContainer.style.display = "none";
    }

    // Handle github button
    if (githubUrl && githubUrl.trim() !== "") {
      githubBtn.href = githubUrl;
      githubBtn.style.display = "flex";
      githubBtn.target = "_blank";
    } else {
      githubBtn.style.display = "none";
    }

    hlprojectsModalFunc();
  });
}

// Add click event to modal close elements and clear video when closing
modalCloseBtn.addEventListener("click", function () {
  const modalVideo = document.querySelector("[data-modal-video]");
  modalVideo.src = ""; // Clear video source to stop loading/playing
  hlprojectsModalFunc();
});

overlay.addEventListener("click", function () {
  const modalVideo = document.querySelector("[data-modal-video]");
  modalVideo.src = ""; // Clear video source to stop loading/playing
  hlprojectsModalFunc();
});

// Add click event to github button
githubBtn.addEventListener("click", function (e) {
  if (this.href && this.href !== "#") {
    // Link will open in new tab
  } else {
    e.preventDefault();
  }
});

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
  elementToggleFunc(this);
});

// Add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// Filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "wszystkie") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
};

// Add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}
