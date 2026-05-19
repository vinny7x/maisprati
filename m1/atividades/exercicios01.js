const prompt = require('prompt-sync')();

/**
 * 1.​ Escreva um programa que pergunte a nota de um aluno (de 0 a 10). Exiba se o
aluno foi Aprovado (nota maior ou igual a 7), em Recuperação (nota entre 5 e 6.9)
ou Reprovado (nota menor que 5).​
 */
const nota = Number(prompt('Informe a nota: '));
if (nota < 0 || nota > 10) return console.log("A nota deve estar em um intervalo de 0 à 10");

if (nota >= 7) {
    console.log("Aprovado!");
} else if (nota >= 5) {
    console.log("Aluno em recuperação");
} else {
    console.log("Aluno reprovado!");
}

/**
 * 2.​ Crie um programa que pergunte o ano de nascimento de uma pessoa e calcule
sua idade. Com base na idade, exiba se ela é criança (até 12 anos), adolescente
(de 13 a 17 anos), adulta (de 18 a 59 anos) ou idosa (60 anos ou mais).​
 */
const anoDeNascimento = Number(prompt("Insira o seu ano de nascimento: "));
const ano = new Date().getFullYear();
const idade = ano - anoDeNascimento;
let faixaEtaria;

if (idade <= 12) {
    faixaEtaria = "Criança";
} else if (idade >= 13 && idade <= 17) {
    faixaEtaria = "Adolescente";
} else if (idade >= 18 && idade <= 59) {
    faixaEtaria = "Adulto";
} else if (idade >= 60) {
    faixaEtaria = "Idoso";
}
console.log(`Você tem ${idade} anos e é ${faixaEtaria}`);

/**
 * 3.​ Escreva um programa que pergunte o salário mensal de um funcionário e o
percentual de aumento concedido pela empresa. Caso o salário seja menor que
R$ 1.500,00, o percentual de aumento deve ser dobrado automaticamente. Exiba o
novo salário do funcionário.
 */

const salario = Number(prompt("Qual o seu salário mensal? "));
let aumento = Number(prompt("Qual o percentual de aumento? "));
if (salario < 1500) aumento = aumento * 2;

const novoSalario = (salario * (aumento / 100)) + salario;

console.log(`
Salário antigo: ${salario.toLocaleString('pt-BR')}
Aumento: ${aumento}%
Novo salário: R$ ${novoSalario.toLocaleString('pt-BR')}
`);

/**
 * 4.​ Crie um programa que leia três números inteiros e exiba o maior deles, sem utilizar
funções prontas como Math.max().​
 */
const n1 = Number(prompt("Insira o número 1: "));
const n2 = Number(prompt("Insira o número 2: "));
const n3 = Number(prompt("Insira o número 3: "));
const numeros = [n1, n2, n3];
let maior = numeros[0];

for (const n of numeros) {
    if (n > maior) {
        maior = numeros[n];
    }
}
console.log(`
Números: ${numeros.join(", ")}
Maior: ${maior}
`);

/**
 * 5.​ Uma loja oferece desconto progressivo conforme o valor da compra. Faça um
programa que leia o valor total de uma compra e aplique as seguintes regras:
compras abaixo de R$ 100,00 não têm desconto; compras entre R$ 100,00 e R$
299,99 recebem 10% de desconto; compras entre R$ 300,00 e R$ 499,99 recebem
15% de desconto; compras acima de R$ 500,00 recebem 20% de desconto. Exiba o
valor original, o desconto aplicado e o valor final a pagar.​
 */

let valor = Number(prompt("Informe o valor do produto: "));
let desconto;

if (valor < 100) {
    desconto = 0;
} else if (valor < 300) {
    desconto = 10;
} else if (valor < 500) {
    desconto = 15;
} else {
    desconto = 20;
}
const novoValor = valor - (valor * (desconto / 100));
console.log(`
Valor inicial: R$${valor.toLocaleString()}
Descontos aplicados: ${desconto}
Valor final: R$${novoValor.toLocaleString()}
`);
/**
 * 6.​ Crie um programa de caixa eletrônico simplificado. O usuário informa o valor que
deseja sacar (múltiplo de 10). O programa deve calcular e exibir a menor
quantidade possível de cédulas de R$ 100, R$ 50, R$ 20 e R$ 10 necessárias para
compor o saque.​
 */

