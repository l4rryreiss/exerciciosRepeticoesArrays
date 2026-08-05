//Faça um algoritmo que receba o usuário e
//senha através do console do navegador e ao
//final imprima no console a mensagem: “Login
//feito com sucesso” ou “Erro de usuário e/ou
//senha”

let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");

if (usuario === "Larry" || usuario ==="larry" && senha ==="1234" ) {
    console.log ("Login feito com sucesso");
}
else  {
    console.log ("Erro de usuário e/ou senha");
}