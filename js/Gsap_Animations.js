
gsap.registerPlugin(ScrollTrigger);

let tarjeta1 = document.getElementById("xp1");
let tarjeta2 = document.getElementById("xp2");
let tarjeta3 = document.getElementById("xp3");
let experienciaLab = document.getElementById("experienciaLab");

gsap.timeline({
  scrollTrigger: {
    trigger: experienciaLab,
    start: "top top", // Inicia cuando la parte superior de #experienciaLab toca la parte superior del viewport
    end: "+=500", // Duración del pin, ajusta según sea necesario
    scrub: true, // Sincroniza la animación con el scroll
    pin: true, // Fija la sección mientras se ejecutan las animaciones
    markers: true // Opcional: para depuración, muestra los marcadores en la página
  }
})
  .to(tarjeta1, {
    xPercent: -150,
    duration: 1,
  })
  .to(tarjeta2, {
    xPercent: -150,
    duration: 1,
  }, "+=0.5") // Retrasa el inicio de la animación de la segunda tarjeta
  .to(tarjeta3, {
    xPercent: -150,
    duration: 1,
  }, "+=0.5"); // Retrasa el inicio de la animación de la tercera tarjeta
