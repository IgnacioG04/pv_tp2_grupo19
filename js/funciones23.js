export const verificarLargo = (texto) => {
    return texto.length > 20;
};

export const obtenerColor = (esLargo) => {
    return esLargo ? "#ffeb3b" : "#f0f0f0";
};