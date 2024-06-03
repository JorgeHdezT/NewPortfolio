window.addEventListener('scroll', reveal);

function reveal() {
  let reveals = document.querySelectorAll('.reveal');

  for(let i = 0; i < reveals.length; i++) {
    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 0;

    if(revealtop < windowheight - revealpoint) {
      reveals[i].classList.add('active');
    }
    else {
      reveals[i].classList.remove('active');
    }
  }
    
}

document.addEventListener('DOMContentLoaded', function () {
  const cards = document.querySelectorAll('#ContenedorProyectos .card');

  cards.forEach(card => {
    card.addEventListener('mouseover', () => {
      cards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.add('blur');
        }
      });
    });

    card.addEventListener('mouseout', () => {
      cards.forEach(otherCard => {
        otherCard.classList.remove('blur');
      });
    });
  });
});



document.addEventListener('DOMContentLoaded', function () {
  const xpcards = document.querySelectorAll('#referencia .xpcard');

  xpcards.forEach(card => {
    card.addEventListener('mouseover', () => {
      xpcards.forEach(otherCard => {
        if (otherCard !== card) {
          otherCard.classList.add('blur');
        }
      });
    });

    card.addEventListener('mouseout', () => {
      xpcards.forEach(otherCard => {
        otherCard.classList.remove('blur');
      });
    });
  });
});

