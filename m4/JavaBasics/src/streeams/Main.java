package streeams;

import java.util.List;

public class Main {
    public static void main(String[] args) {
//        List<Integer> numeros = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        // Stream é uma sequência de elementos que suporta operações agregadas, como filtragem, mapeamento e redução. Ele permite processar coleções de dados de forma funcional e paralela. É declarativo, ou seja, você descreve o que quer fazer com os dados, e não como fazer. Ele não armazena dados, mas sim processa-os em tempo real.
        // -> = operador lambda, que é uma função anônima que pode ser passada como argumento para métodos que aceitam interfaces funcionais. Ele permite escrever código mais conciso e expressivo.
//        int soma = numeros.stream()
//                .filter(n -> n % 2 == 0)
//                .mapToInt(n -> n * 2)
//                .sum();
//        System.out.println(soma);

        List<String> palavras = List.of("Java", "Python", "C++", "JavaScript", "Ruby", "Go");
        palavras.stream()
                .filter(palavra -> palavra.length() > 4)
                .forEach(System.out::println);

        palavras.stream()
                .map(String::toUpperCase)
                .forEach(System.out::println);

        List<Integer> tamanhos = palavras.stream()
                .map(String::length)
                .toList();
        System.out.println(tamanhos);

        List<Integer> numeros = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,20);
        numeros.stream()
                .filter(n -> n % 3 == 0)
                .forEach(System.out::println);
    }
}
