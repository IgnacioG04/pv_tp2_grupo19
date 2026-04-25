const horas = 5;
const minutos = 35;

const ConversionSegundos = (h, m) => {
    const conversionasegundos = (h * 3600) + (m * 60);
    console.log(`Hora: ${h} Minutos: ${m} En Segundos: ${conversionasegundos}`);
};

ConversionSegundos(horas, minutos);