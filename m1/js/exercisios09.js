// EXERCÍCIO1 — Soma, Média, Maior e Menor de um listaay
// =====================================================================
/*
    Escreva uma função para cada operação onde o listaay será percorrido e calcule:
    
    A soma de todos os elementos
    A média dos elementos
    O maior valor encontrado
    O menor valor encontrado
*/

let arr = [10, 20, 30, 40, 50];

function somar(lista) {
    let soma = 0;
    for (let i = 0; i < lista.length; i++) {
        soma += lista[i];
    }
    return soma;
}
function calcularMedia(lista) {
    let soma = somar(lista);
    return soma / lista.length;
}
function maiorValor(lista) {
    let maior = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] > maior) {
            maior = lista[i];
        }
    }
    return maior;
}
function menorValor(lista) {
    let menor = lista[0];
    for (let i = 0; i < lista.length; i++) {
        if (lista[i] < menor) {
            menor = lista[i];
        }
    }
    return menor;
}
let soma = somar(arr);
let media = calcularMedia(arr);
let maior = maiorValor(arr);
let menor = menorValor(arr);

console.log(`
soma: ${soma}
média: ${media}
meior valor: ${maior}
menor valor: ${menor}
`)


