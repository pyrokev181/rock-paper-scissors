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
// the playerSelection and computerSelection variables win (are true)and returns
// a winner at the end of 5 loops.
// Increment one of two variables playerScore and computerScore.

// Use console.log to display round results and winner at the end. If...else
// statement to display who wins based on score.