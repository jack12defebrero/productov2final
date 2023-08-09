//bloqueo de teclas 
//  Bloqueo de teclas Ctrl + S
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key === 's') { // Verifica si se presionó la combinación de teclas Ctrl + S
    event.preventDefault(); // Previene la acción predeterminada de la combinación de teclas
    Swal.fire({
      title: 'No se puede guardar esta página',
      icon: 'error',
      showCancelButton: false,
      confirmButtonText: 'OK',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false
    });
  }


  // Bloqueo de teclas Ctrl + U
  if (event.ctrlKey && event.key === 'u') { // Verifica si se presionó la combinación de teclas Ctrl + U
    event.preventDefault(); // Previene la acción predeterminada de la combinación de teclas
    Swal.fire({
      title: 'No se puede ver el código fuente de esta página',
      icon: 'error',
      showCancelButton: false,
      confirmButtonText: 'OK',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      confirmButtonColor: '#d33',
    });
  }
});

// Bloqueo de teclas Ctrl+Shift+P
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.shiftKey && event.key === 'P') { // Verifica si se presionó la combinación de teclas Ctrl+Shift+P
    event.preventDefault(); // Previene la acción predeterminada de la combinación de teclas (imprimir)
    Swal.fire({
      title: 'No se permite imprimir ni exportar a PDF',
      icon: 'warning',
      showCancelButton: false,
      confirmButtonText: 'OK',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      confirmButtonColor: '#d33',
    });
  }
});

// Bloqueo de teclas Ctrl+Shift+c
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.shiftKey && event.key === 'C') { // Verifica si se presionó la combinación de teclas Ctrl+Shift+P
    event.preventDefault(); // Previene la acción predeterminada de la combinación de teclas (imprimir)
    Swal.fire({
      title: 'No se permite ingresar al inspector de codigó xd ',
      icon: 'warning',
      showCancelButton: false,
      confirmButtonText: 'OK',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      confirmButtonColor: '#d33',
    });
  }
});
// Bloqueo de teclas Ctrl + P
window.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.key === 'p') { // Verifica si se presionó la combinación de teclas Ctrl + P
    event.preventDefault(); // Previene la acción predeterminada de la combinación de teclas (imprimir)
    Swal.fire({
      title: 'No se permite imprimir ni exportar a PDF',
      icon: 'warning',
      showCancelButton: false,
      confirmButtonText: 'OK',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      confirmButtonColor: '#d33',
    });
  }
});

// Bloqueo de teclas Ctrl + Shift + J
window.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.shiftKey && event.key === 'J') { // Verifica si se presionó la combinación de teclas Ctrl + Shift + J
    event.preventDefault(); // Previene la acción predeterminada de la combinación de teclas (abrir la consola del navegador)
    Swal.fire({
      title: 'No se permite acceder a la consola',
      icon: 'warning',
      showCancelButton: false,
      confirmButtonText: 'OK',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      confirmButtonColor: '#d33',
    });
  }
});


// Bloqueo de teclas Ctrl + Shift + I
document.addEventListener('keydown', function (event) {
  if (event.ctrlKey && event.shiftKey && event.key === 'I') { // Verifica si se presionó la combinación de teclas Ctrl+Shift+I
    event.preventDefault(); // Previene la acción predeterminada de la combinación de teclas
    Swal.fire({
      title: 'No se puede acceder a la consola',
      icon: 'error',
      showCancelButton: false,
      confirmButtonText: 'OK',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false,
      confirmButtonColor: '#d33',
    });
  }
});




//Bloqueo del anticlick del raton o touchpad
//document.addEventListener("contextmenu", function (event) {
 // event.preventDefault();
//  Swal.fire({
//    icon: 'warning',
 //   title: 'Oops...',
 //   text: 'El botón derecho del ratón está deshabilitado.',
//    confirmButtonColor: '#d33',
//    confirmButtonText: 'Está bien',
//    allowOutsideClick: false,
//  });
//});


// Bloquear las teclas "Ctrl + R"
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "r") {
    event.preventDefault();
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'La combinación de teclas "Ctrl + R" está deshabilitada.',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Está bien',
      allowOutsideClick: false,
      allowEscapeKey: false,
      allowEnterKey: false
    });
  }
});


//Bloqueo del ctrl + c 
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "c") {
    event.preventDefault();
    Swal.fire({
      icon: 'warning',
      title: 'Oops...',
      text: 'No se permite copiar informacion en este sitio web.',
      confirmButtonColor: '#d33',
      confirmButtonText: 'Está bien'
    });
  }
});







