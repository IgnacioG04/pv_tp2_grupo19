const ConversionSegundos = (hora,minutos) => {
    const conversionasegundos = (hora * 3600) + (minutos * 60);

    console.log (`Hora: ${hora} Minutos:${minutos} En Segundos: ${conversionasegundos}`);

};

 ConversionSegundos(5,35);