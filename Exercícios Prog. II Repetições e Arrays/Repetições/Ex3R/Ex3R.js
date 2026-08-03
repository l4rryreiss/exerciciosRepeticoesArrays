let soma = 0;
let numero = 666;
while (numero !== 0) {
  numero = Number(prompt("Digite um número (ou 0 para encerrar):"));
  soma = soma + numero;
}

console.log("A soma total é: " + soma);