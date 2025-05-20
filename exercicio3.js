const prompt = require('prompt-sync')()
function situacaoFinal(nota) {
  if (nota < 0 || nota > 10) {
    console.log("Nota inválida. Digite um valor entre 0 e 10.");
  } else if (nota >= 7) {
    console.log("Aprovado");
  } else if (nota >= 5) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}

console.log("==============================")
console.log("   ESCOLA  ALISON VINICIUS  ")
console.log("==============================")
let nota = Number(prompt("informe a nota do aluno:"))
situacaoFinal(nota)