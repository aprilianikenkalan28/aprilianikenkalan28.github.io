const translations = {
  id: {
    home: "Beranda",
    about: "Tentang",
    projects: "Proyek",
    contact: "Kontak",
    aboutTitle: "Tentang Saya",
    aboutIntro: "Saya adalah mahasiswa S1 Statistika di Universitas Cenderawasih. Saya memiliki ketertarikan pada pengolahan data, analisis data, visualisasi data, dan pemrograman.",
    education: "Pendidikan",
    skillsTitle: "Bidang yang Dipelajari",
    learningGoals: "Tujuan Pembelajaran",
    learningDescription: "Saya ingin terus mengembangkan kemampuan dalam bidang statistika dan teknologi.",
    projectDescription: "Berikut beberapa proyek dan tugas yang saya kerjakan selama proses pembelajaran sebagai mahasiswa Statistika.",
    viewProject: "Lihat Proyek",
    contactTitle: "Hubungi Saya",
    contactDescription: "Saya terbuka untuk terhubung, berbagi ide, berdiskusi, serta menjajaki kesempatan belajar dan kolaborasi.",
    location: "Lokasi"
  },

  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    aboutTitle: "About Me",
    aboutIntro: "I am an undergraduate Statistics student at Cenderawasih University. I am interested in data processing, data analysis, data visualization, and programming.",
    education: "Education",
    skillsTitle: "Areas of Study",
    learningGoals: "Learning Goals",
    learningDescription: "I aim to continuously develop my skills in statistics and technology.",
    projectDescription: "Here are some projects and assignments I have completed during my learning journey as a Statistics student.",
    viewProject: "View Project",
    contactTitle: "Get in Touch",
    contactDescription: "I am open to connecting, sharing ideas, discussing, and exploring learning and collaboration opportunities.",
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

// Script berada di bagian akhir body, jadi elemen halaman sudah tersedia.
initializeLanguage();