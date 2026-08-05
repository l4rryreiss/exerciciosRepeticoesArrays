//Crie um objeto chamado perfilInstagram com as seguintes
//propriedades: username, bio, seguidores (um número) e estaAtivo (0
//ou 1).
// Exiba no console uma mensagem formatada utilizando template literals:
// O usuário @[username] possui [seguidores] seguidores.
// Em seguida, simule que o usuário ganhou 150 novos seguidores: atualize o valor da propriedade seguidores e exiba o objeto atualizado no console com um novo
//log

var perfilInstagram = {
    username: "l4rrymustdie",
    bio: "⸜(｡˃ ᵕ ˂ )⸝♡",
    seguidores: "666",
    estaAtivo: "1",
}

console.log (`O usuário @${perfilInstagram.username} possui ${perfilInstagram.seguidores} seguidores.`)

perfilInstagram.seguidores = Number(perfilInstagram.seguidores) + 150;
console.log (`O usuário @${perfilInstagram.username} possui ${perfilInstagram.seguidores} seguidores.`)