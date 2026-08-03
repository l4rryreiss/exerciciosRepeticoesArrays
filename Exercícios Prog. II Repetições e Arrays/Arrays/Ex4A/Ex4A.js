let lista = [];

for (let i = 1; i <= 5; i++) {
  let produto = prompt("Digite o produto " + i + " da lista:");
  lista.push(produto);
}

while (true) {
  let busca = prompt("Digite o produto para procurar (ou 'sair' para fechar):");

  if (busca === "sair") {
    break;
  }

  let achou = false;
  for (let i = 0; i < 5; i++) {
    if (lista[i] === busca) {
      achou = true;
    }
  }

  if (achou === true) {
    console.log("O produto " + busca + " ESTÁ na lista!");
  } else {
    console.log("O produto " + busca + " NÃO está na lista!");
  }
}