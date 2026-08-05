let fila = [];

for (let i = 1; i <= 5; i++) {
  let nome = prompt("Digite o nome do cliente:");
  fila.push(nome);
}

for (let i = 0; i < 5; i++) {
  let atendido = fila.shift(); 
  console.log("O cliente " + atendido + " foi atendido.");
}

console.log("Fila no final:");
console.log(fila);