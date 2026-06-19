/**
 * Crie um objeto representando um produto com as propriedades: nome, preço,
categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
propriedades e seus valores. Em seguida, adicione uma nova propriedade
desconto ao objeto e exiba o preço final calculado.
 */
const produto = {
    nome: "Notebook Acer",
    preco: 3999,
    categoria: "Informática",
    quantidadeEstoque: 20
};
produto.desconto = 0.1 * 100;
const precoFinal = produto.preco - (produto.preco * (produto.desconto / 100));
for (const key in produto) {
    console.log(`${key}: ${produto[key]}`);
}
console.log(`Preço final: ${precoFinal}`);

/**
 * Crie dois objetos representando personagens de um jogo, cada um com as
propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
cada personagem lado a lado e determine qual deles tem maior poder total
(soma de vida + ataque + defesa).
 */
let personagem1 = {
    nome: "Raichu",
    vida: 40,
    ataque: 60,
    defesa: 40
};
let personagem2 = {
    nome: "Charizard",
    vida: 50,
    ataque: 50,
    defesa: 50
};

const poder1 = personagem1.vida + personagem1.ataque + personagem1.defesa;
const poder2 = personagem2.vida + personagem2.ataque + personagem2.defesa;

console.log("Primeiro personagem:");

for (const key in personagem1) {
    console.log(`${key}: ${personagem1[key]}`);
}
console.log();
console.log("Segundo personagem:");

for (const key in personagem2) {
    console.log(`${key}: ${personagem2[key]}`);
}
if (poder1 > poder2) {
    console.log(`O personagem "${personagem1.nome}" tem maior poder total, totalizando ${poder1} vs ${poder2}`);

} else {
    console.log(`O personagem "${personagem2.nome}" tem maior poder total, totalizando ${poder2} vs ${poder1}`);
}
/**
 * Crie um objeto representando um funcionário com nome, cargo, salário e anos de
experiência. Use for...in para listar todos os dados. Com base nos anos de
experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
anos = 10%, acima de 5 anos = 15%.
 */
const funcionario = {
    nome: "Amanda",
    cargo: "Assistente de RH",
    salario: 3000,
    anosExperiencia: 6
};
for (const key in funcionario) {
    console.log(`${key}: ${funcionario[key]}`);
}
const { anosExperiencia, salario } = funcionario;
let percentual, bonus;
if (anosExperiencia < 0) {
    console.error("Anos de experiência inválido");
} else if (anosExperiencia <= 2) {
    percentual = 0.05;
} else if (anosExperiencia >= 3 && anosExperiencia <= 5) {
    percentual = 0.1;
} else if (anosExperiencia > 5) {
    percentual = 0.15;
}
bonus = salario * percentual;
console.log(`Bônus: ${bonus}`);
/**
 * Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
listar o inventário completo. Permita que o usuário informe um item para usar:
reduza a quantidade em 1 ou exiba "item esgotado" se for zero.
 */
const prompt = require("prompt-sync")();

const inventario = {
    espada: 1,
    pocao: 5,
    escudo: 3
};
console.log("Inventário:");
for (const key in inventario) {
    console.log(`${key}: ${inventario[key]}`);
}
const item = prompt("Insira o nome de um item para usar: ");
if (item in inventario) {
    if (inventario[item] > 0) {
        inventario[item]--;
        console.log(`Você usou um(a) ${item}`);
    } else {
        console.log("Item esgotado");
    }
} else {
    console.log("Item não encontrado");
}
/**
 * Crie um objeto representando o orçamento mensal de uma pessoa, com
categorias como alimentação, transporte, lazer e saúde, cada uma com valor
planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.
 */
const orcamento = {
    alimentacao: {
        planejado: 500,
        gasto: 450
    },
    transporte: {
        planejado: 300,
        gasto: 350
    },
    lazer: {
        planejado: 200,
        gasto: 150
    },
    saude: {
        planejado: 250,
        gasto: 180
    }
};

let saldoGeral = 0;
let gastos = 0;

for (const categoria in orcamento) {
    const data = orcamento[categoria];
    if (data.gasto <= data.planejado) {
        console.log(`${categoria}: dentro do orçamento!`);
    } else {
        console.log(`${categoria}: fora do orçamento!`);
    }
    saldoGeral += data.planejado - data.gasto;
    gastos += data.gasto;
}
console.log(`Saldo geral: R$ ${saldoGeral.toLocaleString()}`);
console.log(`Total gasto: R$ ${gastos.toLocaleString()}`);

