
gsap.registerPlugin(ScrollTrigger);


let tarjeta1 = document.getElementById("xp1");
let tarjeta2 = document.getElementById("xp2");
let tarjeta3 = document.getElementById("xp3");
let experienciaLab = document.getElementById("experienciaLab");
let referencia = document.getElementById("referencia");

// Timeline para la sección experienciaLab
gsap.timeline({
  scrollTrigger: {
    trigger: experienciaLab,
    start: "+=100", // Inicia cuando la parte superior de #experienciaLab toca la parte superior del viewport
    end: "+=1500", // Duración del pin, ajusta según sea necesario
    scrub: true, // Sincroniza la animación con el scroll
    pin: true, // Fija la sección mientras se ejecutan las animaciones
  }
})
.to(tarjeta1, {
  xPercent: -170,
  rotate: -45,
  duration: 3,
}, "+=2")
.to(tarjeta2, {
  xPercent: +160,
  rotate: 45,
  duration: 3,
}, "+=0.5") // Retrasa el inicio de la animación de la segunda tarjeta
