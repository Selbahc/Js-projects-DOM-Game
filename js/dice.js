//Result of Dice roll, declaration in global scope
let diceRoll;

function rollDice() {
  diceRoll = Math.floor(Math.random() * 6) + 1;
  diceImgElt.src = `images/dice-${diceRoll}.png`;
  addingResult();
}
