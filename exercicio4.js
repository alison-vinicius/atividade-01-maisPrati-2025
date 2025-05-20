const prompt = require('prompt-sync')()

console.log("==============================")
console.log("     1 -  exibir data e hora   ")
console.log("     2 -  qual a capital do acre?   ")
console.log("     3 -  exibir fatorial de 10  ")
console.log("==============================")

let opcao =  (Number(prompt("selecione uma opção:")))

switch(opcao){
    case 1: 
        const data = new Date()
        console.log(data.toLocaleString())
        break
    case 2: 
        console.log("Rio Branco")
        break
    case 3:
        let fat = 10
        for(let i = 9; i >= 1; i--)
            fat *= i
        console.log(fat)
        break
    default:
        console.log("opção invalida")
        break
}