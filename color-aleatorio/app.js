//elementos de DOM
const boton = document.querySelector('button');
const color = document.getElementById('color');

function genColValHex (){
    let digitos ='0123456789ABCDEF';
    let colorHex = '#';
    for (let i = 0; i < 6; i++) {
        let indiceAlea = Math.floor(Math.random() * 16);
        console.log(indiceAlea);
        
        colorHex += digitos[indiceAlea];        
    }
    return colorHex;
}
boton.addEventListener('click', function () {
    let colorAleatorio = genColValHex();
     //actualiza el text
    color.textContent = colorAleatorio;
    // actualiza el color de fondo
    document.body.style.backgroundColor = colorAleatorio;
});