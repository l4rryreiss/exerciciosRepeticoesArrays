let soma = 0;
let numero = 666;
while (numero !== 0) {
  numero = Number(prompt("Digite um número (Se quiser encerrar aperte 0):"));
  soma = soma + numero;
}

console.log("A soma total é: " + soma);