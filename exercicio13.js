const prompt = require('prompt-sync')()
let somaDosNumeros = 0
let quantidadeDeNumeros = 0

while(true){
    let numero = Number(prompt("digite um numero:"))
    if(numero == 0){
        break
    }else{
        somaDosNumeros += numero
        quantidadeDeNumeros += 1
    }
}

console.log(`a média aritmética dos numeros digitados é ${somaDosNumeros/quantidadeDeNumeros.toFixed(2)}`)




