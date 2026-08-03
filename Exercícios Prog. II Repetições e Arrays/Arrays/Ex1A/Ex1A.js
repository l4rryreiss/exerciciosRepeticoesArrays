let compras = [];
let total = 0;

for (let i = 0; i < 7; i++) {
  let valor = Number(prompt("Digite o valor do produto:"));
  compras.push(valor);
}

for (let i = 0; i < 7; i++) {
  total = total + compras[i];
}

console.log("Total normal: R$ " + total);

if (total > 300) {
  let desconto = total * 0.10;
  total = total - desconto;
  console.log("Com desconto de 10%: R$ " + total);
}