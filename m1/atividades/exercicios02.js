
/**
 * Peça ao usuário um número e exiba sua tabuada completa (de 1 a 10) usando um
laço for. Em seguida, pergunte se ele deseja ver outra tabuada e repita enquanto
a resposta for "sim".
 */
const prompt = require('prompt-sync')();
let continuar = true;

while (continuar) {
    const numero = Number(prompt("Insira um número que deseja ver a tabuada: "));
    if (!numero || numero < 0) {
        console.log("Número inválido!");
        return continuar = false;
    }
    console.log(`------ TABUADA DO ${numero} ------`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} X ${i} = ${numero * i}`);
    }
    const repetir = prompt("Deseja ver outra tabuada? (sim/não): ").toLowerCase();
    if (repetir === 'nao' || repetir === 'não') continuar = false;
}

/**
 * Leia um número inteiro positivo e, usando um laço while, calcule e exiba quantos
dígitos ele possui. Trate o caso do número zero (que possui 1 dígito).
 */
const prompt = require('prompt-sync')();
let numero = Number(prompt("Insira um número: "));
let contador = 0;
if (numero === 0) {
    contador = 1;
} else {
    while (numero > 0) {
        numero = Math.floor(numero / 10);
        contador++;
    }
}
console.log(`O número inserido possui ${contador} dígitos`);
/**
 * Peça ao usuário quantos termos da sequência de Fibonacci deseja ver e exiba-os
usando um laço for. Exemplo: 1, 1, 2, 3, 5, 8, 13…
 */
const prompt = require('prompt-sync')();

const quantidade = Number(prompt("Quantos termos da sequência de Fibonacci você deseja ver? "));
if (!quantidade || quantidade < 1) return console.log("Insira um número válido!");
let a = 1;
let b = 1;
for (let i = 0; i < quantidade; i++) {
    console.log(a);

    let proximo = a + b;
    a = b;
    b = proximo;
}

/**
 * Defina uma senha fixa no código. Peça ao usuário que a digite e, usando um laço
do...while, permita no máximo 3 tentativas. Exiba se ele acertou ou se esgotou as
tentativas.
 */
const prompt = require('prompt-sync')();

const senha = "12345678";
let tentativa = 1;
let success = false;
do {
    const entrada = prompt("Insira a senha: ");
    tentativa++;
    if (entrada === senha) {
        success = true;
        console.log("Senha correta!");
    }
} while (tentativa <= 3 && success === false);
/**
 * Leia um número N e exiba todos os números primos entre 2 e N usando laços
aninhados (for dentro de for). Exiba também a quantidade total de primos
encontrados.
 */
const prompt = require('prompt-sync')();
const N = Number(prompt("Insira um número: "));
if (N < 2 || !N) return console.log("Número inválido!");
let primos = [];
let quantidade = 0;
for (let i = 2; i <= N; i++) {
    let primo = true;
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            primo = false;
            break;
        }
    }
    if (primo) {
        primos.push(i);
        quantidade++;
    }
}
console.log(
    `Entre os números 2 e ${N} temos ${quantidade} números primos\n${primos.join(', ')}`
);
/**
 * Crie um array e leia via laço o nome e a nota de 5 alunos. Ao final, exiba: a média
da turma, o nome do aluno com maior nota e o nome do aluno com menor nota.
Não use funções prontas como Math.max().
 */
const prompt = require('prompt-sync')();

let alunos = [];
let soma = 0;

for (let i = 1; i <= 5; i++) {
    const nome = prompt(`Insira o nome do ${i}° aluno: `);
    const nota = Number(prompt(`Insira a nota do ${i}° aluno: `));
    alunos.push({
        nome, nota
    });
}
let maior = alunos[0];
let menor = alunos[0];
let media;
for (let i = 0; i < alunos.length; i++) {
    soma += alunos[i].nota;
    media = soma / alunos.length;

    if (alunos[i].nota > maior.nota) {
        maior = alunos[i];
    }
    if (alunos[i].nota < menor.nota) {
        menor = alunos[i];
    }
}

console.log(`
Média da turma: ${media}
Maior nota: ${maior.nome} (${maior.nota})
Menor nota: ${menor.nome} (${menor.nota})
    `);

/**
 * Simule um carrinho de compras: leia nomes e preços de produtos em um laço até
o usuário digitar "sair". Armazene em arrays. Ao final, liste todos os itens, exiba o
subtotal, aplique 10% de desconto se houver mais de 3 itens e mostre o total a
pagar.
 */
const prompt = require('prompt-sync')();

let continua = true;
let carrinho = [];

while (continua) {
    const nome = prompt("Nome do produto: ");

    if (nome.toLowerCase() === "sair") {
        continua = false;
    } else {
        const valor = Number(prompt("Preço: "));
        carrinho.push({ nome, valor });
    }
}

let subtotal = 0;
let desconto = 0;
for (let i = 0; i < carrinho.length; i++) {
    subtotal += carrinho[i].valor;
}
let total = subtotal;
if (carrinho.length > 3) {
    desconto = subtotal * 0.10;
    total = subtotal - desconto;
}
const lista = carrinho.map(p => p.nome);
console.log(`
Produtos: ${lista.join(", ")}
Subtotal: R$${subtotal.toFixed(2)}
Descontos: R$${desconto.toFixed(2)}
Valor Final: R$${total.toFixed(2)}`);
/**
 * Leia uma palavra, armazene seus caracteres em um array e, percorrendo-o de
trás para frente com um laço for, monte a palavra invertida. Exiba a palavra
original, a invertida e informe se ela é um palíndromo.
 */
const prompt = require("prompt-sync")();

let palavra = prompt("Insira uma palavra: ");
let arr = palavra.split('');
let invertida = '';
for (let i = arr.length - 1; i >= 0; i--) {
    invertida += arr[i];
}
let palindromo = palavra.toLowerCase() === invertida.toLowerCase() ? "sim" : "Não";
console.log(`Palavra: ${palavra}\nInvertida: ${invertida}\nÉ palindromo: ${palindromo}`);
/**
 * Sorteie um número entre 1 e 100 com Math.random(). Usando um laço do...while,
peça ao usuário para adivinhar; a cada tentativa, diga se o número é maior ou
menor. Registre as tentativas em um array e, ao acertar, exiba o histórico e
quantas tentativas foram necessárias.
 */
const prompt = require("prompt-sync")();
let tentativas = [];
let sucesso = false;
const numero = Math.floor(Math.random() * 100);
console.log(numero);

do {
    const chute = Number(prompt("Dê seu chute: "));
    tentativas.push(chute);
    if (chute === numero) {
        console.log(`Parabéns, você acertou, o número era ${numero}\nQuantidade de tentativas: ${tentativas.length}\nHistórico de tentativas: ${tentativas.join(', ')}`);
        sucesso = true;
    } else if (numero > chute) {
        console.log("Maior!");
    } else if (numero < chute) {
        console.log("Menor!");
    }
} while (sucesso === false);

/**
 * Crie uma matriz 3×4 (3 alunos, 4 notas cada). Leia os valores via laços aninhados.
Calcule e exiba a média de cada aluno, a média geral da turma e qual aluno teve
o melhor desempenho.
 */

let arr = [
    [8, 7, 9, 10], // aluno 1
    [6, 5, 8, 7],  // aluno 2
    [9, 10, 8, 9]  // aluno 3
];

let mediaGeral = 0;
let somaGeral = 0;
let melhorMedia = 0;
let melhorAluno = 0;

for (let aluno = 0; aluno < 3; aluno++) {
    let somaAluno = 0;
    for (let nota = 0; nota < 4; nota++) {
        somaGeral += arr[aluno][nota];
        somaAluno += arr[aluno][nota];
    }
    let mediaAluno = somaAluno / 4;
    console.log(`Aluno ${aluno + 1}: Soma das notas: ${somaAluno}; Média: ${mediaAluno}`);

    if (mediaAluno > melhorMedia) {
        melhorAluno = aluno;
        melhorMedia = mediaAluno;
    }
}
mediaGeral = somaGeral / 12;
console.log(`Média geral da turma: ${mediaGeral.toFixed()}`);
console.log(`Aluno com o melhor desempenho: ${melhorAluno + 1} (Média: ${melhorMedia})`);
