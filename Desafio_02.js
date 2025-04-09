let player = ["Bruno", 53, 17];
let resultado = calcularRank(player[1], player[2]);

function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let rank = "";

    if (saldoVitorias < 10) {
        rank = "Ferro";
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        rank = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 30) {
        rank = "Prata";
    } else if (saldoVitorias >= 31 && saldoVitorias <= 40) {
        rank = "Ouro";
    } else if (saldoVitorias >= 41 && saldoVitorias <= 50) {
        rank = "Platina";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 60) {
        rank = "Diamante";
    } else if (saldoVitorias >= 61 && saldoVitorias <= 70) {
        rank = "Ascendente";
    } else if (saldoVitorias >= 71 && saldoVitorias <= 80) {
        rank = "Imortal";
    } else {
        rank = "Radiante";
    }
    return "O Herói tem um saldo de " + saldoVitorias + " vitórias e está no nível de " + rank + ".";
}

console.log(resultado);
