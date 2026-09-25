package modelo;

public class Biblioteca {
    private ItemBiblioteca[] acervo;
    private int quantidadeItens;

    private Usuario[] usuarios;
    private int quantidadeUsuarios;

    public Biblioteca(int capacidadeAcervo, int capacidadeUsuarios) {
        this.acervo = new ItemBiblioteca[capacidadeAcervo];
        this.quantidadeItens = 0;

        this.usuarios = new Usuario[capacidadeUsuarios];
        this.quantidadeUsuarios = 0;
    }
    public boolean cadastrarItem(ItemBiblioteca item){
        if(quantidadeItens >= acervo.length){
            System.out.println("Biblioteca cheia.");
            return false;
        }
        acervo[quantidadeItens] = item;
        quantidadeItens++;
        return true;
    }

    public boolean emprestar(Usuario usuario, ItemBiblioteca item) {
        if (!usuario.podeEmprestar()) {
            System.out.println(usuario.getNome() + " atingiu o limite de itens emprestados.");
            return false;
        }

        if (!item.isDisponivel()) {
            System.out.println("\"" + item.getTitulo() + "\" não está disponível no momento.");
            return false;
        }

        item.marcarComoEmprestado();
        usuario.registrarEmprestimo();

        System.out.println(usuario.getNome() + " pegou emprestado: \"" + item.getTitulo() + "\"");
        return true;
    }
    public boolean devolver(Usuario usuario, ItemBiblioteca item, int diasAtraso) {
        if (item.isDisponivel()) {
            System.out.println("\"" + item.getTitulo() + "\" já consta como disponível.");
            return false;
        }

        item.marcarComoDisponivel();
        usuario.registrarDevolucao();

        double multa = diasAtraso > 0 ? item.calcularMulta(diasAtraso) : 0.0;

        System.out.println(usuario.getNome() + " devolveu: \"" + item.getTitulo() + "\"");
        if (multa > 0) {
            System.out.printf("Multa por atraso (%d dia(s)): R$ %.2f%n", diasAtraso, multa);
        }

        return true;
    }

    public void listarAcervo(){
        for(int i = 0; i < quantidadeItens; i++){
            ItemBiblioteca item = acervo[i];
            System.out.println(
                            "[" + item.getCodigo() + "] " +
                            item.getTitulo() + " - " +
                            (item.isDisponivel() ? "Disponível": "Emprestado")+
                                    " - (Prazo: " + item.prazoEmprestimo() + " dias)"

            );
        }
    }
}
