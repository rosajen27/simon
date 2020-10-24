var gamePattern = [];

var buttonColors = ["red", "blue", "green", "yellow"];

function nextSequence() {
    // generate a new random number between 0 and 3
    var randomNumber = Math.floor(Math.random() * 4);
    console.log(randomNumber);

    // select a random color from the buttonColors array
    var randomChosenColor = buttonColors[randomNumber];
    console.log(randomChosenColor);

    // add the new randomChosenColor to the end of the gamePattern
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);


}