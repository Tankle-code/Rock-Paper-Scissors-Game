// Get the Computer choice
function getComputerChoice() {
    const range = Math.random() * 3;
    if (range <1) {return "Rock"}
    else if (range <2) {return "Scissors"}
    else { return "Paper"}
}

// Get the Human choice 
function getHumanChoice() {
    let choice = prompt("Do you want to choose Rock, Scissors, or Paper?");
    if (choice) {choice = choice.trim(); return choice.at(0).toUpperCase() + choice.slice(1).toLowerCase()}
    else {return choice}
}

// Declare players score variables
let computerScore = 0;
let humanScore = 0;

// Write the logic to play a single round


function playRound() {
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice(); 
    console.log (`you chose: ${humanSelection}`);
    console.log (`computer chose: ${computerSelection}`);
    if (humanSelection === computerSelection) {
        console.log ("Tie, let's try again !")
    } else if (humanSelection === "Paper" && computerSelection ==="Rock") {humanScore++;
        console.log ("You win! Paper beats Rock")
    } else if (humanSelection=== "Paper" && computerSelection ==="Scissors") {computerScore++;
        console.log ("You lose! Scissors beats Paper") 
    } else if (humanSelection === "Scissors" && computerSelection ==="Paper") {humanScore++;
        console.log ("You win! Scissors beats Paper") 
    } else if (humanSelection === "Scissors" && computerSelection ==="Rock") {computerScore++;
        console.log ("You lose! Rock beats Scissors") 
    } else if (humanSelection === "Rock" && computerSelection ==="Paper") {computerScore++;
        console.log ("You lose! Paper beats Rock")
    } else if (humanSelection === "Rock" && computerSelection ==="Scissors") {humanScore++;
        console.log ("You win! Rock beats Scissors")
    };
    console.log (`you won ${humanScore} times!`);
    console.log (`computer won ${computerScore} times!`);
}

// Play 5 rounds
    console.log(`Round 1`); playRound();

    console.log(`\nRound 2`); playRound();

    console.log(`\nRound 3`); playRound();

    console.log(`\nRound 4`); playRound();

    console.log(`\nRound 5`); playRound();

if (humanScore>computerScore) {console.log ("you are the champion!")} 
else if (humanScore<computerScore) {console.log ("you lost to a machine, what a dissapointment!")}
else {console.log ("Tie in the End")}