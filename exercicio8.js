const prompt = require('prompt-sync')()
let n1 = prompt(`digite o primeiro número:`)
let n2 = prompt(`digite o segundo número:`)

if( n1 < n2){
    console.log(n1,n2)
}else{
    console.log(n2,n1)
}