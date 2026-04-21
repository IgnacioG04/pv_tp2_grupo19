const mostrarPrimeros10Impares = () => {
    let contador = 0;
    let numero = 1;
    
    console.log(`Los primeros 10 numeros impares son:`);
    while (contador < 10) {
        console.log(`${numero}`);
        numero += 2;
        contador++;
    }
};

mostrarPrimeros10Impares();