// ?hecho por: jack  sera ridereeccionado a mi red social
//?lo cual esto se uso como un boton en el HTML:  para 
//?el visitante si esta interezado en un sitio web lo cual se puso el 
//?El nombre del desarrollador "Mi persona"
const link = document.getElementById("By");
link.addEventListener("click", (event) => {
  event.preventDefault();
  Swal.fire({
    title: "Hola soy jack y usted sera:",
    text: "Redireccionado a la red social del desarrollador",
    icon: "success",
    backdrop: 'rgba(0,0,0,0.8)',
    confirmButtonText: "Esta bien :)",
    allowOutsideClick: false,
    showClass: {
      popup: 'animate__animated animate__fadeInDown'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp'
    },
    willClose: () => {
      Swal.showLoading();
      setTimeout(() => {
        window.open(link.href, '_blank');
      }, 800);
    }
  });
});





// boton flotante de whatsapp
document.querySelector('#whatsapp-btn').addEventListener('click', function (event) {
  event.preventDefault();
  Swal.fire({
    title: '¡Hola! Gracias por contactarnos. Para brindarte una mejor atención, te vamos a redirigir a WhatsApp para que puedas comunicarte con nuestra empresa de manera más ágil y directa. ¡Estamos listos para ayudarte!',
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Sí, con mucho gusto',
    cancelButtonText: 'Cancelar',
    backdrop: 'rgba(0,0,0,0.8)',
    preConfirm: () => {
      return new Promise((resolve) => {
        Swal.showLoading();
        setTimeout(() => {
          window.open('https://wa.link/ab5bo7');
          resolve();
        }, 2000);
      });
    },
    showClass: {
      popup: 'animate__animated animate__lightSpeedInLeft'
    },
    hideClass: {
      popup: 'animate__animated animate__fadeOutUp',
    },
    allowOutsideClick: () => !Swal.isLoading()
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire({
        showClass: {
          popup: 'animate__animated animate__jackInTheBox'
        },
        hideClass: {
          popup: 'animate__animated animate__backOutRight'
        },
        title: 'Operación cancelada',
        icon: 'error',
        timer: 2000,
        timerProgressBar: true,
        showConfirmButton: false,
        backdrop: 'rgba(234, 28, 28, 0.32)',
        allowOutsideClick: false,
      });
    }

  });
});

// validacion del formulario:  siuuuuuu 
// Selecciona el formulario por su ID
const $form = document.querySelector('#form');

// Agrega un event listener al formulario que se ejecuta cuando se dispara el evento "submit"
$form.addEventListener('submit', handleSubmit);

// Función que se ejecuta cuando el formulario es enviado
async function handleSubmit(event) {
  // Detiene la acción predeterminada del formulario (enviar y recargar la página)
  event.preventDefault();

  // Obtiene los valores de los campos del formulario
  const name = document.querySelector('#nombre').value.trim();
  const email = document.querySelector('#email').value.trim();
  const message = document.querySelector('#message1').value.trim();

  // Verifica si alguno de los campos está vacío
  if (!name || !email || !message) {
    // Si algún campo está vacío, muestra una alerta y detiene el envío del formulario
    Swal.fire({
      icon: 'error',
      title: 'Oops... todos los datos deben estar rellenados',
      text: 'Complete  los datos requeridos',
      backdrop: 'rgba(0,0,0,0.6)',
      confirmButtonText: 'esta bien :(',

      allowOutsideClick: false,
    });

    return;
  }

  // Validar que el email tenga un formato válido
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(emailFormat)) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...EL CORREO ELECTRONICO QUE INGRESO NO ES VALIDO',
      text: 'Por favor ingresa un correo electronico valido',
      backdrop: 'rgba(0,0,0,0.6)',
      confirmButtonText: 'esta bien :(',
      allowOutsideClick: false,
    });
    return;
  }

  // Crea una nueva instancia del formulario con todos los datos del formulario
  const form = new FormData(this);

  // Envía el formulario mediante una petición HTTP utilizando "fetch"
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'accept': 'application/json'
    }
  });

  // Si la respuesta de la petición es exitosa
  if (response.ok) {
    // Restablece el formulario
    this.reset();

    // Muestra una alerta de éxito personalizada utilizando SweetAlert2
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Su mensaje fue enviado correctamente, nos estaremos poniendo en contacto con ústed.',
      showConfirmButton: false,
      text: 'Modal with a custom image.',
      backdrop: 'rgba(46, 252, 5, 0.295) ',
      html: 'Esta alerta se cerrará automáticamente en estos instantes <b></b>.',
      timer: 5000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const b = Swal.getHtmlContainer().querySelector('b');
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer');
      }
    });
  }
}