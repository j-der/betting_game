$(document).ready(function() {
  $('#gamble').on('click', function() {

    var playerBet = $("#bet").val();
    var playerGuess = $("#guess").val();
    var playerBet = +(playerBet); //way to do parseInt better is with the ' + '
    var playerGuess = +(playerGuess);
    var playerMoney = 50;

    var showPlayerGamble = $('<p>You bet $' + playerBet + ' on the number ' + playerGuess + '.</p>');

    var randomNumber = $('<p>The drawn number is ' + Math.floor(Math.random() * 10 + 1) + '.</p>');


    if(playerBet < 5 || playerBet > 10) {
      alert("Please bet between $5 to $10.");
    }

    else if(playerGuess < 1 || playerGuess > 10) {
      alert("Invalid guess. Please choose a number between 1 and 10.");
    }

    else {

      $('#status_update').append(showPlayerGamble);
      // $(this).after(showPlayerGamble);

      $('#reveal').on('click', function() {
        $('#show_number').append(randomNumber);

        if(playerGuess == randomNumber) {
          playerMoney = playerMoney + (playerBet * 2);
          var winAlert = $('<p>You doubled your bet! You now have $' + playerMoney + '</p>');
        }

        else if(playerGuess == (randomNumber + 1) || playerGuess == (randomNumber - 1)) {
            playerMoney = playerMoney;
            alert("Close! You keep the money you bet. You now have $" + playerMoney)
          }

        else {
          playerMoney = (playerMoney - playerBet);
          alert("You lose. Gambling is dangerous. You now have $" + playerMoney)
        }

          $('#show_number').append('<button id=button2>Play again?</button>');
          $('#button2').on('click', function(event){
            $('#bet').val('');
            $('#guess').val('');
            $('#status_update').hide();
            $('#show_number').hide();
            console.log('button2 clicked!');
          });

      });
  }

  });

});




