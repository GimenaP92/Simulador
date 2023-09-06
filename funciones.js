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
    alert("Debe ingresar un número correcto de días: 30, 60 o 90");
    return null; 
  }

  let capitalFinal = capitalInicial * (1 + interes / 100);
  alert("En " + dias + " días usted recibirá $" + capitalFinal.toFixed(2));
  
  return { capitalInicial, dias, capitalFinal };
}

let plazosFijos = [];

let continuar = true;

while (continuar) {
  let capital = parseInt(prompt("Ingrese el monto a invertir, sin decimales"));
  let plazo = parseInt(prompt("Ingrese el tiempo de su plazo fijo en cantidad de días: 30, 60, 90"));
  let resultado = CalcularplazoFijo(capital, plazo);
  
  if (resultado) {
    plazosFijos.push(resultado);
  }
  
  let respuesta = prompt("¿Desea calcular otro plazo fijo? (si/no)");
  if (respuesta.toLowerCase() !== "si") {
    continuar = false;
  }
}

console.log("Plazos fijos:", plazosFijos);




