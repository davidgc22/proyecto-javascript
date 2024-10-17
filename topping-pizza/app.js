/*const lista =document.getElementById('lista-toppings');

const toppingNuevo = document.createElement('li');
toppingNuevo.classList.add('topping','fondo-marron');
toppingNuevo.innerText = 'Queso babas';

lista.append(toppingNuevo);

toppingNuevo.remove();*/
//recorer elementoss
/*const listaToppings = document.getElementById('lista-toppings');

console.log(listaToppings.parentElement);

function mostrarClic(){
    console.log('Clic');
    
}*/
const albahaca = document.getElementById('albahaca');
function mostrarClic(topping){
    console.log(topping);  
}

albahaca.addEventListener('click', mostrarClic);