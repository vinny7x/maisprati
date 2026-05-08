const prompt = require('prompt-sync')();

let soma = 0;
let n;
do {
    n = Number(prompt('Insira um número: '));
    soma+=n
} while (n > 0);
console.log("Resultado:" + soma)