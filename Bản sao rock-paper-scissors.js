// Get the Computer choice

function getComputerChoice() {
    const range = Math.floor(Math.random() * 3);
    if (range === 0) {return "ROCK"}
    else if (range === 1) {return "SCISSORS"}
    else { return "PAPER"}
}
// console.log(getComputerChoice());

// Get the Human choice

function getHumanChoice() {
    const choice = prompt("Do you want to choose ROCK, PAPER Or Scissors ?", "You have not chosen" );
    if (choice) {return choice.toLocaleUpperCase()
}   else {return choice}
}
// console.log(getHumanChoice())

// Declare the players score variables

let humanScore = 0;
let computerScore = 0;

// Write the logic to play a single round
function playRound (humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {return console.log("Tie !")}
    else if ((humanChoice === "ROCK") && (computerChoice === "SCISSORS")
        ||  (humanChoice === "SCISSORS") && (computerChoice === "PAPER")
        ||  (humanChoice === "PAPER") && (computerChoice === "ROCK")){console.log("You win!");
    return humanScore++}
    else {console.log("You lose!"); return computerScore++}
}

// Write to play 5 games
function playGame () {
    for(let i = 1; i <= 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        console.log(`Round ${i}`)
        console.log (`You chose: ${humanSelection}, Computer chose: ${computerSelection}`);
        playRound(humanSelection,computerSelection);
        console.log ("")

    }
}
playGame();

// Determine the winner
console.log (`Your score: ${humanScore}, Computer score: ${computerScore}`)
if (humanScore > computerScore) {
    console.log("Congrats! You are much smarter than Computer")}
    else if (humanScore === computerScore) {console.log ("Computer is just as good as you!")}
    else {console.log ("Computer won this game, but next game will be your game!")}
