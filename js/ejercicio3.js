const calcularVolumenEsfera = () => {
    const radio = 4; // radio en metros
    // formula: V = 4/3 * PI * r^3
    const volumen = (4 / 3) * Math.PI * Math.pow(radio, 3);
    
    console.log(`El volumen de una esfera de radio ${radio} m es de: ${volumen.toFixed(2)} m3`);
};

calcularVolumenEsfera();
