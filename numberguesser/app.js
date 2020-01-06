/* 
    GAME FUNCTION
    - Player must guess a number between a min and max
    - player gets a certain amount of guesses
    - Notify player of guesses remaining
    - Notify the player of the correct answer if loose
    - Let player choose to play again

*/

// GAME VALUES
let min = 1,
    max = 10,
    winnigNum = 2,
    guessLeft = 3;

// UI Elements
const game = document.querySelector("#game"),
      minNum = document.querySelector(".min-num"),
      maxNum = document.querySelector(".max-num"),
      guessBtn = document.querySelector("#guess-btn"),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector(".message");


// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;


// Listen for guess
guessBtn.addEventListener("click", function() {
    let guess = parseInt(guessInput.value);

    // Validate input
    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, "red");
    }

    // Check if won
    if (guess === winnigNum) {
        // Disable input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.border = "2px solid green";
        // Set message
        setMessage(`${winnigNum} is correct, YOU WIN!`, 'green');
    } else {

    }
});


// setMessage
function setMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}