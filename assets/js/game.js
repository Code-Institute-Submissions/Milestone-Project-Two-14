var win = 0;
var lose = 0;
var draw = 0;
var userPick;
var dayNight = 0;

                //Rock covered by Paper - lose
                //Rock smashes Scissors - win
                //Rock crushes Lizard - win
                //Rock vaporized by Spock - lose

                //Paper covers Rock - win
                //Paper cut by Scissors - lose
                //Paper eaten by Lizard - lose
                //Paper disproves Spock - win

                //Scissors cuts Paper - win
                //Scissors smashed by Rock - lose
                //Scissors decapitates Lizard - win
                //Scissors smashed by Spock lose

                //Lizard crushed by Rock - lose
                //Lizard eats Paper - win
                //Lizard decapitated by Scissors - lose
                //Lizard poisons Spock - win

                //Spock vaporizes Rock - win
                //Spock disproved by Paper - lose
                //Spock smashes Scissors - win
                //Spock poised by Lizard - lose


//rock click
$('.button_rock').click(function() {
    userPick = 1;
    var Hal9000Pick = Math.floor(Math.random() * 5 + 1);//Hal9000 picks
    // rock vs Hal9000 paper
    if (Hal9000Pick === 2) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-lose">You Lost!</span><br>Hal9000 chose Paper.<br>Rock covered by Paper!</p>').fadeIn(300);
            lose++;
            $('#lose-score').html('').append(lose);
        });
    // rock vs Hal9000 scissors
    } else if (Hal9000Pick === 3) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-win">You Won!</span><br>Hal9000 chose Scissors.<br>Rock smashes Scissors!</p>').fadeIn(300);
            win++;
            $('#win-score').html('').append(win);
        });
    // rock vs Hal9000 lizard
    } else if (Hal9000Pick === 4) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-win">You Won!</span><br>Hal9000 chose Lizard.<br>Rock crushes Lizard!</p>').fadeIn(300);
            win++;
            $('#win-score').html('').append(win);
        });
    // rock vs Hal9000 spock
    } else if (Hal9000Pick === 5) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-lose">You Lost!</span><br>Hal9000 chose Spock.<br>Rock vaporized by Spock!</p>').fadeIn(300);
            lose++;
            $('#lose-score').html('').append(lose);
        });
    //draw case, rock vs rock
    } else {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-draw">Draw!</span><br>Hal9000 chose Rock too!</p>').fadeIn(300);
            draw++;   
            $('#draw-score').html('').append(draw);
        });

    }
});//end of rock click

//paper click
$('.button_paper').click(function() {
    userPick = 2;
    var Hal9000Pick = Math.floor(Math.random() * 5 + 1);//Hal9000 picks
    // paper vs Hal9000 rock
    if (Hal9000Pick === 1) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-win">You Won!</span><br>Hal9000 chose Rock.<br>Rock covered by Paper!</p>').fadeIn(300);
            win++;
            $('#win-score').html('').append(win);
        });
    // paper vs Hal9000 scissors
    } else if (Hal9000Pick === 3) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-lose">You Lost!</span><br>Hal9000 chose Scissors.<br>Paper cut by Scissors!</p>').fadeIn(300);
            lose++;
            $('#lose-score').html('').append(lose);
        });
    // paper vs Hal9000 lizard
    } else if (Hal9000Pick === 4) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-lose">You Lost!</span><br>Hal9000 chose Lizard.<br>Paper eaten by Lizard!</p>').fadeIn(300);
            lose++;
            $('#lose-score').html('').append(lose);
        });
    // paper vs Hal9000 spock
    } else if (Hal9000Pick === 5) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-win">You Won!</span><br>Hal9000 chose Spock.<br>Paper disproves Spock!</p>').fadeIn(300);
            win++;
            $('#win-score').html('').append(win);
        });
    //draw case, paper vs paper
    } else {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-draw">Draw!</span><br>Hal9000 chose paper too!</p>').fadeIn(300);
            draw++;
            $('#draw-score').html('').append(draw);
        });
    }
});//end of paper click

//scissors click
$('.button_scissors').click(function() {
    userPick = 3;
    var Hal9000Pick = Math.floor(Math.random() * 5 + 1);//Hal9000 picks
    // scissors vs Hal9000 rock
    if (Hal9000Pick === 1) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-lose">You Lost!</span><br>Hal9000 chose Rock.<br>Scissors smashed by Rock!</p>').fadeIn(300);
            lose++;
            $('#lose-score').html('').append(lose);
        });
    // scissors vs Hal9000 paper
    } else if (Hal9000Pick === 2) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-win">You Won!</span><br>Hal9000 chose Paper.<br>Scissors cuts Paper!</p>').fadeIn(300);
            win++;
            $('#win-score').html('').append(win);
        });
    // scissors vs Hal9000 lizard
    } else if (Hal9000Pick === 4) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-win">You Won!</span><br>Hal9000 chose Lizard.<br>Scissors decapitates Lizard!</p>').fadeIn(300);
            win++;
            $('#win-score').html('').append(win);
        });
    // scissors vs Hal9000 spock
    } else if (Hal9000Pick === 5) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-lose">You Lost!</span><br>Hal9000 chose Spock.<br>Scissors smashed by Spock!</p>').fadeIn(300);
            lose++;
            $('#lose-score').html('').append(lose);
        });
    //draw case, scissors vs scissors
    } else {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-draw">Draw!</span><br>Hal9000 chose scissors too!</p>').fadeIn(300);
            draw++;
            $('#draw-score').html('').append(draw);
        });

    }
});//end of scissors click

