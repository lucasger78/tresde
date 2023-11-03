// Obtén una referencia al botón "Back to Top"
const backToTopBtn = document.getElementById("backToTopBtn");

// Agrega un evento scroll a la ventana
window.addEventListener("scroll", function() {
    // Si el scroll vertical es mayor a 300px, muestra el botón, de lo contrario, ocúltalo
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
});

// Agrega un evento click al botón "Back to Top"
backToTopBtn.addEventListener("click", function() {
    // Desplaza la página hacia arriba suavemente
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

/// QUE APAREZCA EL BTN WHATSAPP CON SCROLL ////
// Obtén una referencia al elemento del botón de WhatsApp
const whatsappButton = document.querySelector('.whatsapp');

// Obtén una referencia al div con el id "about"
const aboutSection = document.querySelector('#about');

// Función para verificar si el usuario ha desplazado hasta la sección "about"
function checkScroll() {
  const scrollPosition = window.scrollY || window.pageYOffset;

  if (scrollPosition >= aboutSection.offsetTop) {
    // Si el desplazamiento es mayor o igual a la parte superior de la sección "about", muestra el botón de WhatsApp
    whatsappButton.style.display = 'block';
  } else {
    // De lo contrario, oculta el botón de WhatsApp
    whatsappButton.style.display = 'none';
  }
}

// Agrega un detector de eventos para el evento de desplazamiento (scroll)
window.addEventListener('scroll', checkScroll);

// Llama a la función inicialmente para comprobar el estado al cargar la página
checkScroll();