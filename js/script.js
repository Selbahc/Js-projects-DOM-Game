///////////
//FUNCTIONS
function resetAllCount() {
  globalEltP1.innerHTML = 0;
  globalEltP2.innerHTML = 0;
  roundEltP1.innerHTML = 0;
  roundEltP2.innerHTML = 0;
}

///////////////
//New Game Event
//Declaring variables for players in global scope
let player1;
let player2;

function newGame() {
  //Start from 0
  resetAllCount();

  //Initializing players
  player1 = new Player(true, isPlayingEltP1);
  player1.redCircle();
  player2 = new Player(false, isPlayingEltP2);
  player2.redCircle();
}
newGameElt.addEventListener('click', newGame);
