// Cálculo de IMC
function calcularIMC() {
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let imc = peso / (altura * altura);
    let mensaje = "";

    if (imc < 18.5) mensaje = "Bajo peso";
    else if (imc < 25) mensaje = "Normal";
    else if (imc < 30) mensaje = "Sobrepeso";
    else mensaje = "Obesidad";

    document.getElementById("resultadoIMC").innerHTML = `Tu IMC es ${imc.toFixed(2)}: ${mensaje}`;
}

// Registro de actividad física
function pedirActividades() {
    const n = parseInt(document.getElementById("numDias").value);
    const contenedor = document.getElementById("actividadesInputs");
    contenedor.innerHTML = "";

    for (let i = 0; i < n; i++) {
      const input = document.createElement("input");
      input.type = "number";
      input.placeholder = `Minutos de ejercicio día ${i + 1}`;
      input.id = `dia${i}`;
      contenedor.appendChild(input);
      contenedor.appendChild(document.createElement("br"));
    }

    const botonCalcular = document.createElement("button");
    botonCalcular.textContent = "Calcular Promedio";
    botonCalcular.onclick = calcularPromedioActividad;
    contenedor.appendChild(botonCalcular);
}

function calcularPromedioActividad() {
    const n = parseInt(document.getElementById("numDias").value);
    let suma = 0;

    for (let i = 0; i < n; i++) {
      const valor = parseFloat(document.getElementById(`dia${i}`).value);
      suma += valor;
    }

    const promedio = suma / n;
    document.getElementById("resultadoPromedioActividad").innerHTML = 
      `El promedio de actividad física es ${promedio.toFixed(2)} minutos por día`;
}

// Control de calorías
let contadorCalorias = 0;

function agregarCalorias() {
    let calorias = parseFloat(document.getElementById("calorias").value);

    while (calorias !== 0) {
      if (calorias > 2500) {
        contadorCalorias++;
      }
      document.getElementById("resultadoCalorias").innerHTML = `Días > 2500 kcal: ${contadorCalorias}`;
      break; 
    }

    if (calorias === 0) {
      document.getElementById("resultadoCalorias").innerHTML = 
        `Lectura finalizada. Total de días > 2500 kcal: ${contadorCalorias}`;
    }

    document.getElementById("calorias").value = "";
    document.getElementById("calorias").focus();
}

// Identificación de especialidad de salud
function identificarEspecialidad() {
    const codigo = parseInt(document.getElementById("codigo").value);
    let mensaje = "";

    switch(codigo) {
      case 1: mensaje = "Nutrición"; break;
      case 2: mensaje = "Psicología"; break;
      case 3: mensaje = "Medicina General"; break;
      case 4: mensaje = "Fisioterapia"; break;
      case 5: mensaje = "Enfermería"; break;
      default: mensaje = "Código no válido. Ingresa un número del 1 al 5.";
    }

    document.getElementById("resultadoEspecialidad").innerHTML = mensaje;
}

// Registro de sueño
let valoresSueno = [];

function registrarSueno() {
    let entrada = document.getElementById("horasSueno").value;

    if (entrada.toLowerCase() === "no") {
        document.getElementById("resultadoSueno").innerHTML = 
          `Registro finalizado. Horas ingresadas: ${valoresSueno.join(", ")}`;
        return;
    }

    let valor = parseFloat(entrada);

    if (!isNaN(valor)) {
        valoresSueno.push(valor);
        if (valor < 6) {
          document.getElementById("resultadoSueno").innerHTML = "Sueño insuficiente";
        } else {
          document.getElementById("resultadoSueno").innerHTML = `Horas registradas: ${valor}`;
        }
    } else {
        document.getElementById("resultadoSueno").innerHTML = "Entrada inválida. Ingresa un número o 'no'.";
    }

    document.getElementById("hor