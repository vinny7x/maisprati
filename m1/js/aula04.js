// programa que solicite ao usuario a inserçãoo de dois valores um de cada vez e mostre a ele duas opções, 1 somar, 2 subtrair, 3 multiplicar e 4 dividir

const prompt = require('prompt-sync')();

const n1 = Number(prompt('Insira o primeiro valor:\n'))
const n2 = Number(prompt('Insira o segundo valor:\n'))

const operacao = Number(prompt('O que deseja fazer com estes números?\n1 - somar\n2 - subtrair\n3 - multiplicar\n4 - dividir\n'))

switch (operacao) {
    case 1:
        console.log(`A soma de ${n1} e ${n2} é ${
            n1 + n2
        }`)
        break
    case 2:
        console.log(`A subtração de ${n1} e ${n2} é ${
            n1 - n2
        }`)
        break
    case 3:
        console.log(`A multiplicação de ${n1} e ${n2} é ${
            n1 * n2
        }`)
        break
    case 4:
        console.log(`A divisão de ${n1} e ${n2} é ${
            n1 / n2
        }`)
        break

    default:
        console.log("Dados ou opções inválidas")
}
