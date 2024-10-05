
const allMenuToggle = document.querySelector('.all');
const optionsPanel = document.querySelector('.option');

allMenuToggle.addEventListener('click', () => {
    optionsPanel.classList.toggle('show-menu');
});


const searchInput = document.querySelector('.search-input');
const searchButton = document.querySelector('.search-icon');

searchButton.addEventListener('click', () => {
    const query = searchInput.value;
    if (query) {
        alert(`Searching for "${query}" on Amazon`);
        
    } else {
        alert("Please enter a search query!");
    }
});


const backToTopButton = document.querySelector('.foot-panel1 a');

backToTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