let valor = Number(prompt("Informa quanto deseja sacar (deve ser múltiplo de 10): "));
const valorInicial = valor;
if (valor % 10 !== 0) { return console.log("O número informado não é múltiplo de 10!"); }
const notas100 = Math.floor(valor / 100);
valor = valor % 100;
const notas50 = Math.floor(valor / 50);
valor = valor % 50;
const notas20 = Math.floor(valor / 20);
valor = valor % 20;
const notas10 = Math.floor(valor / 10);
valor = valor % 10;
console.log(
    `Valor a ser sacado: R$${valorInicial}

Notas de R$100: ${notas100}
Notas de R$50: ${notas50}
Notas de R$20: ${notas20}
Notas de R$10: ${notas10}`
);
/**
 * 7.​ Faça um programa que funcione como uma calculadora básica. Leia dois
números e uma operação desejada (+, -, *, /). Usando switch case, realize a
operação correspondente e exiba o resultado. Trate o caso de divisão por zero e
de operação inválida.​
 */

const n1 = Number(prompt("Insira o primeiro número: "));
const n2 = Number(prompt("Insira o segundo número: "));
const operacao = Number(prompt("Qual operação deseja realizar com estes números?\n1 - Adição\n2 - Subtração\n3 - Multiplicação\n4 - divisão "));

switch (operacao) {
    case 1:
        console.log(`${n1} + ${n2} = ${n1 + n2}`);
        break;
    case 2:
        console.log(`${n1} - ${n2} = ${n1 - n2}`);
        break;
    case 3:
        console.log(`${n1} X ${n2} = ${n1 * n2}`);
        break;
    case 4:
        if (n2 === 0) {
            return console.log("Divisões por 0 não são possíveis");
        }
        console.log(`${n1} / ${n2} = ${n1 / n2}`);
        break;
    default:
        console.log("Operação inválida");
}
/**
 * 8.​ Uma pizzaria cobra por tamanho e tipo de borda. Faça um programa que leia o
tamanho da pizza (P, M ou G) e o tipo de borda (tradicional ou recheada) usando switch case. Os preços base são: P = R$ 25,00, M = R$ 35,00, G = R$ 45,00. A borda
recheada acrescenta R$ 8,00 em qualquer tamanho. Exiba o valor total do pedido.​
 */

const tamanho = prompt("Qual o tamanho da pizza? (P, M ou G) ").toUpperCase();
const borda = Number(prompt("Qual o tipo de borda? (1 - tradicional, 2 - recheada) "));
let valor = 0;
if (borda === 2) {
    valor += 8;
}
switch (tamanho) {
    case "P":
        valor += 25;
        break;
    case "M":
        valor += 35;
        break;
    case "G":
        valor += 45;
        break;
    default:

        console.log("Tamanho de pizza inválido!");
        break;
}
console.log(`Pizza de tamanho ${tamanho} com borda ${borda === 1 ? "tradicional" : "recheada"}: R$${valor.toFixed(2)}`);


/**
 * 9.​ Crie um programa que leia o número do mês (1 a 12) e, usando switch case, exiba
o nome do mês correspondente e quantos dias ele possui. Para fevereiro,
pergunte ao usuário se o ano é bissexto e ajuste a quantidade de dias para 29
caso seja.
 */
const entrada = Number(prompt("Insira o mês: (de 1 a 12) "));
if (entrada < 1 || entrada > 12) return console.log("Mês inválido, use números de 1 à 12 para representar os meses!");
let dias, mes;
switch (entrada) {
    case 1:
        mes = "Janeiro";
        dias = 31;
        break;
    case 2:
        mes = "Fevereiro";
        const bissexto = Number(prompt("O ano é bissexto? (1 - não, 2 - sim)"));
        if (bissexto === 2) {
            dias = 29;
        } else {
            dias = 28;
        }
        break;
    case 3:
        mes = "Março";
        dias = 31;
        break;
    case 4:
        mes = "Abril";
        dias = 30;
        break;
    case 5:
        mes = "Maio";
        dias = 31;
        break;
    case 6:
        mes = "Junho";
        dias = 30;
        break;
    case 7:
        mes = "Julho";
        dias = 31;
        break;
    case 8:
        mes = "Agosto";
        dias = 31;
        break;
    case 9:
        mes = "Setembro";
        dias = 30;
    case 10:
        mes = "Outubro";
        dias = 31;
        break;
    case 11:
        mes = "Setembro";
        dias = 30;
        break;
    case 12:
        mes = "Dezembro";
        dias = 31;
        break;
}
console.log(`Mês ${mes} tem ${dias} dias`);
/**
 * 10.​ Um estacionamento cobra por faixas de tempo. Faça um programa que leia
quantas horas um veículo ficou estacionado e, usando switch case com
intervalos, calcule o valor a pagar conforme a tabela: 1ª hora = R$ 8,00; 2ª hora =
R$ 6,00; 3ª hora = R$ 4,00; acima de 3 horas = R$ 4,00 pelas primeiras 3 horas mais
R$ 2,00 por hora adicional. Exiba o tempo total e o valor cobrado.​
 */
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