// funciones25.js — módulo con la lógica de colores

const colores = [
  { hex: "#e74c3c", nombre: "Rojo"        },
  { hex: "#3498db", nombre: "Azul"        },
  { hex: "#2ecc71", nombre: "Verde"       },
  { hex: "#f39c12", nombre: "Naranja"     },
  { hex: "#9b59b6", nombre: "Violeta"     },
  { hex: "#1abc9c", nombre: "Turquesa"    },
  { hex: "#e67e22", nombre: "Zanahoria"   },
  { hex: "#e91e63", nombre: "Rosa"        },
  { hex: "#00bcd4", nombre: "Cian"        },
  { hex: "#8bc34a", nombre: "Lima"        },
];

let indiceActual = -1;

/**
 * Devuelve el siguiente color de la lista (de forma cíclica).
 * @returns {{ hex: string, nombre: string }}
 */
export const obtenerSiguienteColor = () => {
  indiceActual = (indiceActual + 1) % colores.length;
  return colores[indiceActual];
};
