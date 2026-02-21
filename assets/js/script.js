"use strict";

// Language translations
const translations = {
  pl: {
    "nav-about": "O mnie",
    "nav-projects": "Projekty",
    "nav-articles": "Artykuły",
    "show-contacts": "Pokaż dane kontaktowe",
    location: "Lokalizacja",
    "location-address": "Pobiedziska, Polska",
    "about-title": "O mnie",
    "about-text":
      "Jestem pasjonatem technologii z praktycznym doświadczeniem w branży IT i solidnym zapleczem technicznym. Studiuję informatykę na Uniwersytecie im. Adama Mickiewicza w Poznaniu, gdzie rozwijam swoje kompetencje informatyczne oraz znajomość nowoczesnych technologii. W Fundacji MEETin pełniłem funkcję Specjalisty ds. IT i odpowiadałem za prowadzenie projektów zespołowych oraz utrzymanie systemów informatycznych. Pracując z zespołem, zdobyłem umiejętności efektywnej współpracy i organizacji pracy. <br /><br />Posiadam doświadczenie w programowaniu (Python, C++, React i React Native), analizie danych (Microsoft Fabric, Microsoft Power BI i Pandas), obsłudze baz danych (SQL Server i Firebase) oraz pracy z chmurą (Google Cloud, Firebase i Amazon Web Services). Swobodnie poruszam się w środowiskach Windows i Linux oraz dobrze znam narzędzia do kontroli wersji, co pozwala mi efektywnie realizować zadania i szybko dostosowywać się do nowych zadań. Jestem osobą zorganizowaną, skrupulatną i nastawioną na analityczne podejście do rozwiązywania problemów, samodzielność i szybkie przyswajanie nowych technologii.<br />Dążę do ciągłego rozwoju w obszarze IT, angażując się w projekty wymagające innowacyjności i elastyczności.",
    "featured-projects": "Wyróżnione projekty",
    "technologies-title": "Technologie wykorzystywane w projektach",
    "projects-title": "Projekty",
    "articles-title": "Artykuły",
    "filter-all": "Wszystkie",
    "filter-cs": "Informatyka",
    "filter-math": "Matematyka",
    "select-category": "Wybierz kategorię",
    "project-winds-title": "Wiatry Świata",
    "project-meetin-title": "Aplikacja MEETin",
    "project-smartphones-title": "Baza danych smartfonów",
    "project-microshell-title": "MicroShell",
    "project-weather-title": "Aplikacja pogodowa w Bash i PowerShell",
    "project-cubic-spline-title": "Interpolacją funkcją sklejaną",
    "project-mandelbrot-title": "Zbiór Mandelbrota",
    "project-quiz-title": "Quiz Sieciowy",
    "winds-project-title": "Wiatry Świata",
    "winds-project-description":
      "Aplikacja oparta jest na bibliotece graficznej <strong>OpenGL</strong> i umożliwia interaktywną wizualizację globalnych wzorców wiatru na trójwymiarowym modelu kuli ziemskiej. Projekt prezentuje dane meteorologiczne w przystępny sposób, wykorzystując przy tym wiele technik grafiki komputerowej. Aplikacja pozwala na odczyt kierunków i prędkości wiatrów na całym świecie na podstawie historycznych danych, korzystając z <strong>API NOMADS</strong> (https://nomads.ncep.noaa.gov/) dostarczonego przez National Oceanic and Atmospheric Administration.<br /><br />Dzięki prostemu interfejsowi wraz z samouczkiem oraz graficznym elementom, takim jak animowane linie wiatru oraz strzałki z dominującymi kierunkami wiatru, aplikacja pozwala w łatwy sposób analizować i interpretować zjawiska atmosferyczne.",
    "meetin-project-title": "Aplikacja MEETin",
    "meetin-project-description":
      "<strong>MEETin</strong> to aplikacja mobilna na Android i iOS stworzona w <strong>React Native</strong>, która ułatwia znajdowanie miejsc spotkań z przyjaciółmi na podstawie preferencji użytkownika. Wykorzystuje <strong>Google Maps API</strong> do pobierania danych o miejscach, a także <strong>Firebase</strong> do obsługi bazy danych.<br /><br />Aplikacja oferuje spersonalizowane wyszukiwanie miejsc z podziałem na kategorie i podkategorie, co pozwala na precyzyjne dopasowanie propozycji do zainteresowań użytkownika.",
    "date-jan-2025": "styczeń, 2025",
    "date-may-2024": "maj, 2024",
  },
  en: {
    "nav-about": "About",
    "nav-projects": "Projects",
    "nav-articles": "Articles",
    "show-contacts": "Show contact info",
    location: "Location",
    "location-address": "Pobiedziska, Poland",
    "about-title": "About me",
    "about-text":
      "I am a technology enthusiast with practical experience in the IT industry and a strong technical background. I study computer science at Adam Mickiewicz University in Poznań, where I develop my IT skills and knowledge of modern technologies. At the MEETin Foundation, I served as an IT Specialist and was responsible for leading team projects and maintaining IT systems. Working in a team environment allowed me to gain valuable experience in collaboration and work organization.  <br /><br /> I have experience in programming (Python, C++, React, and React Native), data analysis (Microsoft Fabric, Microsoft Power BI and Pandas), database management (SQL Server and Firebase), and cloud computing (Google Cloud, Firebase and Amazon Web Services). I am comfortable working in Windows and Linux environments and proficient in version control tools, which allows me to efficiently complete tasks and quickly adapt to new challenges. I am organized, meticulous, and focused on analytical problem-solving, independence, and rapid acquisition of new technologies. <br />I strive for continuous development in the IT field, engaging in projects that require innovation and flexibility.",
    "featured-projects": "Featured projects",
    "technologies-title": "Technologies used in projects",
    "projects-title": "Projects",
    "articles-title": "Articles",
    "filter-all": "All",
    "filter-cs": "Computer Science",
    "filter-math": "Mathematics",
    "select-category": "Select category",
    "project-winds-title": "World Winds",
    "project-meetin-title": "MEETin App",
    "project-smartphones-title": "Smartphones Database",
    "project-microshell-title": "MicroShell",
    "project-weather-title": "Bash and Powershell Weather App",
    "project-cubic-spline-title": "Cubic Spline Interpolation",
    "project-mandelbrot-title": "Mandelbrot Set",
    "project-quiz-title": "Quiz Game",
    "winds-project-title": "World Winds",
    "winds-project-description":
      "The application is based on the <strong>OpenGL</strong> graphics library and enables interactive visualization of global wind patterns on a 3D model of the Earth. The project presents meteorological data in an accessible way, using many computer graphics techniques. The application allows reading wind directions and speeds around the world based on historical data, using the <strong>NOMADS API</strong> (https://nomads.ncep.noaa.gov/) provided by the National Oceanic and Atmospheric Administration.<br /><br />Thanks to a simple interface with a tutorial and graphical elements such as animated wind lines and arrows indicating dominant wind directions, the application makes it easy to analyze and interpret atmospheric phenomena.",
    "meetin-project-title": "MEETin App",
    "meetin-project-description":
      "<strong>MEETin</strong> is a mobile application for Android and iOS created in <strong>React Native</strong> that makes it easier to find meeting places with friends based on user preferences. It uses <strong>Google Maps API</strong> to retrieve places data, as well as <strong>Firebase</strong> for database management.<br /><br />The application offers personalized places search divided into categories and subcategories, which allows for precise matching of suggestions to user interests.",
    "date-jan-2025": "January, 2025",
    "date-may-2024": "May, 2024",
  },
};

