let temperaturas = [];

for (let i = 0; i < 7; i++) {
  let temp = Number(prompt("Digite a temperatura do dia:"));
  temperaturas.push(temp);
}

let soma = 0;
let max = temperaturas[0];
let min = temperaturas[0];

for (let i = 0; i < 7; i++) {
  soma = soma + temperaturas[i];

  if (temperaturas[i] > max) {
    max = temperaturas[i];
  }
  if (temperaturas[i] < min) {
    min = temperaturas[i];
  }
}

let media = soma / 7;

console.log("Média de temperatura: " + media);
console.log("Temperatura máxima: " + max);
console.log("Temperatura mínima: " + min);