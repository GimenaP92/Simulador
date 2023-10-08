
async function obtenerTasaDeInteres() {
    try {
        const response = await fetch('https://api.simuladorplazosfijos.com/tasas'); 
        if (!response.ok) {
            throw new Error('No se pudo obtener la tasa de interés');
        }
        const data = await response.json();
        return data[0].tasaDeInteres; 
    } catch (error) {
        console.error(error);
        return null;
    }
}
