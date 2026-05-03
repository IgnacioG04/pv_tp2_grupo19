import { verificarLargo, obtenerColor } from './funciones23.js';

const inputElement = document.querySelector('#textoUsuario');
const visorElement = document.querySelector('#visorTexto');

inputElement.addEventListener('input', () => {
    const contenido = inputElement.value; 

    // Actualizamos el texto en tiempo real
    visorElement.textContent = contenido || "Esperando entrada...";

    // Aplicamos la lógica de cambio de color
    const esLargo = verificarLargo(contenido);
    visorElement.style.backgroundColor = obtenerColor(esLargo);
});