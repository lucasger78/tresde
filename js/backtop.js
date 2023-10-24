// Muestra u oculta el botón Back to Top según la posición del scroll
window.addEventListener("scroll", function() {
    const button = document.querySelector(".back-to-top");
    button.classList.toggle("show", window.scrollY > 0);
  });
  
  // Scroll suave hacia el encabezado de la página cuando se hace click en el botón
  document.querySelector(".back-to-top").addEventListener("click", function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });