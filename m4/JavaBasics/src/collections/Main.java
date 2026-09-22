package collections;

import java.util.*;

public class Main {
    public static void main(String[] args) {
//        List<String> compras = new ArrayList<>();
//        compras.add("Arroz");
//        compras.add("Feijão");
//        compras.add("Macarrão");
//
//        for(String item : compras) {
//            System.out.println(item);
//        }
//        for(int i = 0; i < compras.size(); i++) {
//            System.out.println(i + ": " + compras.get(i));
//        }

//        List<Integer> numeros = new ArrayList<>(1000);
//        numeros.add(1);
//        numeros.add(2);
//        numeros.add(3);
//
//        numeros.remove(1);
//        numeros.remove(Integer.valueOf(3));
//        System.out.println(numeros);
        // coleção sem repetição
        Set<String> visitantes = new HashSet<>();
        visitantes.add("João");
        visitantes.add("Maria");
        visitantes.add("José");
    // HashMap é para armazenar pares de chave-valor, onde cada chave é única e mapeia para um valor correspondente. tem sempre a mesma velocidade de acesso, independente do tamanho do mapa.
        Map<String, Integer> idades = new HashMap<>();
        idades.put("João", 25);
        idades.put("Maria", 30);
        idades.put("José", 35);
        System.out.println(idades.get("Maria"));

        for(Map.Entry<String, Integer> entry : idades.entrySet()) {
            System.out.println(entry.getKey() + ": " + entry.getValue());
        }

        // Deque = Double Ended Queue, é uma fila de elementos que permite inserção e remoção de elementos em ambas as extremidades.
        Deque<String> historico = new ArrayDeque<>();
        historico.push("Primeiro");
        historico.push("Segundo");
        System.out.println(historico.pop());
        System.out.println(historico.peek());

        Queue<String> atentimento = new ArrayDeque<>();
        atentimento.add("Cliente 1");
        atentimento.add("Cliente 2");
        System.out.println(atentimento.poll());
    }
}
