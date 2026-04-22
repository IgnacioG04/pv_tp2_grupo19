const Edades = () => {
    const GrupoEdades = [12,14,15,19,24,25,27,30];
    let suma = 0;

    console.log (`Edades: ${GrupoEdades.join()}`);

    GrupoEdades.forEach(edad =>{
        suma+=edad;
    })

    const promedio = suma / GrupoEdades.length;
    console.log (`El promedio de edades es : ${promedio.toFixed(2)}`);
};

Edades();