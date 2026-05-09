const prompt = require("prompt-sync")();

// tabuada usando for
let valor = Number(prompt('Informe o valor que você quer receber a tabuada: '));
for (let i = 1; i <= 10; i++) {
    console.log(`${valor} X ${i} = ${valor * i}`);
}

// arrays
let arr = ["banana", "Maçã", "Pêra"]
arr.push("Jaca") // adiciona elemento no final
arr.pop() // remove o ultimo elemento
arr.unshift('1') // adiciona um elemrnto no inicio
arr.shift() //remove o elemento no inicio
arr.splice(1, 1) // remove o segundo elemento
arr.splice(1, 0, '2') // adiciona um elemento na posição desejada

// matrizes
let coisas = [
    [1, 2],
    ["a", "b"],
    ["manga", "pêra"]
]
for(let i = 0; i < coisas.length; i++){
    for(let j = 0; j< coisas[i].length; j++){
        console.log(coisas[i][j])
    }
}