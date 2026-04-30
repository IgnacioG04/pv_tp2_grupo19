// ejercicio25.js — módulo principal, maneja el evento click//

import { obtenerSiguienteColor } from "./funciones25.js";

const btn          = document.getElementById("btnColor");
const colorActual  = document.getElementById("colorActual");

const cambiarColor = () => {
  const { hex, nombre } = obtenerSiguienteColor();

  document.body.style.backgroundColor = hex;
  colorActual.textContent = `Color actual: ${nombre} (${hex})`;

  console.log(`🎨 Color cambiado a: ${nombre} — ${hex}`);
};

btn.addEventListener("click", cambiarColor);
