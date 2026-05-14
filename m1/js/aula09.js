// Funções
// funções sofrem hoesting

function somar(a, b = 10/**parâmetro default */) {
    return a + b;
}
let res = somar(10, 5);
console.log(res);

// passagem por referência (JS apenas permite passar referências com objetos )
let usuario = { nome: "Vinny" };
function alterarNome(usuario) {
    usuario.nome = "Jaques";
}
alterarNome(usuario);
console.log(usuario.nome);

// arrow function
const multiplicar = (a, b) => a * b;

// função anônima (callback)
setTimeout(
    function () {
        console.log('teste');
    }
    , 1000);

// objetos
let serie = {
    nome: "Two and a half man",
    genero: "Comédia",
    temporadas: 12,
    status: "Finalizada",
    classificacao: 16,
    episodios: {
        temp1: 10,
        temp2: 30
    },
    mostrarCaracteristicas: function () {
        return `Série: ${this.nome} | Classificação: ${this.classificacao}`;
    }
};
console.log(serie.mostrarCaracteristicas());

let livro = {
    titulo: "O Hobbit",
    autor: "J. R. R. Tolkien"
};

function Computador(processador, gpu, ram, armazenamento) {
    this.processador = processador,
        this.gpu = gpu,
        this.ram = ram,
        this.armazenamento = armazenamento;
}

let pc = new Computador("I5", "RTX 3050", "16gb", "1TB SDD");

// Função de construção
function criarComputador(processador, gpu, ram, armazenamento) {
    return {
        processador, gpu, ram, armazenamento,
        mostrarComponentes() {
            console.log(`
                processador: ${processador}
                GPU: ${gpu}
                `);
        }
    };
}
let computador = criarComputador("I5", "RTX 3050", "16gb", "1TB SDD");
computador.mostrarComponentes();

// Array de objetos
let moovies = [
    { title: "Spider-Man", genero: "Hero" },
    { title: "As branquelas", genero: "Comédia" },
    { title: "007", genero: "Ação" },
];
console.table(moovies);