import { cambiarTexto } from './funciones19.js';

const boton = document.querySelector('#botonCambiar');
const parrafo = document.querySelector('#parrafo');

boton.addEventListener('click', () => {
    cambiarTexto(parrafo);
});
