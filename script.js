// Select the navbar
const navbar = document.getElementById('navbar');

// Add an event listener for scroll events
window.addEventListener('scroll', () => {
    // Check if the page has been scrolled more than 50px
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});
