// Add a function called computerPlay that will randomly return
// the string "Rock", "Paper", or "Scissors"

// Write a function playRound() that will play a single round of R-P-S
// It should have 2 parameters - playerSelection and computerSelection
// and should return a string that declares the winner.
// Make the function's playerSelection parameter case-insensitive

// Make sure to NOT console.log the results of the game function. You want
// to return it.

// Write a function called game() that calls the playRound function inside of it
// to play a 5 round game that keeps score and reports a winner or loser at the end
// Use a for loop for this

// Use prompt() to get input from the user.

// ALGORITHM //

// Function computerPlay() return random string between 3 choices to computerSelection
//   Rock    Paper   Scissors
// Use an array to provide the function with choices.

// Function playRound () with parameter variables computerSelection from computerPlay
// function and playerSelection from prompt() function; playRound will compare the
// two variables and declare a winner or loser depending on truthiness of values
// using if..else if..else or switch statements.

// Function game() will call playRound() 5 times using a for loop and keep count of how many times
// the playerSelection and computerSelection variables win (are true) and returns
// a winner at the end of 5 loops.
// Increment one of two variables playerScore and computerScore.

// Use console.log to display round results and winner at the end. If...else
// statement to display who wins based on score. //


// Initializing the scores for the player and the computer
let playerScore = 0;
let computerScore = 0;


// Function to randomize the computer's selection
function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    let choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}


// Function to play 1 round of the game
function playRound () {
    let playerChoice = prompt("Please choose Rock, Paper, or Scissors");
    let playerSelection = playerChoice.toLowerCase();
    let computerSelection = computerPlay()
    if (playerSelection === computerSelection) {
        console.log("It's a tie.");
        } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
            computerScore++;
            console.log("You lose this round.");
        } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore++;
            console.log("You win this one!");
        } else if (playerSelection === null) {
            return "Error";
        }
}

// Function to play 5 rounds of the game
function game() {
    for (let i = 0; i < 5; i++) {
    playRound()
    }
}

// Function to tell player who won and who lost
function winnerAlert() {
    if (playerScore > computerScore) {
        console.log(`You win the game! Your score was ${playerScore}. The computer's score was ${computerScore}.`);
    } else if (playerScore === computerScore) {
        console.log(`You tied the computer! Your score was ${playerScore}. The computer's score was ${computerScore}.`)
    } else {
        console.log(`You have lost. Your score was ${playerScore}. The computer's score was ${computerScore}.`);
    }
}

// Calling the main functions
game();

winnerAlert();
