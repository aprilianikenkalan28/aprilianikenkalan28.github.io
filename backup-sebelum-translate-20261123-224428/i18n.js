const translations = {
  id: {
    home: "Beranda",
    about: "Tentang",
    projects: "Proyek",
    contact: "Kontak",

    homeRole: "Mahasiswa S1 Statistika",
    homeBio: "Mahasiswa Statistika di Universitas Cenderawasih yang memiliki minat pada analisis data, visualisasi data, dan pemrograman.",
    homeNote: "Belajar Statistika, Menjelajahi Data.",
    email: "Email",
    instagram: "Instagram",
    github: "GitHub",

    aboutLabel: "TENTANG SAYA",
    aboutTitle: "Tentang Saya",
    aboutIntro: "Saya adalah mahasiswa S1 Statistika di Universitas Cenderawasih. Saya memiliki ketertarikan pada pengolahan data, analisis data, visualisasi data, dan pemrograman. Saat ini, saya sedang mengembangkan pengetahuan dan keterampilan melalui pembelajaran akademik serta praktik secara mandiri.",
    education: "Pendidikan",
    educationDegree: "Program Sarjana Statistika",
    skillsTitle: "Bidang yang Dipelajari",
    skillExcel1: "Penggunaan rumus",
    skillExcel2: "Pengolahan data",
    skillExcel3: "Pembuatan tabel",
    skillExcel4: "Pembuatan grafik",
    skillPython: "Python (Pembelajaran)",
    learningGoals: "Tujuan Pembelajaran",
    learningDescription: "Saya ingin terus mengembangkan kemampuan dalam bidang statistika dan teknologi, khususnya dalam memahami, mengolah, menganalisis, serta menyajikan data sebagai informasi yang bermanfaat.",

    projectsLabel: "PORTOFOLIO",
    projectsTitle: "Proyek",
    projectDescription: "Berikut beberapa proyek dan tugas yang saya kerjakan selama proses pembelajaran sebagai mahasiswa Statistika.",
    projectLabel: "PROYEK",
    project1Title: "Pengolahan Data Menggunakan Microsoft Excel",
    project1Description: "Penerapan rumus dan fitur Excel untuk membantu proses pengolahan serta pengelolaan data.",
    project2Title: "Perhitungan Modal dan Keuntungan",
    project2Description: "Penggunaan Microsoft Excel untuk menyusun perhitungan modal, pendapatan, dan keuntungan.",
    project3Title: "Operasi Gabungan Menggunakan Python",
    project3Description: "Penerapan dasar pemrograman Python dalam tugas Algoritma dan Pemrograman.",
    viewProject: "Lihat Proyek",

    contactLabel: "KONTAK",
    contactTitle: "Hubungi Saya",
    contactDescription: "Saya terbuka untuk terhubung, berbagi ide, berdiskusi, serta menjajaki kesempatan belajar dan kolaborasi. Silakan menghubungi saya melalui platform berikut.",
    location: "Lokasi"
  },

  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",

    homeRole: "Undergraduate Statistics Student",
    homeBio: "A Statistics student at Cenderawasih University with an interest in data analysis, data visualization, and programming.",
    homeNote: "Learning Statistics, Exploring Data.",
    email: "Email",
    instagram: "Instagram",
    github: "GitHub",

    aboutLabel: "ABOUT ME",
    aboutTitle: "About Me",
    aboutIntro: "I am an undergraduate Statistics student at Cenderawasih University. I am interested in data processing, data analysis, data visualization, and programming. I am currently developing my knowledge and skills through academic learning and independent practice.",
    education: "Education",
    educationDegree: "Undergraduate Statistics Program",
    skillsTitle: "Areas of Study",
    skillExcel1: "Using formulas",
    skillExcel2: "Data processing",
    skillExcel3: "Creating tables",
    skillExcel4: "Creating charts",
    skillPython: "Python (Learning)",
    learningGoals: "Learning Goals",
    learningDescription: "I aim to continuously develop my skills in statistics and technology, particularly in understanding, processing, analyzing, and presenting data as useful information.",

    projectsLabel: "PORTFOLIO",
    projectsTitle: "Projects",
    projectDescription: "Here are some projects and assignments I have completed during my learning journey as a Statistics student.",
    projectLabel: "PROJECT",
    project1Title: "Data Processing Using Microsoft Excel",
    project1Description: "Applying Excel formulas and features to support data processing and management.",
    project2Title: "Capital and Profit Calculation",
    project2Description: "Using Microsoft Excel to calculate capital, revenue, and profit.",
    project3Title: "Combined Operations Using Python",
    project3Description: "Applying basic Python programming concepts in an Algorithms and Programming assignment.",
    viewProject: "View Project",

    contactLabel: "CONTACT",
    contactTitle: "Get in Touch",
    contactDescription: "I am open to connecting, sharing ideas, discussing, and exploring learning and collaboration opportunities. Feel free to contact me through the following platforms.",
    location: "Location"
  }
};

function setLanguage(language) {
  const selectedLanguage = translations[language] ? language : "id";

  document.documentElement.lang = selectedLanguage;
  localStorage.setItem("language", selectedLanguage);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    const translatedText = translations[selectedLanguage][key];

    if (translatedText !== undefined) {
      element.textContent = translatedText;
    }
  });

  document.querySelectorAll("[data-language-button]").forEach((button) => {
    const active =
      button.getAttribute("data-language-button") === selectedLanguage;

    button.setAttribute("aria-pressed", String(active));
  });
}

function initializeLanguage() {
  const savedLanguage = localStorage.getItem("language") || "id";

  setLanguage(savedLanguage);

  document.querySelectorAll("[data-language-button]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.getAttribute("data-language-button"));
    });
  });
}

initializeLanguage();