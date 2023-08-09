function initMap() {

    var macc = {lat: 42.1382114, lng: -71.5212585};

    var map = new google.maps.Map(

        document.getElementById('map'), {zoom: 15, center: macc});

    var marker = new google.maps.Marker({position: macc, map: map});

  }





// Verificar si se ha dado el consentimiento
if (localStorage.getItem('cookieConsent') === 'true') {
  // Si ya se ha dado el consentimiento, mostrar el mensaje de bienvenida si aún no se ha mostrado
  if (!localStorage.getItem('welcomeShown')) {
    showWelcomeMessage();
    localStorage.setItem('welcomeShown', 'true');
  }
} else {
  // Si aún no se ha dado el consentimiento, mostrar el mensaje de consentimiento
  showConsentMessage();
}



function showConsentMessage() {
  Swal.fire({
    title: 'Este sitio web utiliza cookies',
    html: 'Utilizamos cookies para mejorar su experiencia en el sitio web. <b>Se utiliza los cookies para el cambio de tema de light y dark y demas funcionalidades<b>.',
    icon: 'info',
    showCancelButton: true,
    confirmButtonText: 'Aceptar',
    cancelButtonText: 'Rechazar',
    confirmButtonColor: '#716add',
    cancelButtonColor: '#d33',
    allowOutsideClick: false,
  }).then((result) => {
    if (result.isConfirmed) {
      // Si el usuario acepta, almacenar el consentimiento en localStorage y mostrar el mensaje de agradecimiento
      localStorage.setItem('cookieConsent', 'true');
      showThanksMessage();
    } else {
      // Si el usuario rechaza, mostrar un mensaje de advertencia y no almacenar el consentimiento
      Swal.fire({
        title: 'Advertencia',
        text: 'Algunas funcionalidades del sitio web pueden verse afectadas si no se utilizan cookies. Si cambias de opinión, puedes habilitar las cookies en cualquier momento en la configuración de tu navegador.',
        icon: 'warning',
        allowOutsideClick: false
      });
    }
  });
}

function showThanksMessage() {
  Swal.fire({
    title: '¡Gracias por aceptar el uso de cookies!',
    text: 'A partir de ahora, podrás disfrutar de una experiencia personalizada en nuestro sitio web.',
    icon: 'success',
    allowOutsideClick: false
  }).then(() => {
    // Después de mostrar el mensaje de agradecimiento, mostrar el mensaje de bienvenida si aún no se ha mostrado
    if (!localStorage.getItem('welcomeShown')) {
      showWelcomeMessage();
      localStorage.setItem('welcomeShown', 'true');
    }
  });
}

function showWelcomeMessage() {
  Swal.fire({
    title: 'Bienvenido al sitio web de COINÑA donde podrás encontrar múltiples servicios que ofrecemos!',
    text:'Esta alerta solo observara una vez, gracias',
    width: 600,
    padding: '3em',
    color: '#716add',
    background: '#fff url(/images/trees.png)',
    backdrop: `rgba(0, 0, 0, 0.690)`,
    allowOutsideClick: false
  });
}







