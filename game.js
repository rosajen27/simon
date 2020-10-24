var userClickedPattern = [];

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

    // use jQuery to select the button with the same id as the randomChosenColor
    jQuery("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    // play the sound for the button color selected
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}

// Use jQuery to detect when any of the buttons are clicked and trigger a handler function
$(".btn").click(function () {

    // store the id of the button that got clicked
    var userChosenColor = $(this).attr("id");
    console.log(userChosenColor);

    // add the contents of the variable userChosenColor to the end of userClickedPattern
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);

    // play the sound for the button color the user clicked
    var audio = new Audio("sounds/" + userChosenColor + ".mp3");
    audio.play();
});


