var buttonColors = ["red", "blue", "green", "yellow"];

var userClickedPattern = [];
var gamePattern = [];

// variable that determines if game has started
var started = false;

// variable that determines game level
var level = 0;



// Use jQuery to detect when a keyboard key has been pressed, 
// when that happens for the first time, call nextSequence().
$(document).keypress(function () {

    if (!started) {

        // when the game has started, change h1 title to say "Level 0".
        $("#level-title").text("Level: " + level);
        nextSequence();
        started = true;
    }
});

// function that begins next level/sequence of the game
function nextSequence() {
    // increase the level by 1 every time nextSequence() is called.
    level++;
    // update the h1 with this level increase change in the value of level.
    $("#level-title").text("Level: " + level);

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
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);

    // play the sound for the button color selected
    var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
    audio.play();
}


// use jQuery to detect when any of the buttons are clicked and trigger a handler function
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

    // call checkAnswer after a user has clicked
    // and chosen their answer, passing in the index of the last answer
    // in the user's sequence
    checkAnswer(userClickedPattern[userClickedPattern.length - 1]);
});


// add animations to user clicks
function animatePress(currentColor) {

    // use jQuery to add the pressed class to the button that gets clicked
    $("#" + currentColor).addClass("pressed");

    // remove the pressed class after a 100 milliseconds
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);

}

// check the user's answer against the game sequence
function checkAnswer(currentLevel) {

    if (currentLevel === gamePattern[gamePattern.length - 1]) {
        console.log("success");
        // if the user got the most recent answer right
        // then check that they have finished their sequence
        // with another if statement
        if (userClickedPattern.length === gamePattern.length) {
            // begin nextSequence after a 1000 millisecond delay
            // clear user array
            setTimeout(function () {
                nextSequence();
                userClickedPattern.pop();
            }, 1000);
        }
    } else {
        console.log("wrong");
    }
}