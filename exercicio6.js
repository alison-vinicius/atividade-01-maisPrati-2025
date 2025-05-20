const prompt = require('prompt-sync')()

console.log("==============================")
console.log("   CALCULADORA DE TRIANGULO   ")
console.log("==============================")
let A = Number(prompt(`informe o lado A do triangulo:`))
let B = Number(prompt(`informe o lado B do triangulo:`))
let C = Number(prompt(`informe o lado C do triangulo:`))


let mensagemTriangulo
if((A < B + C) && (B < A + C) && (C < A + B)){
    mensagemTriangulo = "os lados formam um triangulo "
    if(A == B && B == C){
        mensagemTriangulo += "equilatero"
    }else if(A == B || A == C || B == C){
        mensagemTriangulo += "isóceles"
    }else if(A!=B && B!=C){
        mensagemTriangulo += "escaleno"
    }
    
} else {
    mensagemTriangulo = "os lados não formam um triangulo"
}

console.log(mensagemTriangulo)
