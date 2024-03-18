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

// //CAPTCHA

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('form');

//     form.addEventListener('submit', function (event) {
//         event.preventDefault();

//         // Verificar el estado de reCAPTCHA
//         const recaptchaCheckbox = document.querySelector('.g-recaptcha');
//         if (grecaptcha.getResponse() === '') {
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: 'Por favor, marca la casilla "No soy un robot" antes de enviar el formulario.',
//                 confirmButtonText: 'OK',
//             });
//             return; // Detener el envío si el reCAPTCHA no está marcado
//         }
//     });
// });

// ///////SWEETALERT///////////////////////////
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

// script.js

// script.js

// document.addEventListener('DOMContentLoaded', function () {
//     const form = document.querySelector('form');

//     form.addEventListener('submit', async function (event) {
//         event.preventDefault();

//         // Verificar el estado de reCAPTCHA
//         const recaptchaCheckbox = document.querySelector('.g-recaptcha');

//         if (!recaptchaCheckbox || typeof grecaptcha === 'undefined') {
//             console.error('reCAPTCHA no está cargado correctamente.');
//             return;
//         }

//         try {
//             // Intenta obtener la respuesta de reCAPTCHA
//             const recaptchaResponse = await grecaptcha.execute('6Leo4lIpAAAAAEoDCFgBkJBCgI6lJxldAGA54I43', { action: 'submit' });

//             if (!recaptchaResponse) {
//                 throw new Error('Respuesta de reCAPTCHA vacía');
//             }

//             // Lógica de validación del formulario
//             const nombre = form.querySelector('input[name="nombre"]').value;
//             const email = form.querySelector('input[name="email"]').value;
//             const asunto = form.querySelector('input[name="asunto"]').value;
//             const mensaje = form.querySelector('textarea[name="mensaje"]').value;

//             if (!nombre || !email || !asunto || !mensaje) {
//                 throw new Error('Completa todos los campos del formulario.');
//             }

//             // Envía el formulario utilizando la API Fetch
//             const response = await fetch(form.action, {
//                 method: form.method,
//                 body: new FormData(form),
//             });

//             if (!response.ok) {
//                 throw new Error('Hubo un problema al enviar el formulario. Inténtalo de nuevo más tarde.');
//             }

//             // Si el formulario se envía con éxito, muestra el SweetAlert
//             Swal.fire({
//                 title: '¡Enviado!',
//                 text: 'Gracias por tu mensaje.',
//                 imageUrl: "logo2.png",
//                 icon: 'success',
//                 confirmButtonText: 'OK',
//                 confirmButtonColor: '#3a3a3a',
//                 customClass: {
//                     content: 'swal2-text',
//                     confirmButton: 'swal2-text2'
//                 }
//             }).then(() => {
//                 // Después de hacer clic en OK, recarga la página
//                 window.location.reload();
//             });

//         } catch (error) {
//             console.error(error);

//             // Muestra un SweetAlert de error
//             Swal.fire({
//                 icon: 'error',
//                 title: 'Error',
//                 text: error.message || 'Hubo un problema. Por favor, intenta de nuevo.',
//                 confirmButtonText: 'OK',
//             });
//         }
//     });
// });












