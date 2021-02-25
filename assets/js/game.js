var win = 0;
var lose = 0;
var draw = 0;
var userPick;

//rock click
$('.button_rock').click(function() {
    userPick = 1;
    var computerPick = Math.floor(Math.random() * 5 + 1);//computer picks
  
    //draw case, rock vs rock
    if (computerPick === userPick) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('Draw! The Computer chose rock too!').fadeIn(300);
      
            draw++;
            $('#draw-score').html('').append(draw);
        });
    
    // rock vs AI paper
    } else if (userPick === 1 && computerPick === 2) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You lost! Computer chose Paper. Rock covered by Paper!').fadeIn(300);
      
            lose++;
            $('#lose-score').html('').append(lose);
        });

    // rock vs AI scissors
    } else if (userPick === 1 && computerPick === 3) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You won! Computer chose Scissors. Rock smashes Scissors!').fadeIn(300);
      
            win++;
            $('#win-score').html('').append(win);
        });
    
    // rock vs AI lizard
    } else if (userPick === 1 && computerPick === 4) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You won! Computer chose Lizard. Rock crushes Lizard!').fadeIn(300);
      
            win++;
            $('#win-score').html('').append(win);
        });
    
    // rock vs AI spock
    } else {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You Lost! Computer chose Spock. Rock vaporized by Spock!').fadeIn(300);
      
            lose++;
            $('#lose-score').html('').append(lose);
        });                
    }
});//end of rock click

//paper click
$('.button_paper').click(function() {
    userPick = 2;
    var computerPick = Math.floor(Math.random() * 5 + 1);//computer picks
  
    //draw case, paper vs paper
    if (computerPick === userPick) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('Draw! The Computer chose paper too!').fadeIn(300);
      
            draw++;
            $('#draw-score').html('').append(draw);
        });
    
    // paper vs AI rock
    } else if (userPick === 2 && computerPick === 1) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You won! Computer chose Rock. Rock covered by Paper!').fadeIn(300);
      
            win++;
            $('#win-score').html('').append(win);
        });

    // paper vs AI scissors
    } else if (userPick === 2 && computerPick === 3) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You Lost! Computer chose Scissors. Paper cut by Scissors!').fadeIn(300);
      
            lose++;
            $('#lose-score').html('').append(lose);
        });
    
    // paper vs AI lizard
    } else if (userPick === 2 && computerPick === 4) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You Lost! Computer chose Lizard. Paper eaten by Lizard!').fadeIn(300);
      
            lose++;
            $('#lose-score').html('').append(lose);
        });
    
    // paper vs AI spock
    } else {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You win! Computer chose Spock. Paper disproves Spock!').fadeIn(300);
      
            win++;
            $('#win-score').html('').append(win);
        });                
    }
});//end of paper click

//scissors click
$('.button_scissors').click(function() {
    userPick = 3;
    var computerPick = Math.floor(Math.random() * 5 + 1);//computer picks
  
    //draw case, scissors vs scissors
    if (computerPick === userPick) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('Draw! The Computer chose scissors too!').fadeIn(300);
      
            draw++;
            $('#draw-score').html('').append(draw);
        });
    
    // scissors vs AI rock
    } else if (userPick === 3 && computerPick === 1) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You lost! Computer chose Rock. Scissors smashed by Rock!').fadeIn(300);
      
            lose++;
            $('#lose-score').html('').append(lose);
        });

    // scissors vs AI paper
    } else if (userPick === 3 && computerPick === 2) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You won! Computer chose Paper. Scissors cuts Paper!').fadeIn(300);
      
            win++;
            $('#win-score').html('').append(win);
        });
    
    // scissors vs AI lizard
    } else if (userPick === 3 && computerPick === 4) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You won! Computer chose Lizard. Scissors decapitates Lizard!').fadeIn(300);
      
            win++;
            $('#win-score').html('').append(win);
        });
    
    // scissors vs AI spock
    } else {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You lost! Computer chose Spock. Scissors smashed by Spock!').fadeIn(300);
      
            lose++;
            $('#lose-score').html('').append(lose);
        });                
    }
});//end of scissors click

//lizard click
$('.button_lizard').click(function() {
    userPick = 4;
    var computerPick = Math.floor(Math.random() * 5 + 1);//computer picks
  
    //draw case, scissors vs scissors
    if (computerPick === userPick) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('Draw! The Computer chose lizard too!').fadeIn(300);
      
            draw++;
            $('#draw-score').html('').append(draw);
        });
    
    // lizard vs AI rock
    } else if (userPick === 4 && computerPick === 1) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You lost! Computer chose Rock. Lizard crushed by Rock!').fadeIn(300);
      
            lose++;
            $('#lose-score').html('').append(lose);
        });

    // lizard vs AI paper
    } else if (userPick === 4 && computerPick === 2) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You won! Computer chose Paper. Lizard eats Paper!').fadeIn(300);
      
            win++;
            $('#win-score').html('').append(win);
        });
    
    // lizard vs AI scissors
    } else if (userPick === 4 && computerPick === 3) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You lost! Computer chose Scissors. Lizard decapitated by Scissors!').fadeIn(300);
      
            lose++;
            $('#lose-score').html('').append(lose);
        });
    
    // lizard vs AI spock
    } else {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You won! Computer chose Spock. Lizard poisons Spock!').fadeIn(300);
      
            win++;
            $('#win-score').html('').append(win);
        });                
    }
});//end of lizard click

//spock click
$('.button_spock').click(function() {
    userPick = 5;
    var computerPick = Math.floor(Math.random() * 5 + 1);//computer picks
  
    //draw case, spock vs spock
    if (computerPick === userPick) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('Draw! The Computer chose Spock too!').fadeIn(300);
      
            draw++;
            $('#draw-score').html('').append(draw);
        });
    
    // spock vs AI rock
    } else if (userPick === 5 && computerPick === 1) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You won! Computer chose Rock. Spock vaporizes Rock!').fadeIn(300);
      
            win++;
            $('#win-score').html('').append(win);
        });

    // spock vs AI paper
    } else if (userPick === 5 && computerPick === 2) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You lost! Computer chose Paper. pock disproved by Paper!').fadeIn(300);
      
            lose++;
            $('#lose-score').html('').append(lose);
        });
    
    // spock vs AI scissors
    } else if (userPick === 5 && computerPick === 3) {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You won! Computer chose Scissors. Spock smashes Scissors!').fadeIn(300);
      
            win++;
            $('#win-score').html('').append(win);
        });
    
    // spock vs AI lizard
    } else {
        $("#message-area").fadeOut(300, function() {
            $("#message-area").html('').append('You lost! Computer chose Lizard. Spock poised by Lizard!').fadeIn(300);
      
            lose++;
            $('#lose-score').html('').append(lose);
        });                
    }
});//end of spock click