const prompt = require('prompt-sync')()
let soma = 0
for(let i = 1; i <= 5; i++){
    let numero = Number(prompt(`digite o ${i}° número:`))
    soma += numero
}

console.log(`a soma dos números digitados é ${soma}`)