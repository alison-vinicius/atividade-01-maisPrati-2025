const prompt = require('prompt-sync')()

function calcularIMC(peso,altura){
    let imc = peso/ (altura * altura)
    let categoria = "";

  // Verifica a categoria do IMC
  if (imc < 18.5) {
    categoria = "Baixo peso";
  } else if (imc >= 18.5 && imc < 25) {
    categoria = "Peso normal";
  } else if (imc >= 25 && imc < 30) {
    categoria = "Sobrepeso";
  } else {
    categoria = "Obesidade";
  }

  console.log(`IMC: ${(imc).toFixed(2)}`)
  console.log(`categoria: ${categoria}`)


}

console.log("==============================")
console.log("      CALCULADORA DE IMC      ")
console.log("==============================")
let peso  = Number(prompt("informe seu peso: "))
let altura  = Number(prompt("informe sua altura: "))
calcularIMC(peso,altura)
