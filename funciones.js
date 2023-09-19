let plazosFijos = [];

function CalcularplazoFijo(capitalInicial, dias) {
    let tasaDeInteres = 9.83;
    let interes;

    if (dias === 30) {
        interes = tasaDeInteres;
    } else if (dias === 60) {
        interes = tasaDeInteres * 1.25;
    } else if (dias === 90) {
        interes = tasaDeInteres * 1.50;
    } else {
        return null;
    }

    let capitalFinal = capitalInicial * (1 + interes / 100);
    return { capitalInicial, dias, capitalFinal };
}

document.getElementById("calcular").addEventListener("click", function () {
    const capital = parseInt(document.getElementById("capital").value);
    const plazo = parseInt(document.getElementById("plazo").value);
    const resultado = CalcularplazoFijo(capital, plazo);

    if (resultado) {
        plazosFijos.push(resultado);
        mostrarResultados();
    } else {
        alert("Debe ingresar un número correcto de días: 30, 60 o 90");
    }
});

function mostrarResultados() {
    const resultadosTable = document.querySelector("#resultado table tbody");
    resultadosTable.innerHTML = "";

    plazosFijos.forEach((plazo) => {
        const row = resultadosTable.insertRow();
        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.innerText = `$${plazo.capitalInicial}`;
        cell2.innerText = `${plazo.dias} días`;
        cell3.innerText = `$${plazo.capitalFinal.toFixed(2)}`;
    });

    document.getElementById("resultado").classList.remove("hidden");
}



