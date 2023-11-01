document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section'); // Obtén todas las secciones
    const navItems = document.querySelectorAll('.site-menu li a'); // Obtén todos los elementos del menú

    function setActiveNavItem() {
        let scrollPosition = window.scrollY;

        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - 50;
            const sectionBottom = sectionTop + section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                // Quita la clase 'active' de todos los elementos del menú
                navItems.forEach(item => item.classList.remove('active'));
                // Agrega la clase 'active' al elemento del menú correspondiente a la sección actual
                navItems[index].classList.add('active');
            }
        });
    }

    // Llama a la función para establecer el elemento activo al cargar la página
    setActiveNavItem();

    // Llama a la función cuando se desplaza la página
    window.addEventListener('scroll', setActiveNavItem);
});
