document.addEventListener("DOMContentLoaded", () => {
    // Seleccionamos todos los elementos que queremos animar
    const elementsToAnimate = document.querySelectorAll('.feature-section, .menu-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Si el elemento está en la pantalla (intersecting)
            if (entry.isIntersecting) {
                // Le añadimos la clase 'visible' para que se muestre
                entry.target.classList.add('visible');
                // Dejamos de observar el elemento para que la animación no se repita
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // La animación se dispara cuando el 10% del elemento es visible
    });

    // Le decimos al observador que vigile cada uno de los elementos
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});

// --- Lógica para resaltar el enlace de la página activa ---
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('nav a.nav-button');
    // Obtiene la URL completa de la página actual
    const currentUrl = window.location.href;

    navLinks.forEach(link => {
        // Si la URL del enlace coincide exactamente con la URL actual, se marca como activo
        if (link.href === currentUrl) {
            link.classList.add('active');
        }
        // Caso especial para el botón "Inicio" en la página principal, que puede no tener "index.html" en la URL
        if (link.href.endsWith('index.html') && (window.location.pathname === '/' || window.location.pathname === '/index.html')) {
            document.querySelector('a[href$="index.html"]').classList.add('active');
        }
    });
});