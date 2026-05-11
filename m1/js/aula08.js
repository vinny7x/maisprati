/**
 * algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o valor correspondente em graus Fahrenheit
 */

const prompt = require("prompt-sync")();

let celsius = Number(prompt("Insira a temperatura em Celcius: "));
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(`${celsius}°C = ${fahrenheit}°F`);

/**
 * Escreva um algoritmo para ler o número de eleitores de um município, o número de
votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
em relação ao total de eleitores.
 */

let totalEleitores = Number(prompt("Informe o número total de eleitores do município: "));
let votosBrancos = Number(prompt("Informe o número total de votos em branco: "));
let votosNulos = Number(prompt("Informe o número total de votos nulos: "));
let votosValidos = Number(prompt("Informe o número total de votos válidos: "));

let totalVotos = votosBrancos + votosNulos + votosValidos;
let abstencoes = totalEleitores - totalVotos;

let percentualBrancos = (votosBrancos / totalEleitores) * 100;
let percentualNulos = (votosNulos / totalEleitores) * 100;
let percentualValidos = (votosValidos / totalEleitores) * 100;
let percentualAbstencoes = (abstencoes / totalEleitores) * 100;

console.log("===== Resultado da Eleição =====");
console.log("Total de eleitores: " + totalEleitores);
console.log("--------------------");
console.log("Votos válidos : " + votosValidos + " → " + percentualValidos, "%");
console.log("Votos brancos: " + votosBrancos + " → " + percentualBrancos, "%");
console.log("Votos nulos: " + votosNulos + " → " + percentualNulos, "%");
console.log("abstenções: " + abstencoes + " → " + percentualAbstencoes, "%");

/**
 * algoritmo que gere numeros de 1000 a 1999 e escreva aqueles que, divididos por 11, dão resultado igual a 5
 */

for (i = 1000; i <= 1999; i++) {
    if (i % 11 === 5) {
        console.log(i);
    }
}

/**
 * Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
 */
const prompt = require("prompt-sync")();

const fumadosPorDia = Number(prompt("Informe o número de cigarros fumados por dia: "));
const anosFumando = Number(prompt("Informe a quantos anos você fuma: "));

let diasFumando = anosFumando * 365;
let totalCigarros = fumadosPorDia * diasFumando;
let minutosPerdidos = totalCigarros * 10;
let horasPerdidas = minutosPerdidos / 60;
let diasPerdidos = horasPerdidas / 24;
let anosPerdidos = diasPerdidos / 365;

console.log("===============================");
console.log("   REDUÇÃO DO TEMPO DE VIDA    ");
console.log("===============================");
console.log("cigarros por dia: ", fumadosPorDia);
console.log("Anos fumando: ", anosFumando);
console.log("Dias fumando: ", diasFumando);
console.log("------------");
console.log("Total de cigarros: ", totalCigarros);
console.log("Minutos perdidos: ", minutosPerdidos);
console.log("Horas perdidos: ", horasPerdidas.toFixed(2));
console.log("Dias perdidos: ", diasFumando.toFixed(2));
console.log("Anos perdidos: ", anosPerdidos.toFixed(2));

/**
 * As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
compradas, calcule e escreva o valor total da compra.
 */
const prompt = require("prompt-sync")();

const macas = Number(prompt("Insira a quantiadde de maças: "));
let valor = macas < 12 ? macas * 0.30 : macas * 0.25;
console.log(`${macas} maçãs custam R$ ${valor.toFixed(2)}`);

/**
 * Escreva um algoritmo para ler dois valores (considere que não serão lidos valores iguais) e escre-los em ordem crescente
 */
let n1 = Number(prompt("Insira o número 1: "));
let n2 = Number(prompt("Insira o número 2: "));

if (n1 === n2) {
    console.log("Os dois números não podem ser iguais!");
} else {
    if (n1 > n2) {
        console.log(n2, ", ", n1);
    } else {
        console.log(n1, ", ", n2);
    }
}

/*
    Escreva um algoritmo que percorra o array e calcule:

    A soma de todos os elementos
    A média dos elementos
    O maior valor encontrado
    O menor valor encontrado
*/

let arr = [10, 20, 30, 40, 50];

let soma = 0;
let maior = arr[0];
let menor = arr[0];

for (let i = 0; i < arr.length; i++) {
    soma += arr[i];
    if (arr[i] > maior) {
        maior = arr[i];
    }
    if (arr[i] < menor) {
        menor = arr[i];
    }
}

let media = soma / arr.length;

console.log("Soma:", soma);
console.log("Média:", media);
console.log("Maior valor:", maior);
console.log("Menor valor:", menor);