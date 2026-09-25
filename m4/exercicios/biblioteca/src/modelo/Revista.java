package modelo;

public class Revista extends ItemBiblioteca{
    public Revista(Long codigo, String titulo, boolean disponivel) {
        super(codigo, titulo, disponivel);
    }

    @Override
    public int prazoEmprestimo() {
        return 7;
    }

    @Override
    public Double calcularMulta(int diasAtraso) {
        return diasAtraso * 1.00;
    }
}
