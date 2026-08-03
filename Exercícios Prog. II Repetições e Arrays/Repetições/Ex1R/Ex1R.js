let pares = 0;
let impares = 0;

for (let i = 1; i <= 8; i++) {
  let numero = Number(prompt("Digite um número:"));
  
  if (numero % 2 === 0) {
    pares = pares + 1;
  } else {
    impares = impares + 1;
  }
}

console.log("Quantidade de pares: " + pares);
console.log("Quantidade de ímpares: " + impares);