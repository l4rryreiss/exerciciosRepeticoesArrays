//Crie um algoritmo que receba do usuário 2
//números e em seguida uma das quatro
//operações básicas (+ - / *), realize a
//operação escolhida e retorne o resultado.
//Caso algum erro de entrada ocorra, mostre a
//mensagem “Erro de entrada”. 

let n1 = Number(prompt("Digite o 1° número"));
let n2 = Number(prompt("Digite o 2° número"));
let opera = prompt("Digite o sinal ( + ,  - , * ou / )da operação que deseja realizar:");

if (opera == "+") {
    console.log(n1 + n2);

} else if (opera == "-") {
    console.log(n1 - n2);

} else if (opera == "*") {
    console.log(n1 * n2);

} else if (opera == "/") {
    console.log(n1 / n2);

} else {
    console.log("Erro de entrada");
}
