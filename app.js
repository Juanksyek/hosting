window.onload = function() {
    document.getElementById("mi-boton").classList.add("active");
  };

const contador = document.querySelector('.letter-style12');
const limite = 368;
let contadorActual = 0;

function actualizarContador() {
  contador.textContent = contadorActual;
  contadorActual++;

  if (contadorActual > limite) {
    clearInterval(intervalo);
    setTimeout(() => {
      contadorActual = 0;
      intervalo = setInterval(actualizarContador, 10);
    }, 10000);
  }
}
let intervalo = setInterval(actualizarContador, 100);

const progressBars = document.querySelectorAll('.progress-bar');

function animarBarraDeCarga(barra, porcentaje) {
  barra.style.width = `${porcentaje}%`;
  barra.setAttribute('aria-valuenow', porcentaje);
}

function reiniciarAnimacion(barra) {
  let porcentaje = 0;
  setInterval(() => {
    porcentaje += 10;
    animarBarraDeCarga(barra, porcentaje);
    if (porcentaje >= 100) {
      porcentaje = 0;
    }
  }, 1000);
}

// Llamar a la función reiniciarAnimacion para cada barra de progreso
progressBars.forEach((barra) => {
  animarBarraDeCarga(barra, 0);
  reiniciarAnimacion(barra);
});

// Reiniciar la animación para todas las barras cada 10 segundos
setInterval(() => {
  progressBars.forEach((barra) => {
    animarBarraDeCarga(barra, 0);
    reiniciarAnimacion(barra);
  });
}, 10000);
