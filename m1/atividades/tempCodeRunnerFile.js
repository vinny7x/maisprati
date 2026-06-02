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