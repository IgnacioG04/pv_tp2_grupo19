const nombres = ["Alejandro", "mariaelena", "Sebastián", "Micaela", "Rodrigo", "Florencia"];

const mostrarNombres = () => {
    console.log("Nombres del array:");
    nombres.forEach(nombre => console.log(nombre));
};

const obtenerNombreMasLargo = () => {
    let nombreMasLargo = nombres[0];
    nombres.forEach(nombre => {
        if (nombre.length > nombreMasLargo.length) {
            nombreMasLargo = nombre;
        }
    });
    return nombreMasLargo;
};

mostrarNombres();
console.log(`El nombre más largo es: ${obtenerNombreMasLargo()}`);
