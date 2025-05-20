const prompt = require('prompt-sync')()

console.log("====================================")
console.log("            T A B U A D A         ")
console.log("====================================")

let numero = Number(prompt("digite um numero para exibir a tabuada:"))

for(let i = 1; i <= 10; i++){
    console.log(`${numero} X ${i}  =  ${numero*i}`)
}
