let tentativas = 0;
let deuCerto = false;

while (tentativas < 3) {
  let usuario = prompt("Digite o usuário:");
  let senha = prompt("Digite a senha:");

  if (usuario === "aluno" && senha === "iftm123") {
    console.log("Login com sucesso");
    deuCerto = true;
    break;
  } 
  else {
    tentativas = tentativas + 1;
    if (tentativas < 3) {
      console.log("Erro de senha ou usuário");
    }
  }
}

if (deuCerto === false) {
  console.log("Bloqueado");
}