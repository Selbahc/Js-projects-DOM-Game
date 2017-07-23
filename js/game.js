//Switching players and reseting count
function switchPlayers() {
  if (player1.playingNow) {
    player1.roundCount = 0;
    roundEltP1.innerHTML = player1.roundCount;
    player2.playingNow = true;
    player2.redCircle();
    player1.playingNow = false;
    player1.redCircle();
  } else if (player2.playingNow) {
    player2.roundCount = 0;
    roundEltP2.innerHTML = player2.roundCount;
    player1.playingNow = true;
    player1.redCircle();
    player2.playingNow = false;
    player2.redCircle();
  }
  //set background color according to the current player
  player1.playingNow ? document.querySelector('.sec-content').style.backgroundImage = 'linear-gradient(90deg, #EEE 50%, #FFF 50%)' : document.querySelector('.sec-content').style.backgroundImage = 'linear-gradient(90deg, #FFF 50%, #EEE 50%)';
}

//Rolling dice
rollDiceElt.addEventListener('click', rollDice);

//Adding result in now playing player
function addingResult() {
  //Add dice number to the now playing player
  player1.playingNow ?
    player1.roundCount += diceRoll : player2.playingNow ?
    player2.roundCount += diceRoll : false;
  roundEltP1.innerHTML = player1.roundCount;
  roundEltP2.innerHTML = player2.roundCount;

  //If dice number = 1, round = 0 and turn to the next player
  diceRoll == 1 ? switchPlayers() : false;

}
//keep result in global count
function keepingResult() {
  //Hold result and display it
  player1.playingNow ?
    player1.globalCount += player1.roundCount : player2.playingNow ?
    player2.globalCount += player2.roundCount : false;
  globalEltP1.innerHTML = player1.globalCount;
  globalEltP2.innerHTML = player2.globalCount;

  //Check if there is a winner, and start a new game
  if (player1.globalCount >= 100) {
    alert(`We've got a winner ! \n PLAYER 1 wins with ${player1.globalCount} against ${player2.globalCount} for Player 2`);
    newGame();
  } else if (player2.globalCount >= 100) {
    alert(`We've got a winner ! \n PLAYER 2 wins with ${player2.globalCount} against ${player1.globalCount} for Player 1`);
  }

  //switch players and reset count
  switchPlayers();
}

//Holding result in global count
holdRoundElt.addEventListener('click', keepingResult);
