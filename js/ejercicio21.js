const relacionPaisCapital = {
    "Argentina": "Buenos Aires",
    "Brasil": "Brasilia",
    "Canadá": "Ottawa",
    "Chile": "Santiago",
    "Colombia": "Bogotá",
    "México": "Ciudad de México"
};

const selectPaises = document.getElementById('paises');
const selectCapitales = document.getElementById('capitales');

selectPaises.addEventListener('change', (evento) => {
    const paisSeleccionado = evento.target.value;
    const capitalCorrespondiente = relacionPaisCapital[paisSeleccionado];

    if (paisSeleccionado) {
        selectCapitales.value = capitalCorrespondiente;
        
        console.log(`Selección actual -> País: ${paisSeleccionado}, Capital: ${capitalCorrespondiente}`);
    } else {
        selectCapitales.value = "";
    }
});