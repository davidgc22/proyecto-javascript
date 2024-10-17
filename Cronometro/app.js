const cronometro = document.getElementById('cronometro');
const botonIniPau = document.getElementById('boton-inicio-pausa');
const botonReiniciar = document.getElementById('boton-reiniciar');

let[hora, minutos, segundos] = [0, 0, 0];

let intervalo;
let estadoCronometro = 'pausado';

function actulizarCronometro(){
  segundos++;

  if (segundos/60 === 1) {
    segundos = 0;
    minutos++;    
  
    if (minutos/60 === 1) {
      minutos = 0;
      hora++;    
    }
  }
  const segundosForm = asignarForm(segundos);
  const minutosForm = asignarForm(minutos);
  const horaForm = asignarForm(hora);

  cronometro.innerText = `${horaForm}:${minutosForm}:${segundosForm}`

}

function asignarForm(unidadTiempo) {
  return unidadTiempo < 10 ? '0'+ unidadTiempo: unidadTiempo;
}

botonIniPau.addEventListener('click',function () {
  if (estadoCronometro === 'pausado') {
    intervalo = window.setInterval(actulizarCronometro, 1000);
    botonIniPau.innerHTML = '<i class="bi bi-pause-fill"></i>';
    botonIniPau.classList.remove('iniciar');
    botonIniPau.classList.add('pausar');
    estadoCronometro = 'andando'; 
  }else{
    window.clearInterval(intervalo);
    botonIniPau.innerHTML = '<i class="bi bi-play-fill"></i>';
    botonIniPau.classList.remove('pausar');
    botonIniPau.classList.add('iniciar');
    estadoCronometro = 'pausado';
  }
});

botonReiniciar.addEventListener('click', function () {
  window.clearInterval(intervalo);
  
  hora = 0;
  minutos = 0;
  segundos = 0;

  cronometro.innerText = '00:00:00';

  botonIniPau.innerHTML = '<i class="bi bi-play-fill"></i>';
  botonIniPau.classList.remove('pausar');
  botonIniPau.classList.add('iniciar');
  
  estadoCronometro = 'pausado';
  
})