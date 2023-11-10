// sweetalert

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitaque el formulario se envíe normalmente

        // validación del formulario
        const nombre = formulario.querySelector('input[name="nombre"]').value;
        const email = formulario.querySelector('input[name="email"]').value;
        const asunto = formulario.querySelector('input[name="asunto"]').value;
        const mensaje = formulario.querySelector('textarea').value;

        if (!nombre || !email || !asunto || !mensaje) {
            // Si algún campo está vacío, muestra mensaje de error
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos del formulario.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } else {
            // Si todos los campos están completados, muestra el SweetAlert
            Swal.fire({
                title: 'Enviado',
                text: 'El formulario se envió con éxito.',
                imageUrl: "logo.png",
                icon: 'success',
                confirmButtonText: 'OK'
            });
        }
    });
});
