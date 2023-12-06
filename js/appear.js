window.addEventListener('scroll', reveal);

function reveal() {
  let reveals = document.querySelectorAll('.reveal');

  for(let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 150;

    if(revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
    
}

// Asegúrate de que el DOM esté completamente cargado antes de agregar el evento
document.addEventListener("DOMContentLoaded", function() {
  // Agrega el evento de reproducción de audio al hacer hover
  var linkMarcelo = document.getElementById("imgmarcelo");
  linkMarcelo.addEventListener("mouseover", playAudio);
});

// Función para reproducir el audio
function playAudio() {
  var audio = document.getElementById("audio");
  audio.play();
}