import { mostrarDatos } from './funciones20.js';

const inputNombre = document.querySelector('#nombre');
const inputApellido = document.querySelector('#apellido');
const inputLibreta = document.querySelector('#libreta');
const botonMostrar = document.querySelector('#botonMostrar');

botonMostrar.addEventListener('click', () => {
    const nombre = inputNombre.value;
    const apellido = inputApellido.value;
    const libreta = inputLibreta.value;
    
    mostrarDatos(nombre, apellido, libreta);
});
