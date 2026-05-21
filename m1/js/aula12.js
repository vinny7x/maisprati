// constructor
class Carro {
    constructor(marca, modelo, ano) {
        this.marca = marca,
            this.modelo = modelo,
            this.ano = ano;
    }
    mostrarCaracteristicas() {
        console.log(`O carro é um ${this.marca}, modelo ${this.modelo}, do ano ${this.ano}`);
    }
}

let fiatUno = new Carro("fiat", "uno", 1992);
fiatUno.mostrarCaracteristicas();

// lista ligada
class Node { // template
    constructor(value) {
        this.value = value,
            this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null,
            this.length = 0;
    }
    insertFirst(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.length++;
    }
    insertTail(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let actual = this.head;

            while (actual.next) {
                action = action.next;
            }
            actual.next = newNode;

        }
        this.length++;
    }
}

let lista = new LinkedList();
lista.insertFirst(10);
lista.insertFirst(10);
lista.insertTail(2);
console.log(lista);