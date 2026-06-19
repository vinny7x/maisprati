const prompt = require("prompt-sync")();
const contatos = [
    {
        nome: "João Silva",
        telefone: "(75) 99911-1111",
        email: "joao@email.com"
    },
    {
        nome: "Maria Souza",
        telefone: "(75) 99922-2222",
        email: "maria@email.com"
    },
    {
        nome: "Pedro Santos",
        telefone: "(75) 99933-3333",
        email: "pedro@email.com"
    },
    {
        nome: "Ana Oliveira",
        telefone: "(75) 99944-4444",
        email: "ana@email.com"
    },
    {
        nome: "Lucas Costa",
        telefone: "(75) 99955-5555",
        email: "lucas@email.com"
    }
];
contatos.forEach(contato => {
    console.log(`Nome: ${contato.nome} | Telefone: ${contato.telefone} | Email: ${contato.email}`);
});
const nome = prompt("Insira um nome para buscar? ").toLowerCase();
let usuario = null;
for (const contato of contatos) {
    if (contato.nome.toLowerCase() === nome) {
        usuario = contato;
        break;
    }
}
if (usuario) {
    console.log(`Nome: ${usuario.nome} | Telefone: ${usuario.telefone} | Email: ${usuario.email}`);
} else {
    console.log("Contato não encontrado");
}