const prompt = require('prompt-sync')()

console.log("=============================")
console.log("      LOJA DAS MAÇÃS         ")
console.log("=============================")
let macas = Number(prompt(`informe a quantidade de maças compradas:`))


let preco = (macas < 12)? 0.30:0.25

console.log(`o preço total da compra será de ${(macas*preco).toFixed(2)}`)