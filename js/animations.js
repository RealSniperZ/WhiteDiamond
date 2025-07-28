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