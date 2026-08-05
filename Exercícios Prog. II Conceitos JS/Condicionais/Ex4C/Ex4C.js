//Faça um sistema que receba a nota de 2
//provas. Faça a média dessas provas e
//armazene o resultado. Ao final, emita a
//mensagem de “Dentro da média” ou “Abaixo
//da média”. A nota está na média caso seja
//maior ou igual a 6.

let nota1 = Number(prompt("Digite a nota da 1° prova:"))
let nota2 = Number(prompt("Digite a nota da 2° prova:"))
let media = (nota1 + nota2) / 2

if (media >= 6) {
    console.log("Dentro da média")
} else {
    console.log("Abaixo da média")
}
