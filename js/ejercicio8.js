const notas = [4, 7, 5, 9, 3, 6, 8, 2, 10, 6];

const mostrarNotas = () => {
    console.log("Todas las notas:");
    notas.forEach(nota => console.log(nota));
};

const mostrarAprobadas = () => {
    console.log("Notas aprobadas (>=6):");
    notas.filter(nota => nota >= 6).forEach(nota => console.log(nota));
};

const mostrarDesaprobadas = () => {
    console.log("Notas desaprobadas (<6):");
    notas.filter(nota => nota < 6).forEach(nota => console.log(nota));
};

const calcularPromedio = () => {
    const suma = notas.reduce((acc, nota) => acc + nota, 0);
    return suma / notas.length;
};

const cantidadAprobadas = () => notas.filter(nota => nota >= 6).length;

mostrarNotas();
mostrarAprobadas();
mostrarDesaprobadas();
console.log(`Promedio general: ${calcularPromedio()}`);
console.log(`Cantidad de notas aprobadas: ${cantidadAprobadas()}`);