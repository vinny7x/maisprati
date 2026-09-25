package modelo;

public abstract class Usuario {
    private String nome;
    private int quantidadeEmprestada;

    public Usuario(String nome) {
        this.nome = nome;
        this.quantidadeEmprestada = 0;
    }

    public String getNome() {
        return nome;
    }

    public abstract int limiteItens();

    public boolean podeEmprestar() {
        return quantidadeEmprestada < limiteItens();
    }

    public void registrarEmprestimo() {
        quantidadeEmprestada++;
    }

    public void registrarDevolucao() {
        if (quantidadeEmprestada > 0) {
            quantidadeEmprestada--;
        }
    }
}