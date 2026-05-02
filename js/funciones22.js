export const mostrarTexto = (input, parrafo) => {
    input.addEventListener("input", () => {
        parrafo.textContent = input.value;
    });
};