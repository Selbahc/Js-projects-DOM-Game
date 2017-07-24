/////////////////////////////////////
//GLOBAL SCOPE VARIABLES DECLARATION
//for players

let player1;
let player2;

//for dice results
let diceRoll;
//
//////////////////


///////////
//GAME FUNCTIONS
function setBackground() {
  if (player1.playingNow) {
    //set background
    document.querySelector('.sec-content').style.backgroundImage = 'linear-gradient(90deg, #EEE 50%, #FFF 50%)';
    //set red dot
    isPlayingEltP1.style.backgroundColor = '#F01D3B';
    isPlayingEltP2.style.backgroundColor = 'transparent';
    //set font weight
    document.querySelector('.player-1 .player-status>p').style.fontWeight = '300';
    document.querySelector('.player-2 .player-status>p').style.fontWeight = '100';
  } else {
    //set background
    document.querySelector('.sec-content').style.backgroundImage = 'linear-gradient(90deg, #FFF 50%, #EEE 50%)';
    //set red dot
    isPlayingEltP1.style.backgroundColor = 'transparent';
    isPlayingEltP2.style.backgroundColor = '#F01D3B';
    //set font weight
    document.querySelector('.player-2 .player-status>p').style.fontWeight = '300';
    document.querySelector('.player-1 .player-status>p').style.fontWeight = '100';
  }
}

function resetAllCount() {
  globalEltP1.innerHTML = 0;
  globalEltP2.innerHTML = 0;
  roundEltP1.innerHTML = 0;
  roundEltP2.innerHTML = 0;
}

function newGame() {
  //Start from 0
  resetAllCount();

  //Initialize players
  player1 = new Player(true);
  player2 = new Player(false);

  //Initialize dice image
  diceImgElt.src = 'images/dice-1.png';

  //Set background
  setBackground();
}

function rollDice() {
  diceRoll = Math.floor(Math.random() * 6) + 1;
  diceImgElt.src = `images/dice-${diceRoll}.png`;
  addingResult();
}

function switchPlayers() {
  if (player1.playingNow) {
    //reset round count
    player1.roundCount = 0;
    roundEltP1.innerHTML = player1.roundCount;
    //switch player
    player2.playingNow = true;
    player1.playingNow = false;
  } else if (player2.playingNow) {
    //reset round count
    player2.roundCount = 0;
    roundEltP2.innerHTML = player2.roundCount;
    //switch player
    player1.playingNow = true;
    player2.playingNow = false;
  }
  //set background
  setBackground();
}

//Add round count in now playing player
function addingResult() {
  //Add dice number to the now playing player
  player1.playingNow ?
    player1.roundCount += diceRoll : player2.playingNow ?
    player2.roundCount += diceRoll : false;
  //and display it
  roundEltP1.innerHTML = player1.roundCount;
  roundEltP2.innerHTML = player2.roundCount;

  //If dice number = 1, round = 0 and turn to the next player
  diceRoll == 1 ? switchPlayers() : false;

}

//Add round count in global count
function keepingResult() {
  //Hold result and display it
  player1.playingNow ?
    player1.globalCount += player1.roundCount : player2.playingNow ?
    player2.globalCount += player2.roundCount : false;
  globalEltP1.innerHTML = player1.globalCount;
  globalEltP2.innerHTML = player2.globalCount;

  switchPlayers();

  //Check if there is a winner, and start a new game
  if (player1.globalCount >= 100) {
    alert(`WE'VE GOT A WINNER !\nPLAYER 1 wins with ${player1.globalCount} against ${player2.globalCount} for Player 2\nNew Game Started.`);
    newGame();
  } else if (player2.globalCount >= 100) {
    alert(`WE'VE GOT A WINNER !\nPLAYER 2 wins with ${player2.globalCount} against ${player1.globalCount} for Player 1\nNew Game Started.`);
    newGame();
  }

}
//
//////////////////


/////////////////
//EVENTS

//new game
newGameElt.addEventListener('click', newGame);

//rolling dice
rollDiceElt.addEventListener('click', rollDice);

//Hold result in global count
holdRoundElt.addEventListener('click', keepingResult);
//
//////////////////