/**
 * Crie um array de objetos representando músicas, cada uma com título, artista e
duração em segundos. Use for...of para exibir cada música no formato "Artista —
Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
mesmo formato.
 */
const musicas = [
    {
        titulo: "Evidências",
        artista: "Chitãozinho & Xororó",
        duracao: 278
    },
    {
        titulo: "Anna Júlia",
        artista: "Los Hermanos",
        duracao: 215
    },
    {
        titulo: "Tempo Perdido",
        artista: "Legião Urbana",
        duracao: 307
    },
    {
        titulo: "Metamorfose Ambulante",
        artista: "Raul Seixas",
        duracao: 230
    },
    {
        titulo: "Garota de Ipanema",
        artista: "Tom Jobim",
        duracao: 196
    },
    {
        titulo: "Anna Júlia",
        artista: "Los Hermanos",
        duracao: 215
    }
];
let duracaoTotal = 0;
for (const musica of musicas) {
    const min = Math.floor(musica.duracao / 60);
    const seg = musica.duracao % 60;

    console.log(`${musica.artista} - ${musica.titulo} (${min}:${seg.toString().padStart(2, "0")})`);
}
musicas.forEach(m => {
    duracaoTotal += m.duracao;
});
const minutosTotais = Math.floor(duracaoTotal / 60);
const segundosTotais = duracaoTotal % 60;
console.log(`\n Duração total da playlist: ${minutosTotais}:${segundosTotais.toString().padStart(2, "0")}`);
/**
 * Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
forEach para calcular e exibir separadamente a média dos aprovados e a média
dos reprovados.
 */
let notaAprovados = 0;
let notaReprovados = 0;

let mediaAprovados = 0;
let mediaReprovados = 0;

const alunos = [
    { nome: "Duda", nota: 7 },
    { nome: "Marcos", nota: 4 },
    { nome: "Levi", nota: 8 },
    { nome: "Jhonny", nota: 5 },
    { nome: "Douglas", nota: 8 },
    { nome: "Vinny", nota: 10 }
];
for (const aluno of alunos) {
    if (aluno.nota >= 7) {
        console.log(`${aluno.nome} está aprovado(a), nota ${aluno.nota}`);
    } else if (aluno.nota >= 5) {
        console.log(`${aluno.nome} está em recuperação, nota ${aluno.nota}`);
    } else {
        console.log(`${aluno.nome} está reprovado(a), nota ${aluno.nota}`);
    }
}

alunos.forEach(aluno => {
    if (aluno.nota >= 7) {
        notaAprovados += aluno.nota;
    } else if (aluno.nota < 5) {
        notaReprovados += aluno.nota;
    }
});
mediaAprovados = notaAprovados / alunos.filter(a => a.nota >= 7).length;
mediaReprovados = notaReprovados / alunos.filter(a => a.nota < 5).length;

console.log(`Média dos alunos aprovados: ${mediaAprovados}`);
console.log(`Média dos alunos reprovados: ${mediaReprovados.toFixed(2)}`);
/**
 * Crie um array de objetos representando produtos com nome, preço e quantidade.
Use forEach para calcular o valor total em estoque de cada produto (preço ×
quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
estoque.
 */
let totalGeral = 0;
const produtos = [
    { nome: "Smartphone", preco: 1999, quantidade: 32 },
    { nome: "Notebook", preco: 7899, quantidade: 12 }
];
produtos.forEach(produto => {
    const valorEstoque = produto.preco * produto.quantidade;
    totalGeral += valorEstoque;

    console.log(`Estoque de ${produto.nome}: quantidade: ${produto.quantidade}, Preço individual: R$ ${produto.preco.toLocaleString()}, valor em estoque: R$ ${valorEstoque}`);
});
console.log(`Valor total dos produtos em estoque: R$ ${totalGeral.toLocaleString()}`);
/**
 * Crie um array de objetos onde cada objeto representa um contato com nome,
telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
uma mensagem de "não encontrado".
 */
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
/**
 * Implemente uma pilha usando um array para simular o histórico de um
navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
(peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
cada operação.
 */

/**
 * Implemente uma fila usando um array para simular o atendimento de uma
clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
(dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
exibindo o estado da fila a cada operação.
 */

/**
 * Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
exiba a lista antes e depois.
 */

/**
 * 
 */