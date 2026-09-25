package modelo;

public abstract class ItemBiblioteca {
    private Long codigo;
    private String titulo;
    private boolean disponivel;

        public ItemBiblioteca(Long codigo, String titulo, boolean disponivel) {
            this.codigo = codigo;
            this.titulo = titulo;
            this.disponivel = disponivel;
        }

    public abstract int prazoEmprestimo();
    public abstract Double calcularMulta(int diasAtraso);
    public boolean isDisponivel(){
        return disponivel;
    }
    public void marcarComoEmprestado(){
        disponivel = false;
    }
    public void marcarComoDisponivel(){
        disponivel = true;
    }
    public String getTitulo(){
        return titulo;
    }
    public Long getCodigo(){
        return codigo;
    }
}