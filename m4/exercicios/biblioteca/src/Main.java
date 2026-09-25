import modelo.*;

public class Main {

    public static void main(String[] args) {

        // 1. Criação da biblioteca (capacidade fixa de itens e usuários)
        Biblioteca biblioteca = new Biblioteca(10, 10);

        // 2. Cadastro de itens no acervo
        Livro livro1 = new Livro(1L, "Dom Casmurro", true);
        Livro livro2 = new Livro(2L, "1984", true);
        Livro livro3 = new Livro(3L, "O Cortiço", true);
        Revista revista1 = new Revista(4L, "Superinteressante - Edição 450", true);
        Revista revista2 = new Revista(5L, "National Geographic", true);

        biblioteca.cadastrarItem(livro1);
        biblioteca.cadastrarItem(livro2);
        biblioteca.cadastrarItem(livro3);
        biblioteca.cadastrarItem(revista1);
        biblioteca.cadastrarItem(revista2);

        // 3. Cadastro de usuários
        Aluno aluno1 = new Aluno("Maria");
        Professor professor1 = new Professor("João");

        // 4. Empréstimo bem-sucedido
        System.out.println("--- Tentativa 1: aluno pega um livro ---");
        boolean sucesso1 = biblioteca.emprestar(aluno1, livro1);
        System.out.println("Resultado: " + (sucesso1 ? "Empréstimo realizado" : "Empréstimo recusado"));

        // 5. Forçar o limite do aluno (máx. 3 itens) para provocar recusa
        biblioteca.emprestar(aluno1, livro2); // 2º item do aluno
        biblioteca.emprestar(aluno1, livro3); // 3º item do aluno (atinge o limite)

        System.out.println("\n--- Tentativa 2: aluno tenta pegar um 4º item (deve ser recusado) ---");
        boolean sucesso2 = biblioteca.emprestar(aluno1, revista2);
        System.out.println("Resultado: " + (sucesso2 ? "Empréstimo realizado" : "Empréstimo recusado - limite atingido"));

        // 6. Professor, que tem limite maior, consegue pegar o mesmo item
        System.out.println("\n--- Tentativa 3: professor pega uma revista ---");
        boolean sucesso3 = biblioteca.emprestar(professor1, revista1);
        System.out.println("Resultado: " + (sucesso3 ? "Empréstimo realizado" : "Empréstimo recusado"));

        // 7. Devolução com atraso, gerando multa
        System.out.println("\n--- Devolução do livro1, com 3 dias de atraso ---");
        biblioteca.devolver(aluno1, livro1, 3);

        // 8. Listagem final do acervo
        System.out.println("\n--- Estado final do acervo ---");
        biblioteca.listarAcervo();
    }
}