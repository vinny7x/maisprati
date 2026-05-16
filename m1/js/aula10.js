// for in (para objetos)
let livro = {
    titulo: "a",
    autor: "b",
    tema: "c"
};
for (const chave in livro) {
    console.log(livro[chave]);
}

//for of (arrays)
let frutas = ["Banana", "Maçã", "Uva"];
for (const [i, fruta] of frutas.entries()) {
    console.log(i, fruta);
}

let livros = [
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry" },
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien" },
    { titulo: "1984", autor: "George Orwell" },
    { titulo: "As Crônicas de Nárnia", autor: "C.S. Lewis" },
    { titulo: "A Metamorfose", autor: "Franz Kafka" }
];
for (const livro of livros) {
    console.log(livro.titulo);
}
// destructuring
for (const { titulo, autor } of livros) {
    console.log(titulo, autor);
}

// foreach
const notas = [9, 8.5, 5, 6];
notas.forEach((nota, indice, array) => {
    console.log(nota, indice, array);
});

// Exercício - criar um objeto carro usando for in para imprimir as propriedades no formato: "chave: valor"
const carro = {
    modelo: "Uno",
    marca: "Fiat",
    cor: "Branco",
    ano: "2022"
};

for (const chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}
// Exercício - crie um array de cidades e imprima apenas a cidade que começa com a letra S usando for of
const cidades = [
    "São Paulo",
    "Salvador",
    "Seabra",
    "Feira de Santana",
    "Rio de Janeiro",
    "Santos",
    "Curitiba",
    "Sorocaba"
];
for (cidade of cidades) {
    if (cidade.startsWith('S')) {
        console.log(cidade);
    }
}

// Exercício - criem um array de números e usem forEach para somar todos os números
let numeros = [10, 2, 3, 8];
let soma = 0;

numeros.forEach((n) => soma += n);
console.log(soma);

// gerar relatorio com tres informações: lista de aprovados, lista de reprovados e a média geral da turma
const turma = [
    { nome: 'Alice', nota: 9.0 },
    { nome: 'Bruno', nota: 5.5 },
    { nome: 'Carla', nota: 7.0 },
    { nome: 'Daniel', nota: 3.8 },
    { nome: 'Elisa', nota: 8.2 },
];
let aprovados = []
let reprovados = []
let soma = 0

for (aluno of turma) {
    soma += aluno.nota
    if(aluno.nota >= 6) {
        aprovados.push(aluno.nome)
    } else {
        reprovados.push(aluno.nome)
    }
}
let media = soma / turma.length
console.log("Aprovados: "+aprovados.join(', ')+"\nReprovados: "+reprovados.join(", ")+"\nMédia: "+ media)