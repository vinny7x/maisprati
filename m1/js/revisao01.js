/**
 * Criar e imprimir a matrix identidade (quando os valores da diagonal principal são 1) MI[1...7, 1...7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos.
 * atividade da turma 2
 */
let n = 7;
let MI = [];

for (let i = 1; i <= n; i++) {
    MI[i] = [];
    for (let j = 1; j <= n; j++) {
        if (i === j) {
            MI[i][j] = 1;
        } else{
            MI[i][j] = 0
        }
    }

}
for(let i =1; i<=n; i++){
    let linha = ""
    for(let j = 1; j <= n; j++){
        linha += MI[i][j] + " "
    }
    console.log(linha)
}