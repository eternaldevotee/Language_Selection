// Dropdown functionality
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');
const contentText = document.getElementById('content-text');

// Language content mapping
const languageContent = {
    en: "Welcome to the language selector demo!",
    fr: "Bienvenue dans la démonstration du sélecteur de langue!",
    es: "¡Bienvenido a la demostración del selector de idiomas!",
    de: "Willkommen zur Demo des Sprachselectors!",
    hi: "भाषा चयनकर्ता डेमो में आपका स्वागत है!"
};

// Toggle dropdown menu visibility
dropdownBtn.addEventListener('click', () => {
    dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
});

// Change content based on selected language
dropdownMenu.addEventListener('click', (event) => {
    const selectedLang = event.target.getAttribute('data-lang');
    if (selectedLang && languageContent[selectedLang]) {
        contentText.textContent = languageContent[selectedLang];
        dropdownMenu.style.display = 'none';
    }
});
