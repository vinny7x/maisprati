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