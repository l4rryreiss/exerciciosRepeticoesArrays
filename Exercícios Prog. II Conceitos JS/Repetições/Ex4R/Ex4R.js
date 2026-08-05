let somaIdades = 0;
let totalPessoas = 0;

while (true) {
  let idade = Number(prompt("Digite a idade (se quiser encerrar digite algo <=0):"));

  if (idade <= 0) {
    break;
  }

  somaIdades = somaIdades + idade;
  totalPessoas = totalPessoas + 1;
}

if (totalPessoas > 0) {
  let media = somaIdades / totalPessoas;
  console.log("A idade média é: " + media);
} else {
  console.log("Nenhuma idade digitada.");
}