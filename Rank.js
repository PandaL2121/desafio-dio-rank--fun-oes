let victory = 127;
let lose = 45;
let result = balance(victory, lose);
let rankHero = " ";
function balance(x, y) {
  return x - y;
}
if (result <= 10) {
  rankHero = "Ferro";
} else if (result >= 11 && result <= 20) {
  rankHero = "Bronze";
} else if (result >= 21 && result <= 50) {
  rankHero = "Prata";
} else if (result >= 51 && result <= 80) {
  rankHero = "Ouro";
} else if (result >= 81 && result <= 90) {
  rankHero = "Diamante";
} else if (result >= 91 && result <= 100) {
  rankHero = "Lendário";
} else rankHero = "Imortal";

console.log(
  "O Herói tem de saldo de vitórias de " +
    result +
    " e está no nível de " +
    rankHero
);
