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
    mostrarCaracteristicas: function(){
        return `Série: ${this.nome} | Classificação: ${this.classificacao}`
    }
}
console.log(serie.mostrarCaracteristicas())