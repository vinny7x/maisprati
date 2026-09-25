package modelo;

public class Livro extends ItemBiblioteca {
    public Livro(Long codigo, String titulo, boolean disponivel) {
        super(codigo, titulo, disponivel);
    }

    @Override
    public int prazoEmprestimo() {
        return 14;
    }

    @Override
    public Double calcularMulta(int diasAtraso) {
        return diasAtraso * 0.50;
    }
}
