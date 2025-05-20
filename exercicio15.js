let anterior = 0
let proximo = 1
let fibonacci = []
console.log("====================================")
console.log("-- FIBONACCI -- 10 PRIMEIROS NUMEROS")
console.log("====================================")

fibonacci.push(proximo)
for(let i = 1; i <= 9; i++){
    let aux = anterior + proximo
    anterior = proximo
    proximo = aux
    fibonacci.push(proximo)
}

console.log(fibonacci.join(' '))

