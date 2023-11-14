// // sweetalert

// document.addEventListener('DOMContentLoaded', function () {
//     const formulario = document.querySelector('form');

//     formulario.addEventListener('submit', function (event) {
//         event.preventDefault(); // Evitar que el formulario se envíe normalmente

//         // Lógica de validación del formulario
//         const nombre = formulario.querySelector('input[placeholder="Nombre"]').value;
//         const email = formulario.querySelector('input[placeholder="E-mail"]').value;
//         const asunto = formulario.querySelector('input[placeholder="Asunto"]').value;
//         const mensaje = formulario.querySelector('textarea').value;

//         if (!nombre || !email || !asunto || !mensaje) {
//             // Si algún campo está vacío, muestra un mensaje de error
//             Swal.fire({
//                 title: 'Error',
//                 text: 'Por favor, completa todos los campos del formulario.',
//                 icon: 'error',
//                 confirmButtonText: 'OK'
//             });
//         } else {
//             // Si todos los campos están completados, muestra el SweetAlert
//             Swal.fire({
//                 title: 'Enviado',
//                 text: 'El formulario ha sido enviado con éxito.',
//                 imageUrl: "logo.png",
//                 icon: 'success',
//                 confirmButtonText: 'OK'
//             }).then(() => {
//                 // Envía el formulario después de mostrar SweetAlert
//                 formulario.submit();
//             });
//         }
//     });
// });


////////////// PRUEBA ////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.querySelector('form');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe normalmente

        // Lógica de validación del formulario
        const nombre = formulario.querySelector('input[placeholder="Nombre"]').value;
        const email = formulario.querySelector('input[placeholder="E-mail"]').value;
        const asunto = formulario.querySelector('input[placeholder="Asunto"]').value;
        const mensaje = formulario.querySelector('textarea').value;

        if (!nombre || !email || !asunto || !mensaje) {
            // Si algún campo está vacío, muestra un mensaje de error
            Swal.fire({
                title: 'Error',
                text: 'Por favor, completa todos los campos del formulario.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        } else {
            // Envía el formulario utilizando la API Fetch
            fetch(formulario.action, {
                method: formulario.method,
                body: new FormData(formulario)
            })
            .then(response => {
                if (response.ok) {
                    // Si el formulario se envía con éxito, reinicia el formulario y luego muestra el SweetAlert
                    formulario.reset();
                    Swal.fire({
                        title: '¡Enviado!',
                        text: 'Gracias por tu mensaje.',                                                
                        imageUrl: "logo2.png",
                        icon: 'success',
                        confirmButtonText: 'OK',
                        confirmButtonColor: '#3a3a3a',
                        customClass: {                            
                            content: 'swal2-text',
                            confirmButton: 'swal2-text2'  
                        }
                    })
                    .then(() => {
                        // Después de hacer clic en OK, recarga la página
                        window.location.reload();
                    });
                } else {
                    // Si hay un error en el envío, muestra un mensaje de error
                    Swal.fire({
                        title: 'Error',
                        text: 'Hubo un problema al enviar el formulario. Inténtalo de nuevo más tarde.',
                        icon: 'error',
                        confirmButtonText: 'OK'
                    });
                }
            })
            .catch(error => {
                console.error('Error en la solicitud fetch:', error);
            });
        }
    });
});





