const prompt = require('prompt-sync')()

let fat = 1
function fatorial(num){
    if(num <= 1) return fat
    fat *= num
    return fatorial(num-1)
}

console.log("====================================")
console.log("-- CALCULADORA DE FATORIAL          ")
console.log("====================================")
let numero = Number(prompt("digite um numero:"))

console.log(`o fatorial de ${numero} é ${fatorial(numero)}`)


