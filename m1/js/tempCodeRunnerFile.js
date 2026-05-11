let arr = [10, 20, 30, 40, 50]

let soma = 0
let maior = arr[0]
let menor = arr[0]

for(let i = 0; i<arr.length; i++){
    soma += arr[i]
    if(arr[i] > maior){
        maior = arr[i]
    }
    if(arr[i] < menor){
        menor = arr[i]
    }
}

let media = soma / arr.length

console.log("Soma:", soma)
console.log("Média:", media)
console.log("Maior valor:", maior)
console.log("Menor valor:", menor)