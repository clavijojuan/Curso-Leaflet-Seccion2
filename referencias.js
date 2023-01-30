

const inputTexto = document.querySelector('#miInput');
const boton = document.querySelector('#miBoton');


console.log(inputTexto);
console.log(boton);

inputTexto.value = 'Hola clase';


boton.addEventListener('click', () => {
    const valor = 'Mi nombre es: ' + inputTexto.value;
    console.log(valor);
})