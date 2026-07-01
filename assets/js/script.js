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
      "Pasjonat technologii ze specjalizacją w sztucznej inteligencji, łączący praktyczne doświadczenie w IT z solidnym zapleczem technicznym. Studiuję informatykę (spec. Sztuczna Inteligencja) na UAM w Poznaniu. Zajmowałem się w praktyce fine-tuningiem modeli językowych oraz uruchamianiem dużych modeli LLM lokalnie i w chmurze. <br /><br />Posiadam doświadczenie w programowaniu (Python, React, React Native), analizie danych (Power BI, Pandas, Microsoft Fabric) oraz pracy z chmurą (GCP, AWS, Firebase). <br /><br />Jestem osobą analityczną, samodzielną i szybko przyswajającą nowe technologie.",
    "featured-projects": "Wyróżnione projekty",
    "technologies-title": "Technologie wykorzystywane w projektach",
    "projects-title": "Projekty",
    "articles-title": "Artykuły",
    "filter-all": "Wszystkie",
    "filter-cs": "Informatyka",
    "filter-math": "Matematyka",
    "filter-ai": "Sztuczna inteligencja",
    "select-category": "Wybierz kategorię",
    "project-lm-chat-title": "LM Chat - lokalny czat z modelami LLM",
    "project-rap-classifier-title":
      "Klasyfikator autorstwa zwrotek rapowych - NLP i LLM",
    "project-claim-title":
      "Model sztucznej inteligencji do klasyfikacji wypowiedzi",
    "project-transcription-title":
      "Mikroserwis do transkrypcji i klasyfikacji wypowiedzi",
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
    "rap-project-title": "Klasyfikator autorstwa zwrotek rapowych - NLP i LLM",
    "rap-project-description":
      "W ramach projektu zostały dostrojone modele językowe do zadania klasyfikacji autorstwa zwrotek rapowych, czyli rozpoznawania jednego z 20 polskich raperów na podstawie tekstu zwrotki rapowej.<br /><br />Zbiór danych został przygotowany samodzielnie: teksty pobrano z <strong>Genius API</strong>, sparsowano na pojedyncze zwrotki i oczyszczono (ok. 8 tys. rekordów, 20 klas). Dane podzielono na zbiór treningowy i testowy.<br /><br />Dostrojono dwa modele bazowe - <strong>Qwen3.5-4B</strong> oraz <strong>Gemma-4-E2B</strong> - metodą <strong>QLoRA</strong> (z biblioteką <strong>Unsloth</strong> i <strong>Transformers</strong>) wraz z głowicą klasyfikacyjną. Główną metryką ewaluacji było <strong>macro-F1</strong> - najlepszy model osiągnął wartość ok. 0,63 i 64% accuracy.<br /><br />Do inferencji przygotowano skrypt <strong>classify.py</strong> oraz notebooki z pełnym pipeline'em (przygotowanie danych, trening, testowanie). Na bazie modeli powstała aplikacja <strong>„Quiz Rapowy”</strong> (React + Vite) - pojedynek <strong>Człowiek vs AI</strong>, w którym użytkownik porównuje swój wynik z predykcjami obu modeli.<br /><br />W projekcie wykorzystano m.in. <strong>PyTorch</strong>, <strong>Hugging Face Transformers</strong>, <strong>PEFT</strong>, <strong>Unsloth</strong> i <strong>scikit-learn</strong>.",
    "claim-project-title":
      "Model sztucznej inteligencji do klasyfikacji wypowiedzi",
    "claim-project-description":
      "W ramach projektu stworzony został model sztucznej inteligencji do <strong>binarnej klasyfikacji wypowiedzi</strong> w języku polskim - rozróżniania <strong>CLAIM</strong> (stwierdzeń wartych analizy fact-checkingowej) od <strong>NOT CLAIM</strong> (wypowiedzi, które nie są stwierdzeniami lub nie wymagają takiej weryfikacji).<br /><br />Jako zbiór danych wykorzystano <strong>ClaimBuster</strong> (Fatma Arslan et al., Zenodo 2020). Przetłumaczono 2 237 zdań z angielskiego na polski za pomocą <strong>DeepL API</strong>, a etykiety przekształcono na binarne. Dane podzielono na zbiór treningowy (80%) i testowy (20%) ze stratyfikacją.<br /><br />Model bazowy to <strong>SmolLM-1.7B</strong>. Na warstwy uwagi nałożono adapter <strong>LoRA</strong>. Trening przeprowadzono przez 10 epok z użyciem klasy <strong>Trainer</strong> z Hugging Face Transformers; główną metryką ewaluacji był <strong>F1-score</strong>.<br /><br />Do inferencji przygotowano skrypt <strong>infer.py</strong> - umożliwia klasyfikację pojedynczego zdania z linii poleceń lub uruchomienie na zestawie przykładowych zdań, z obsługą akceleracji GPU (CUDA / MPS). Pełny pipeline (pobieranie danych, tłumaczenie, trening, testowanie) opisano w notebooku <strong>projekt.ipynb</strong>.<br /><br />W projekcie wykorzystano m.in. <strong>PyTorch</strong>, <strong>Hugging Face Transformers</strong>, <strong>PEFT</strong>, <strong>Datasets</strong>, <strong>scikit-learn</strong>, <strong>pandas</strong> i <strong>numpy</strong>.",
    "lm-chat-project-title": "LM Chat - lokalny czat z modelami LLM",
    "lm-chat-project-preview":
      "W ramach projektu powstała wieloplatformowa aplikacja <strong>LM Chat</strong> we <strong>Flutterze</strong> do prowadzenia konwersacji z...",
    "lm-chat-project-description":
      "W ramach projektu powstała wieloplatformowa aplikacja <strong>LM Chat</strong> we <strong>Flutterze</strong> do prowadzenia konwersacji z dużymi modelami językowymi (<strong>LLM</strong>) działającymi w pełni lokalnie na urządzeniu użytkownika - bez połączenia z chmurą.<br /><br />Inferencja odbywa się dzięki bibliotece <strong>flutter_gemma</strong> (MediaPipe LLM Inference API) z akceleracją GPU. Aplikacja obsługuje <strong>6 modeli</strong> z rodzin Qwen i Gemma, w tym warianty multimodalne (tekst i obraz).<br /><br />Oferuje streamowane generowanie odpowiedzi, trwałą historię czatów w bazie <strong>Hive</strong>, pobieranie modeli z <strong>Hugging Face</strong> oraz responsywny interfejs na telefonach, tabletach i komputerach. Architektura projektu opiera się na <strong>Clean Architecture</strong> (warstwy domain, data, presentation).<br /><br />W projekcie wykorzystano m.in. <strong>Flutter</strong>, <strong>flutter_gemma</strong>, <strong>Riverpod</strong>, <strong>Hive</strong> i <strong>shared_preferences</strong>.",
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
      "A technology enthusiast specializing in artificial intelligence, combining hands-on IT experience with a solid technical foundation. I study Computer Science (Artificial Intelligence specialization) at Adam Mickiewicz University in Poznań. In practice, I have fine-tuned language models and run LLMs locally and in the cloud. <br /><br />I have experience in programming (Python, React, React Native), data analysis (Power BI, Pandas, Microsoft Fabric), and cloud computing (GCP, AWS, Firebase). <br /><br />I am analytical, independent, and a fast learner of new technologies.",
    "featured-projects": "Featured projects",
    "technologies-title": "Technologies used in projects",
    "projects-title": "Projects",
    "articles-title": "Articles",
    "filter-all": "All",
    "filter-cs": "Computer Science",
    "filter-math": "Mathematics",
    "filter-ai": "Artificial Intelligence",
    "select-category": "Select category",
    "project-lm-chat-title": "LM Chat - Local LLM Chat",
    "project-rap-classifier-title":
      "Rap Verse Authorship Classifier - NLP & LLM",
    "project-claim-title": "AI model for statement classification",
    "project-transcription-title":
      "Microservice for recordings transcription and statements classification",
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
    "rap-project-title": "Rap Verse Authorship Classifier - NLP & LLM",
    "rap-project-description":
      "As part of the project, language models were fine-tuned for rap verse authorship classification - recognizing one of 20 Polish rappers based on the text of a rap verse.<br /><br />The dataset was prepared from scratch: lyrics were collected from the <strong>Genius API</strong>, parsed into individual verses, and cleaned (~8k records, 20 classes). The data was split into training and test sets.<br /><br />Two base models - <strong>Qwen3.5-4B</strong> and <strong>Gemma-4-E2B</strong> - were fine-tuned with <strong>QLoRA</strong> (using <strong>Unsloth</strong> and <strong>Transformers</strong>) along with a classification head. The main evaluation metric was <strong>macro-F1</strong>; the best model achieved a value of about 0.63 and 64% accuracy.<br /><br />An inference script, <strong>classify.py</strong>, and notebooks documenting the full pipeline (data preparation, training, testing) were prepared. On top of the models, a <strong>“Rap Quiz”</strong> app (React + Vite) was built - a <strong>Human vs AI</strong> challenge where the user compares their score with predictions from both models.<br /><br />The project uses <strong>PyTorch</strong>, <strong>Hugging Face Transformers</strong>, <strong>PEFT</strong>, <strong>Unsloth</strong>, and <strong>scikit-learn</strong>.",
    "claim-project-title": "AI model for statement classification",
    "claim-project-description":
      "As part of the project, an artificial intelligence model was built for <strong>binary classification of Polish statements</strong> - distinguishing <strong>CLAIM</strong> (statements worth fact-checking) from <strong>NOT CLAIM</strong> (utterances that are not statements or do not require such verification).<br /><br />The <strong>ClaimBuster</strong> dataset was used (Fatma Arslan et al., Zenodo 2020). A total of 2,237 sentences were translated from English to Polish using the <strong>DeepL API</strong>, and labels were converted to binary form. The data was split into training (80%) and test (20%) sets with stratification.<br /><br />The base model is <strong>SmolLM-1.7B</strong>. A <strong>LoRA</strong> adapter was applied to attention layers. Training ran for 10 epochs using the Hugging Face <strong>Trainer</strong> class; the main evaluation metric was <strong>F1-score</strong>.<br /><br />An inference script, <strong>infer.py</strong>, was prepared - it classifies a single sentence from the command line or runs on a set of sample sentences, with GPU acceleration support (CUDA / MPS). The full pipeline (data collection, translation, training, testing) is documented in the <strong>projekt.ipynb</strong> notebook.<br /><br />The project uses <strong>PyTorch</strong>, <strong>Hugging Face Transformers</strong>, <strong>PEFT</strong>, <strong>Datasets</strong>, <strong>scikit-learn</strong>, <strong>pandas</strong>, and <strong>numpy</strong>.",
    "lm-chat-project-title": "LM Chat - Local LLM Chat",
    "lm-chat-project-preview":
      "As part of the project, a cross-platform <strong>LM Chat</strong> application was built with <strong>Flutter</strong> for conversations with...",
    "lm-chat-project-description":
      "As part of the project, a cross-platform <strong>LM Chat</strong> application was built with <strong>Flutter</strong> for conversations with large language models (<strong>LLMs</strong>) running entirely on-device - with no cloud connection required.<br /><br />Inference is powered by <strong>flutter_gemma</strong> (MediaPipe LLM Inference API) with GPU acceleration. The app supports <strong>6 models</strong> from the Qwen and Gemma families, including multimodal variants (text and image).<br /><br />It offers streamed response generation, persistent chat history in a <strong>Hive</strong> database, model downloads from <strong>Hugging Face</strong>, and a responsive interface for phones, tablets, and desktops. The project follows <strong>Clean Architecture</strong> (domain, data, and presentation layers).<br /><br />The project uses <strong>Flutter</strong>, <strong>flutter_gemma</strong>, <strong>Riverpod</strong>, <strong>Hive</strong>, and <strong>shared_preferences</strong>.",
    "date-jan-2025": "January, 2025",
    "date-may-2024": "May, 2024",
    "date-jan-2026": "January, 2026",
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
  document.body.style.overflow = modalContainer.classList.contains("active")
    ? "hidden"
    : "";
};

// Add click event to all hlprojects items
for (let i = 0; i < hlprojectsItems.length; i++) {
  hlprojectsItems[i].addEventListener("click", function (e) {
    e.preventDefault();

    const modalImg = document.querySelector("[data-modal-img]");
    const modalTitle = document.querySelector("[data-modal-title]");
    const modalText = document.querySelector("[data-modal-text]");
    const modalVideoContainer = document.querySelector(
      "[data-modal-video-container]",
    );
    const modalVideo = document.querySelector("[data-modal-video]");

    const iconEl = this.querySelector("[data-hlprojects-icon]");
    if (iconEl) {
      modalImg.src = iconEl.src;
      modalImg.alt = iconEl.alt;
    } else {
      modalImg.src = this.getAttribute("data-icon-src") || "";
      modalImg.alt = this.getAttribute("data-icon-alt") || "";
    }
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
      "filter-ai": "sztuczna inteligencja",
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
      "filter-ai": "sztuczna inteligencja",
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
