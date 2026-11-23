const translations = {
  id: {
    home: "Beranda",
    about: "Tentang",
    projects: "Proyek",
    contact: "Kontak",
    aboutTitle: "Tentang Saya",
    aboutIntro: "Saya adalah mahasiswa S1 Statistika di Universitas Cenderawasih. Saya memiliki ketertarikan pada pengolahan data, analisis data, visualisasi data, dan pemrograman. Saat ini, saya sedang mengembangkan pengetahuan dan keterampilan melalui pembelajaran akademik serta praktik secara mandiri.",
    education: "Pendidikan",
    skillsTitle: "Bidang yang Dipelajari",
    learningGoals: "Tujuan Pembelajaran",
    learningDescription: "Saya ingin terus mengembangkan kemampuan dalam bidang statistika dan teknologi, khususnya dalam memahami, mengolah, menganalisis, serta menyajikan data sebagai informasi yang bermanfaat.",
    projectDescription: "Berikut beberapa proyek dan tugas yang saya kerjakan selama proses pembelajaran sebagai mahasiswa Statistika.",
    viewProject: "Lihat Proyek",
    contactTitle: "Hubungi Saya",
    contactDescription: "Saya terbuka untuk terhubung, berbagi ide, berdiskusi, serta menjajaki kesempatan belajar dan kolaborasi. Silakan menghubungi saya melalui platform berikut.",
    location: "Lokasi"
  },

  en: {
    home: "Home",
    about: "About",
    projects: "Projects",
    contact: "Contact",
    aboutTitle: "About Me",
    aboutIntro: "I am an undergraduate Statistics student at Cenderawasih University. I am interested in data processing, data analysis, data visualization, and programming. I am currently developing my knowledge and skills through academic learning and independent practice.",
    education: "Education",
    skillsTitle: "Areas of Study",
    learningGoals: "Learning Goals",
    learningDescription: "I aim to continuously develop my skills in statistics and technology, particularly in understanding, processing, analyzing, and presenting data as useful information.",
    projectDescription: "Here are some projects and assignments I have completed during my learning journey as a Statistics student.",
    viewProject: "View Project",
    contactTitle: "Get in Touch",
    contactDescription: "I am open to connecting, sharing ideas, discussing, and exploring learning and collaboration opportunities. Feel free to contact me through the platforms below.",
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

    if (translatedText) {
      element.textContent = translatedText;
    }
  });

  document.querySelectorAll("[data-language-button]").forEach((button) => {
    button.setAttribute(
      "aria-pressed",
      button.getAttribute("data-language-button") === selectedLanguage
        ? "true"
        : "false"
    );
  });
}

function initializeLanguage() {
  const savedLanguage = localStorage.getItem("language") || "id";
  setLanguage(savedLanguage);
}

document.addEventListener("DOMContentLoaded", initializeLanguage);

document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-language-button]");

  if (button) {
    setLanguage(button.getAttribute("data-language-button"));
  }
});
