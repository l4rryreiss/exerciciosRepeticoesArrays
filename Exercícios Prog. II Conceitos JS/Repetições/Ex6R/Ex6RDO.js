let primeiro = Number(prompt("Digite o 1º valor:"));
let maior = primeiro;
let menor = primeiro;
let cont = 2;

do {
  let valor = Number(prompt("Digite o valor:"));
  if (valor > maior) {
    maior = valor;
  }
  if (valor < menor) {
    menor = valor;
  }
  cont = cont + 1;
} while (cont <= 10);

console.log("Maior: " + maior);
console.log("Menor: " + menor);