//lizard click
$('.button_lizard').click(function() {
    userPick = 4;
    var Hal9000Pick = Math.floor(Math.random() * 5 + 1);//Hal9000 picks
    // lizard vs Hal9000 rock
    if (Hal9000Pick === 1) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-lose">You Lost!</span><br>Hal9000 chose Rock.<br>Lizard crushed by Rock!</p>').fadeIn(300);
            lose++;
            $('#lose-score').html('').append(lose);
        });
    // lizard vs Hal9000 paper
    } else if (Hal9000Pick === 2) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-win">You Won!</span><br>Hal9000 chose Paper.<br>Lizard eats Paper!</p>').fadeIn(300);
            win++;
            $('#win-score').html('').append(win);
        });
    // lizard vs Hal9000 scissors
    } else if (Hal9000Pick === 3) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-lose">You Lost!</span><br>Hal9000 chose Scissors.<br>Lizard decapitated by Scissors!</p>').fadeIn(300);
            lose++;
            $('#lose-score').html('').append(lose);
        });
    // lizard vs Hal9000 spock
    } else if (Hal9000Pick === 5) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-win">You Won!</span><br>Hal9000 chose Spock.<br>Lizard poisons Spock!</p>').fadeIn(300);
            win++;
            $('#win-score').html('').append(win);
        });
    //draw case, scissors vs scissors                
    } else {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-draw">Draw!</span><br>Hal9000 chose lizard too!</p>').fadeIn(300);
            draw++;
            $('#draw-score').html('').append(draw);
        });
    }
});//end of lizard click

//spock click
$('.button_spock').click(function() {
    userPick = 5;
    var Hal9000Pick = Math.floor(Math.random() * 5 + 1);//Hal9000 picks
    // spock vs Hal9000 rock
    if (Hal9000Pick === 1) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-win">You Won!</span><br>Hal9000 chose Rock.<br>Spock vaporizes Rock!</p>').fadeIn(300);
            win++;
            $('#win-score').html('').append(win);
        });
    // spock vs Hal9000 paper
    } else if (Hal9000Pick === 2) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-lose">You Lost!</span><br>Hal9000 chose Paper.<br>pock disproved by Paper!</p>').fadeIn(300);
            lose++;
            $('#lose-score').html('').append(lose);
        });
    // spock vs Hal9000 scissors
    } else if (Hal9000Pick === 3) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-win">You Won!</span><br>Hal9000 chose Scissors.<br>Spock smashes Scissors!</p>').fadeIn(300);
            win++;
            $('#win-score').html('').append(win);
        });
    // spock vs Hal9000 lizard
    } else if (Hal9000Pick === 4) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-lose">You Lost!</span><br>Hal9000 chose Lizard.<br>Spock poised by Lizard!</p>').fadeIn(300);
            lose++;
            $('#lose-score').html('').append(lose);
        });
    //draw case, spock vs spock
    } else {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('<p><span class="span-result-draw">Draw!</span><br>Hal9000 chose Spock too!</p>').fadeIn(300);
            draw++;
            $('#draw-score').html('').append(draw);
        });
    }
});//end of spock click

// reset button
$('.reset_button').click(function() {
    $('#lose-score').html('').append('000').fadeIn(300);// reset score boards
    $('#win-score').html('').append('000').fadeIn(300);
    $('#draw-score').html('').append('000').fadeIn(300);
    draw = 0; // reset variables 
    win = 0;
    lose = 0;
    $('#message-area').html('').append('<p class="play-a-game">Would You Like<br>To Play A Game?</p>').fadeIn(300); // changes text in results area
});

// day/night button
$(document).ready(function(){
  $('.day-night-button').click(function(){
    if (dayNight === 0) { //test for day or night, 0 = day, 1 = night
        $('body').css('background-color', 'rgba(50, 50, 50 ,1)'); // changes body colour
        $('.score-board-label').css({'color': 'rgba(221, 200, 162, 1)'}); // changes colour of text above scoreboards 
        $('.day-night-button').prop('value', 'Day'); // changes button value

        dayNight++;
    } else {
        $('body').css('background-color', 'rgba(255, 243, 176 ,1)');
        $('.score-board-label').css({'color': 'rgba(0, 0, 0, 1)'});
        $('.day-night-button').prop('value', 'Night');

        dayNight--;
        }
    });
});

$(document).ready(function(){
  $('.instructions-button').click(function(){
    
    Swal.fire({
			title: 'How to play',
			html:
                "<p>Rock, Paper, Scissors, Lizard, Spock is an expansion on the game Rock, Paper, Scissors.</p>" +
                "<p>Invented by <a href='https://bigbangtheory.fandom.com/wiki/Sam_Kass'>Sam Kass</a> and played in the hit TV series <a href='https://bigbangtheory.fandom.com/wiki/Rock,_Paper,_Scissors,_Lizard,_Spock'>The Big Bang Theory</a>. Follow the link for Sheldon Cooper's full instructions on the game.</p>" +
                "<p>To play the game simply click on Rock, Paper, Scissors, Lizard or Spock. Once you've made your choice the computer will then pick one.</p>" +
				"<p>Then depending on the out come you will receive a win, lose or draw</p>",
			confirmButtonText: `Lets Play`,
			confirmButtonColor: '#CD4134',
			allowOutsideClick: true,
			width: 600,
			padding: '3em',
			background: '#fff',
			backdrop: `rgba(0,0,0,0.5)`,
		});
    });
});