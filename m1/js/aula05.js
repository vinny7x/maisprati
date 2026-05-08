// enquanto meu número nao for 10, some ele a um
let numero = 0;

while (numero < 10) {
    numero++;
    console.log(numero);
}
// contar de 10 ate 1
let n1 = 10;
while (n1 >= 1) {
    console.log(n1--);
}

// somar numeros de 1 ate 10
let contador = 0;
let soma = 0;
while (contador <= 10) {
    soma += contador;
    contador++;
}
console.log(soma);

// solicitem ao usuário um número e mostrem a tabuada deste número
const prompt = require('prompt-sync')();
const n2 = Number(prompt('Insira um número:\n'));
let contador = 1;

while (contador <= 10) {
    console.log(`${n2} X ${contador} = ${n2 * contador}`);
    contador++;
}

// do...while
let contador1 = 1;

do {
    console.log(contador1);
    contador1++;
} while (contador1 <= 10);

// solicite ao usuário que digite um valor, quando ele digitar 0. some todos os valores digitados por ele
const prompt = require('prompt-sync')();

let soma = 0;
let n;
do {
    n = Number(prompt('Insira um número: '));
    soma+=n
} while (n !== 0);
console.log("Resultado:" + soma)