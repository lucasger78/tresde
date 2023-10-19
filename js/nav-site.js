document.addEventListener('scroll', function() {
    const siteNav = document.querySelector('.site-nav');
    const aboutSection = document.getElementById('about');
    //const logoMenu = document.querySelector('.logo-menu');

    const rect = aboutSection.getBoundingClientRect();
    const scrollPosition = window.scrollY;

    if (rect.top <= 0) {
        siteNav.style.backgroundColor = 'rgba(55, 58, 61, 0.4)'; // Cambia el fondo de la barra de navegación a gris oscuro
        siteNav.style.color = '#ccc'; // Cambia el color del texto a gris claro
       // logoMenu.src = 'images/hero-logo_b.png'; // Cambia la imagen del logo
    } else {
        siteNav.style.backgroundColor = 'transparent'; // Restaura el fondo transparente
        siteNav.style.color = 'rgba(255, 255, 255, 0.7)'; // Restaura el color del texto a blanco semitransparente
        //logoMenu.src = 'images/hero-logo.png'; // Restaura la imagen original del logo
    }
});
