const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Scroll behavior
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Hamburger toggle
hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});
