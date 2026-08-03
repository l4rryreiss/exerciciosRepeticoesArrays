let primeiro = Number(prompt("Digite o 1º valor:"));
let maior = primeiro;
let menor = primeiro;

for (let i = 2; i <= 10; i++) {
  let valor = Number(prompt("Digite o valor:"));
  if (valor > maior) {
    maior = valor;
  }
  if (valor < menor) {
    menor = valor;
  }
}

console.log("Maior: " + maior);
console.log("Menor: " + menor);