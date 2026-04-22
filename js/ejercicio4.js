const CalcularRectangulo = (base, altura) => {
    const area = base * altura;
    const perimetro = 2 * ( base * altura);
    
    console.log(`El area es: ${area} cm`);
    console.log(`El perimetro es: ${perimetro} cm`);

};

CalcularRectangulo(10,5);