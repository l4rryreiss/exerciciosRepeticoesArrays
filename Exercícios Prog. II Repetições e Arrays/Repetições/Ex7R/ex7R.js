let presencas = 0;

for (let i = 1; i <= 10; i++) {
  let presenca = prompt("Aula " + i + ": Digite P para Presença ou F para Falta:");
  if (presenca === "P" || presenca === "p") {
    presencas = presencas + 1;
  }
}

let porcentagem = (presencas / 10) * 100;
console.log("Porcentagem de presença: " + porcentagem + "%");

if (porcentagem >= 75) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}