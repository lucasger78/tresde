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
