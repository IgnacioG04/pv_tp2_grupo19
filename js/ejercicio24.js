import { formatearMensaje } from './funciones24.js';

const opciones = document.querySelectorAll('input[name="lenguaje"]');
const visor = document.querySelector('#resultado');

opciones.forEach(radio => {
    radio.addEventListener('change', () => {
        const valorSeleccionado = radio.value;
        
        visor.textContent = formatearMensaje(valorSeleccionado);
        
        console.log("Lenguaje elegido:", valorSeleccionado);
    });
});