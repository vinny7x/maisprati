const prompt = require('prompt-sync')();
const horas = Number(prompt("Informe quantas horas o veículo ficou estacionado: "));
let valor = 0;

switch (true) {
    case horas === 1:
        valor = 8;
        break;
    case horas === 2:
        valor = 8 + 6;
        break;
    case horas === 3:
        valor = 8 + 6 + 4;
        break;
    case horas > 3:
        valor = 12 + ((horas - 3) * 2);
        break;
    default:
        console.log("Tempo inválido");
}

console.log(`Horas no estacionamento: ${horas} horas\nValor total: ${valor.toFixed(2)}`);