let inicio = null;

function adicionar(tarefa) {
    let novoNo = { valor: tarefa, proximo: null };

    if (inicio === null) {
        inicio = novoNo;
    } else {
        let atual = inicio;

        while (atual.proximo !== null) {
            atual = atual.proximo;
        }
        atual.proximo = novoNo;
    }
    console.log(`Tarefa "${tarefa}" adicionada`);
}

function remover(tarefa) {

    if (inicio === null) {
        console.log("Lista vazia. Não foi possível remover.");
        return;
    }
    if (inicio.valor === tarefa) {
        inicio = inicio.proximo;
        console.log(`Tarefa "${tarefa}" removida`);
        return;
    }
    let anterior = inicio;
    let atual = inicio.proximo;

    while (atual !== null) {
        if (atual.valor === tarefa) {
            anterior.proximo = atual.proximo;
            console.log(`Tarefa "${tarefa}" removida`);
            return;
        }
        anterior = atual;
        atual = atual.proximo;
    }
    console.log(`Tarefa "${tarefa}" não encontrada`);
}
function exibir() {
    if (inicio === null) {
        console.log("Lista vazia.");
        return;
    }
    let atual = inicio;
    let saida = "";

    while (atual !== null) {
        saida += atual.valor;
        if (atual.proximo !== null) {
            saida += "-> ";
        }
        atual = atual.proximo;
    }
    console.log(`Lista: ${saida} -> null\n`)
}

console.log("===== Adicionando tarefas =====")
adicionar("Estudar 1")
adicionar("Estudar 2")
adicionar("Estudar 3")
adicionar("Estudar 4")

exibir()

console.log("===== Removendo uma tarefa =====")
remover("Estudar 3")
exibir()