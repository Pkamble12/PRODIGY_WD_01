const navbar = document.getElementById('navbar');
const toggleBtn = document.getElementById('toggleBtn');
const navMenu = document.getElementById('navMenu');

// Add scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Toggle menu for small screens
toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
