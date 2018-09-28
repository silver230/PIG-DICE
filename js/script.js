var pigDice = {
  player1:0,
  player2:0,
  currentScore:0,
  activePlayer:1,

  rollDice: function() {
    var roll =math.floor(math.random() *6) +1 //to round off the number passed as parameter to its nearest integer and return the number float

     if(roll ===1){
       this.currentScore =0;
       this.switchActivePlayer();
     } else {
         this.currentScore += roll;
     }
       return roll;
       // to show when the player to continue making their move s or switch
  },

  switchActivePlayer: function () {
    if ( this.activePlayer === 1)
          this.player += this.currentScore;
          this.activePlayer = 2;
  }
  else {
    this.player += this.currentScore;
    this.activePlayer = 1;
  } // this is to show what happens when the players has been switched
},
