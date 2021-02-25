var win = 0;
var lose = 0;
var draw = 0;
var playerSelect;

function rock_button() {
    playerSelect = 1;
    var computerSelect = Math.floor(Math.random() * 5 + 1);


    if (playerSelect === computerSelect) {
        function draw(){
            gameDraw = document.getElementById("message-area")
            // look at jquery changing html/css
        }
    }
}