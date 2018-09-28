var pigDice = {
    player1: 0,
    player2: 0,
    currentScore: 0,
    activePlayer: 1,

    rollDice: function() {
      var roll = math.floor(math.random() * 6) + 1 //to round off the number passed as parameter to its nearest integer and return the number float

      if (roll === 1) {
        this.currentScore = 0;
        this.switchActivePlayer();
      } else {
        this.currentScore += roll;
      }
      return roll;
      // to show when the player to continue making their move s or switch
    },

    switchActivePlayer: function() {
      if (this.activePlayer === 1)
        this.player += this.currentScore;
      this.activePlayer = 2;
    }
    else {
      this.player += this.currentScore;
      this.activePlayer = 1;
    } // this is to show what happens when the players has been switched
  },
  hold: function() {
    this.switchActivePlayer();
    this.currentScore = 0;
  }
}; // the hold function helps to add on the marks of the polayer

$(document).ready(function() { // when the document is ready to
  var game = object.create(pigDice);
  var player1wins = 0;
  var player2wins = 0;
  var checkPlayer = function() {
    var player = game.activePlayer;
    if (player === 1) {
      $("#player2buttons").hide();
      $("#player1buttons").show();
    } else {
      $("#player1buttons").hide();
      $("#player2buttons").show()
    }//assigning the buttons what to do what to do whilwe clicked on
  };
  checkPlayer();


  var playerRoll = function() {
      var dice = game.rollDice();

      $("#dice").text(dice);
      changePlayerAndRefreshScores();
  }
  $("button#roll").click(function() {
        playerRoll();
    });

    $("button#hold").click(function() {
        game.hold();
        changePlayerAndRefreshScores();
    });

    $(document).keypress(function(event) {
     if ((event.which == 122) && (game.activePlayer === 1)) {
         playerRoll();
     } else if ((event.which == 47) && (game.activePlayer == 2)) {
         playerRoll();
     } else if ((event.which == 32)) {
         game.hold();
         changePlayerAndRefreshScores();
     }
 });
 var changePlayerAndRefreshScores = function() {
      winCheck();
      refreshScores();
      checkPlayer();
  }

  var winCheck = function() {
      if (game.player1 >= 100) {
          alert("Player one wins!!");
          game = Object.create(Pig);
          player1wins += 1;
          $("#player1wins").text(player1wins);
      } else if (game.player2 >= 100) {
          alert("Player two wins!!");
          game = Object.create(Pig);
          player2wins += 1;
          $("#player2wins").text(player2wins);
      } //the function to check on the winner
      var refreshScores = function() {
            $("#player1score").text(game.player1);
            $("#player2score").text(game.player2);
            $("#current").text(game.currentScore);
        }
});
