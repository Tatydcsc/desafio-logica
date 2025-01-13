const nomeHeroi = "Desbravador10"
let xpHeroi = 0

for (let i = 0; i < 5; i++){
    let ganhoXP = Math.floor(Math.random() * 3000)
    xpHeroi += ganhoXP

    const xpElement = document.createElement("p");
    xpElement.innerText = `Ganhou ${ganhoXP} de XP. Total agora: ${xpHeroi}`;
    document.getElementById("resultado").appendChild(xpElement);
}

let nivelHeroi = "";
if (xpHeroi < 1000) {
  nivelHeroi = "Ferro";
} else if (xpHeroi >= 1001 && xpHeroi <= 2000) {
  nivelHeroi = "Bronze";
} else if (xpHeroi >= 2001 && xpHeroi <= 5000) {
  nivelHeroi = "Prata";
} else if (xpHeroi >= 6001 && xpHeroi <= 7000) {
  nivelHeroi = "Ouro";
} else if (xpHeroi >= 7001 && xpHeroi <= 8000) {
  nivelHeroi = "Platina";
} else if (xpHeroi >= 8001 && xpHeroi <= 9000) {
  nivelHeroi = "Ascendente";
} else if (xpHeroi >= 9001 && xpHeroi <= 10000) {
  nivelHeroi = "Imortal";
} else if (xpHeroi >= 10001) {
  nivelHeroi = "Radiante";
}

const nivelElement = document.createElement("p");
nivelElement.innerText = `O herói de nome ${nomeHeroi} está no nível ${nivelHeroi}.`;
document.getElementById("resultado").appendChild(nivelElement);