// Language switching functionality
const langToggleBtn = document.querySelector("[data-lang-toggle]");
const langText = document.querySelector(".lang-text");
const html = document.documentElement;

// Function to detect browser language and return 'pl' for Polish, 'en' for others
function detectBrowserLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.toLowerCase().startsWith("pl") ? "pl" : "en";
}

const currentLang = localStorage.getItem("language") || detectBrowserLanguage();
html.setAttribute("data-lang", currentLang);
langText.textContent = currentLang === "pl" ? "EN" : "PL";

// Apply translations on page load
applyTranslations(currentLang);

// Language toggle event listener
langToggleBtn.addEventListener("click", function () {
  const currentLang = html.getAttribute("data-lang");
  const newLang = currentLang === "pl" ? "en" : "pl";

  html.setAttribute("data-lang", newLang);
  localStorage.setItem("language", newLang);
  langText.textContent = newLang === "pl" ? "EN" : "PL";

  applyTranslations(newLang);
});

// Function to apply translations
function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      element.innerHTML = translations[lang][key];
    }
  });
}

// Theme toggle functionality
const themeToggleBtn = document.querySelector("[data-theme-toggle]");

// Check for saved theme preference or default to 'dark' mode
const currentTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", currentTheme);

// Theme toggle event listener
themeToggleBtn.addEventListener("click", function () {
  const currentTheme = html.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  html.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}; // Sidebar variables
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
      "[data-modal-video-container]",
    );
    const modalVideo = document.querySelector("[data-modal-video]");

    modalImg.src = this.querySelector("[data-hlprojects-icon]").src;
    modalImg.alt = this.querySelector("[data-hlprojects-icon]").alt;
    modalTitle.innerHTML = this.querySelector(
      "[data-hlprojects-title]",
    ).innerHTML;
    modalText.innerHTML = this.querySelector(
      "[data-hlprojects-text]",
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
    let selectedValue = this.getAttribute("data-translate");
    // Map English translations to Polish data-category values
    const categoryMap = {
      "filter-all": "wszystkie",
      "filter-cs": "informatyka",
      "filter-math": "matematyka",
    };

    const mappedValue = categoryMap[selectedValue] || selectedValue;
    selectValue.innerHTML = this.innerHTML;
    elementToggleFunc(select);
    filterFunc(mappedValue);
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
    let selectedValue = this.getAttribute("data-translate");
    // Map English translations to Polish data-category values
    const categoryMap = {
      "filter-all": "wszystkie",
      "filter-cs": "informatyka",
      "filter-math": "matematyka",
    };

    const mappedValue = categoryMap[selectedValue] || selectedValue;
    selectValue.innerHTML = this.innerHTML;
    filterFunc(mappedValue);

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
    // Create mapping for navigation
    const currentLang = html.getAttribute("data-lang") || "pl";
    const navMap = {
      "nav-about": currentLang === "pl" ? "o mnie" : "about",
      "nav-projects": currentLang === "pl" ? "projekty" : "projects",
      "nav-articles": currentLang === "pl" ? "artykuły" : "articles",
    };

    const navKey = this.getAttribute("data-translate");
    const targetPage = navMap[navKey];

    for (let j = 0; j < pages.length; j++) {
      const pageId =
        currentLang === "pl" ? pages[j].dataset.page : pages[j].dataset.pageEn;
      if (targetPage === pageId) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }
  });
}
