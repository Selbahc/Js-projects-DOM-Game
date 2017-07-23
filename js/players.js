function Player(boolean, playerStatus) {
  this.playingNow = boolean;
  this.redCircle = function() {
    this.playingNow ? playerStatus.style.backgroundColor = '#F01D3B' : playerStatus.style.backgroundColor = 'transparent';
  }
  this.roundCount = 0;
  this.globalCount = 0;
}
