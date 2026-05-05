# 📘 Aula 03 - Estruturas de Controle: Condicionais (if, else, switch)

## 📝 Strings

```js
// Usando aspas duplas e simples para criar strings
console.log("Hello World");
console.log('Hello World');

// Usando aspas duplas e simples para criar strings com aspas dentro
console.log("Shakespeare said, 'To be or not to be'");
console.log('Shakespeare said, "To be or not to be"');

// Concatenação de strings com números
console.log("Meu nome é Vinícios e tenho", 19, "anos de idade");
```

## 📊 Tipos de dados ([Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Data_structures))

```js
let nome = "Vinícios"; // string
let idade = 19; // number
let isStudent = true; // boolean
let endereco; // undefined (variável declarada, mas sem valor)
let sobrenome = null; // null (ausência de valor)

// Verificando tipos de dados
console.log(typeof nome); // string
console.log(typeof idade); // number
console.log(typeof isStudent); // boolean
console.log(typeof endereco); // undefined
console.log(typeof sobrenome); // object (null é considerado um objeto em JavaScript)
```

## 🔄 Reescrevendo valor de variável

```js
let nome1 = "Vinícios";
console.log(nome1); // Vinícios

nome1 = "Maria";
console.log(nome1); // Maria
```

## 🧩 Interpolando strings

```js
console.log(`Meu nome é ${nome1}`); // Meu nome é Vinícios
```

## 📛 Regras para nomes de variáveis ([Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types))
1. Não pode começar com número
2. Não pode conter espaços
3. Não pode conter caracteres especiais (exceto _ e $)
4. Não pode ser uma palavra reservada do JavaScript (como if, else, for, etc.)


## ➗ Expressões matemáticas ([Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators#operadores_de_atribui%C3%A7%C3%A3o))

```js
let a = 10;
let b = 5;

console.log(a + b); // 15 (adição)
console.log(a - b); // 5 (subtração)
console.log(a * b); // 50 (multiplicação)
console.log(a / b); // 2 (divisão)
console.log(a % b); // 0 (módulo - resto da divisão)
console.log(a ** b); // 100000 (exponenciação - a elevado a b)
console.log((a + b) / 2); // 7.5 (expressão com parênteses para controlar a ordem das operações)
```

## 🔼 Incrementando e decrementando

```js
let contador = 0;
contador++; // contador = contador + 1
console.log(contador); // 1

contador--; // contador = contador - 1
console.log(contador); // 0

contador += 5; // contador = contador + 5
console.log(contador); // 5
```

## 🔁 Pré-incremento e pós-incremento

```js
let x = 5;
console.log(x++); // 5 (pós-incremento: retorna o valor antes de incrementar)
console.log(x);   // 6 (valor após o incremento)

let y = 5;
console.log(++y); // 6 (pré-incremento: incrementa antes de retornar o valor)
console.log(y);   // 6 (valor após o incremento)
```

## 🔄 Conversão de tipos (casting) ([Documentação](https://dev.to/trinity_/conversoes-de-tipos-javascript-14i9))

```js
let num = "10"; // string
console.log(Number(num)); // 10 (agora é um número)
console.log(Number('abc')); // NaN (Not a Number - conversão falhou)
```

## 📐 Calculando a média de dois números (exercício)

```js
let num1 = 10;
let num2 = 5;

let media = (num1 + num2) / 2;
console.log(`A média de ${num1} e ${num2} é ${media}`); // A média de 10 e 5 é 7.5
```

## 🎲 Math ([Documentação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math))

```js
console.log(Math.random()); // número aleatório entre 0 e 1
console.log(Math.random() * 10); // número aleatório entre 0 e 10
console.log(Math.floor(Math.random() * 10)); // número aleatório entre 0 e 10 (arredondado para baixo)
console.log(Math.ceil(Math.random() * 10)); // número aleatório entre 0 e 10 (arredondado para cima)
console.log(Math.round(Math.random() * 10)); // número aleatório entre 0 e 10 (arredondado para o mais próximo)

console.log(Math.pow(2, 3)); // 8 (2 elevado a 3)
console.log(Math.abs(-5)); // 5 (valor absoluto de -5)
console.log(Math.sqrt(16)); // 4 (raiz quadrada de 16)
```

## 📅 Datas ([Documentação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date))

```js
const agora = new Date();
console.log(agora.toString()); // data e hora atual 
console.log("Dia: " + agora.getDate()); // dia do mês
console.log("Ano: " + agora.getFullYear()); // ano atual
console.log("Mês: " + (agora.getMonth() + 1)); // mês atual (0-11, por isso somamos 1)
console.log("Dia da semana: " + agora.getDay()); // dia da semana (0-6, onde 0 é domingo)

console.log("Horas: " + agora.getHours()); // hora atual
console.log("Minutos: " + agora.getMinutes()); // minutos atuais
console.log("Segundos: " + agora.getSeconds()); // segundos atuais

console.log(agora.toLocaleDateString('pt-BR')); // data formatada de acordo com a localidade
```

## 🔤 Métodos de string ([Documentação](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String))

```js
let frase = "Senhor dos Anéis é fantástico!";

console.log(frase.toUpperCase()); // "SENHOR DOS ANÉIS É FANTÁSTICO!" (tudo em maiúsculas)
console.log(frase.toLowerCase()); // "senhor dos anéis é fantástico!" (tudo em minúsculas)
```

## 🧠 Operadores lógicos ([Documentação](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators#operadores_logicos))
> && (AND) - retorna true se ambos os operandos forem true

> || (OR) - retorna true se pelo menos um dos operandos for true

> ! (NOT) - inverte o valor lógico do operando

```js
// Tabela verdade
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
console.log(!true); // false (negação de true é false)
console.log(!false); // true (negação de false é true)
```

## 🔐 Exercício em aula: Login e senha

```js
let login = "GatoPingado123";
let senha = "Pica-pau";
let loginCorreto = login === "GatoPingado123" && senha === "Pica-pau";
let loginErrado = login !== "GatoPingado123" || senha !== "Pica-pau";
```

## 🧾 Trabalhando com condicionais (if, else if, else) ([Documentação](https://developer.mozilla.org/pt-BR/docs/Learn_web_development/Core/Scripting/Conditionals))

```js
let nota = 10
let nota2 = 10
let media2 = (nota + nota2) / 2

if (media2 >= 6) {
    if (media2 === 10) {
        console.log("Parabéns, você tirou nota máxima!");
    }
    console.log("Aprovado com média", media2);
} else if (media2 < 6) {
    console.log("Reprovado com média", media2);
} else {
    console.log("Deu ruim");
}
```

## 🚗 Exercício em aula: verifique se uma pessoa pode ou não tirar a CNH

```js
// verifique se uma pessoa pode ou não tirar a CNH. Critério: Ter mais de 18 anos (exercício)
let idade2 = 19;

if ((idade2 >= 18) && (idade2 <= 60)) {
    console.log("Você pode tirar a CNH");
} else if ((idade2 < 18) && (idade2 > 0)) {
    console.log("Você não pode tirar a CNH");
} else {
    console.log("Idade inválida (menor que 0 ou maior que 60)");
}
// usando operador ternário para verificar se a pessoa pode ou não tirar a CNH
let mensagem = idade2 >= 18 ? "Pode tirar a CNH" : "Não pode tirar a CNH";
```

## ⌨️ Recuperando input do usuário

```js
const prompt = require('prompt-sync')(); // importando a biblioteca prompt-sync para ler input do usuário no terminal
let nome3 = prompt("Digite seu nome: ");
console.log('Seu nome é', nome3);
```