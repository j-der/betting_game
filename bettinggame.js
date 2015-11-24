
$(document).ready(function() {
  $('#gamble').on('click', function() {

    var playerBet = $("#bet").val();
    var playerGuess = $("#guess").val();
    var playerBet = +(playerBet); //way to do parseInt better is with the ' + '
    var playerGuess = +(playerGuess);
    var playerMoney = 50;

    var showPlayerGamble = $('<p>You bet $' + playerBet + ' on the number ' + playerGuess + '.</p>');

    var randomNumber = $('<p>The drawn number is ' + Math.floor(Math.random() * 10 + 1) + '.</p>');

    $('#status_update').append(showPlayerGamble);

    $('#reveal').on('click', function() {
    $('#show_number').append(randomNumber);


if(playerGuess == randomNumber) {
      playerMoney = playerMoney + (playerBet * 2);


      alert("You doubled your bet! You now have $" + playerMoney);
    }
    else if(playerGuess == (randomNumber + 1) || playerGuess == (randomNumber - 1)) {
        playerMoney = playerMoney;
        alert("Close! You keep the money you bet. You now have $" + playerMoney)
      }
    else {
      playerMoney = (playerMoney - playerBet);
      alert("You lose. Gambling is dangerous. You now have $" + playerMoney)
    }

    });





    });

    // alert("Uh-oh, you're broke!")
  // });
});




