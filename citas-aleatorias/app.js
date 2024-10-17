let botonElem = document.getElementById('cambiar-cita');
let citaElem = document.getElementById('cita');
let autorElem = document.getElementById('autor');

function generarEntero(min, max) {
  return Math.floor(Math.random() * (max-min) + min);
}
function cambiaCitas() {
  let indiceAlea = generarEntero(0, citas.length);
  citaElem.innerText = `"${citas[indiceAlea].texto}"`;
  autorElem.innerText = citas[indiceAlea].autor;
}

cambiaCitas();

botonElem.addEventListener('click',cambiaCitas);