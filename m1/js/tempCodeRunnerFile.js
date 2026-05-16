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