const btnDropdown = document.querySelector("button[data-bs-toggle='dropdown']");
const btnMonedaColones = document.querySelector("#moneda-a-colones"); // cambiar texto de este boton
const btnColonesMoneda = document.getElementById("colones-a-moneda"); // cambiar texto de este boton

const inputValorMoneda = document.getElementById("valor-moneda");
const inputValorColones = document.getElementById("valor-colones");

const liEUR = document.getElementById("eur");
const liUSD = document.getElementById("usd");
const liQTZ = document.getElementById("quetzal");
const liMXN = document.getElementById("pesos");
const liHNL = document.getElementById("lempira");

const TIPO_CAMBIO_DOLAR_COLONES = 514.26;
const TIPO_CAMBIO_EURO_COLONES = 558.70;
const TIPO_CAMBIO_QUETZAL_COLONES = 0.0017; // 1 Colón = 0.0017 Quetzal
const TIPO_CAMBIO_PESOS_COLONES = 0.0295;   // 1 Colón = 0.0295 Pesos Mexicanos
const TIPO_CAMBIO_LEMPIRA_COLONES = 0.042;  // 1 Colón = 0.042 Lempiras

let monedaSeleccionada = 'USD';

liEUR.addEventListener('click', () => {
    btnDropdown.innerText = 'Euro';
    btnMonedaColones.innerText = 'Euros a colones';
    btnColonesMoneda.innerText = 'Colones a euros';
    monedaSeleccionada = 'EUR';
});

liUSD.addEventListener('click', () => {
    btnDropdown.innerText = 'Dólar';
    btnMonedaColones.innerText = 'Dólares a colones';
    btnColonesMoneda.innerText = 'Colones a dólares';
    monedaSeleccionada = 'USD';
});

liQTZ.addEventListener('click', () => {
    btnDropdown.innerText = 'Quetzal';
    btnMonedaColones.innerText = 'Quetzales a colones';
    btnColonesMoneda.innerText = 'Colones a quetzales';
    monedaSeleccionada = 'QTZ';
});

liMXN.addEventListener('click', () => {
    btnDropdown.innerText = 'Pesos Mexicanos';
    btnMonedaColones.innerText = 'Pesos a colones';
    btnColonesMoneda.innerText = 'Colones a pesos';
    monedaSeleccionada = 'MXN';
});

liHNL.addEventListener('click', () => {
    btnDropdown.innerText = 'Lempira';
    btnMonedaColones.innerText = 'Lempiras a colones';
    btnColonesMoneda.innerText = 'Colones a lempiras';
    monedaSeleccionada = 'HNL';
});

// Convertir de moneda seleccionada a colones
btnMonedaColones.addEventListener('click', () => {
    const valorMoneda = inputValorMoneda.value;

    if (valorMoneda.length === 0 || parseFloat(valorMoneda) < 0) {
        alert('El valor no es correcto');
        return;
    }

    const valorMonedaParseado = parseFloat(valorMoneda);
    let result = 0;

    switch (monedaSeleccionada) {
        case 'USD':
            result = valorMonedaParseado * TIPO_CAMBIO_DOLAR_COLONES;
            break;
        case 'EUR':
            result = valorMonedaParseado * TIPO_CAMBIO_EURO_COLONES;
            break;
        case 'QTZ':
            result = valorMonedaParseado * TIPO_CAMBIO_QUETZAL_COLONES;
            break;
        case 'MXN':
            result = valorMonedaParseado * TIPO_CAMBIO_PESOS_COLONES;
            break;
        case 'HNL':
            result = valorMonedaParseado * TIPO_CAMBIO_LEMPIRA_COLONES;
            break;
        default:
            console.error('Moneda no controlada');
            break;
    }

    inputValorColones.value = result.toFixed(2);
});

// Convertir de colones a moneda seleccionada
btnColonesMoneda.addEventListener('click', () => {
    const colonesValor = inputValorColones.value;

    if (colonesValor.length === 0 || parseFloat(colonesValor) < 0) {
        alert('El valor no es correcto');
        return;
    }

    const valorColonesParseado = parseFloat(colonesValor);
    let result = 0;

    switch (monedaSeleccionada) {
        case 'USD':
            result = valorColonesParseado / TIPO_CAMBIO_DOLAR_COLONES;
            break;
        case 'EUR':
            result = valorColonesParseado / TIPO_CAMBIO_EURO_COLONES;
            break;
        case 'QTZ':
            result = valorColonesParseado / TIPO_CAMBIO_QUETZAL_COLONES;
            break;
        case 'MXN':
            result = valorColonesParseado / TIPO_CAMBIO_PESOS_COLONES;
            break;
        case 'HNL':
            result = valorColonesParseado / TIPO_CAMBIO_LEMPIRA_COLONES;
            break;
        default:
            console.error('Moneda no controlada');
            break;
    }

    inputValorMoneda.value = result.toFixed(2);
});
