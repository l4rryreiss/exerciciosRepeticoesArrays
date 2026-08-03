let totalSalario = 0;

while (true) {
  let entrada = prompt("Digite o salário (ou 'bolinho' para parar):");

  if (entrada === "bolinho") {
    break;
  }

  let salario = Number(entrada);
  totalSalario = totalSalario + salario;
}

console.log("Total de dinheiro da família: R$ " + totalSalario);