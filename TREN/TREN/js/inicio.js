// Clase activa en el menú
const currentPage = window.location.pathname.split('/').pop() || 'inicio.html';
document.querySelectorAll('.menu-nav a').forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Manejo del scroll
function handleScroll() {
    const nav = document.querySelector('nav');
    const body = document.body;
    const scrolled = window.scrollY > 50;

    nav.classList.toggle('solid', scrolled);
    nav.classList.toggle('transparent', !scrolled);
    body.classList.toggle('scrolled', scrolled);
}

// Eventos
window.addEventListener('scroll', handleScroll);

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', handleScroll);


