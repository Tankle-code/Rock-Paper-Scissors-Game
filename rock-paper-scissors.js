// Get the Computer choice
function getComputerChoice() {
    const range = Math.random() * 3;
    if (range <1) {return "Rock"}
    else if (range <2) {return "Scissors"}
    else { return "Paper"}
}

// Get the Human choice 

// Declare players score variables
let computerScore = 0;
let humanScore = 0;

// Write the logic to play a single round

function playRound(humanSelection,computerSelection) {
   
    humanSelection = humanSelection.at(0).toUpperCase()+humanSelection.slice(1).toLowerCase();
    const roundResult = document.querySelector("#roundResult");
    if (humanSelection === computerSelection) {
        roundResult.textContent=`you chose ${humanSelection}, computer chose ${computerSelection}, \n"Tie, let's try again !"`
    } else if (humanSelection === "Paper" && computerSelection ==="Rock") {humanScore++;
         roundResult.textContent=`you chose ${humanSelection}, computer chose ${computerSelection}, \n"You win! Paper beats Rock"`
    } else if (humanSelection=== "Paper" && computerSelection ==="Scissors") {computerScore++;
         roundResult.textContent=`you chose ${humanSelection}, computer chose ${computerSelection}, \n"You lose! Scissors beats Paper"` 
    } else if (humanSelection === "Scissors" && computerSelection ==="Paper") {humanScore++;
         roundResult.textContent=`you chose ${humanSelection}, computer chose ${computerSelection}, \n"You win! Scissors beats Paper"`
    } else if (humanSelection === "Scissors" && computerSelection ==="Rock") {computerScore++;
         roundResult.textContent=`you chose ${humanSelection}, computer chose ${computerSelection}, \n"You lose! Rock beats Scissors"`
    } else if (humanSelection === "Rock" && computerSelection ==="Paper") {computerScore++;
         roundResult.textContent=`you chose ${humanSelection}, computer chose ${computerSelection}, \n"You lose! Paper beats Rock"`
    } else if (humanSelection === "Rock" && computerSelection ==="Scissors") {humanScore++;
         roundResult.textContent=`you chose ${humanSelection}, computer chose ${computerSelection}, \n"You win! Rock beats Scissors"`
    }
    
    const runningScore = document.querySelector("#runningScore");
    runningScore.textContent= `you won ${humanScore} times!, computer won ${computerScore} times!`;
    checkWinner();
}

// Play 5 rounds

    const humanSelectionButtons = document.querySelectorAll("#humanSelectionButtons button");
    humanSelectionButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const humanSelection = button.id;
            const computerSelection = getComputerChoice(); 
            playRound(humanSelection,computerSelection);
        })
    })

    // declare the champion
    function disabledButtons () {
        humanSelectionButtons.forEach((button) => {button.disabled = true}
    )
    }
    const declareWinner = document.querySelector("#declareWinner");
    function checkWinner() {
    if(humanScore === 5) {declareWinner.textContent = "You Win! \nYou are much more intelligent than computer!"; disabledButtons()}
    else if(computerScore === 5) {declareWinner.textContent = "What a pathetic! \nYou lost to a non-brain machine!"; disabledButtons()}
}

function replayGame () {
    humanScore = 0;
    computerScore = 0;
    roundResult.textContent ="";
    runningScore.textContent ="";
    declareWinner.textContent ="";
    humanSelectionButtons.forEach((button) => {button.disabled = false});
}

const resetGame = document.querySelector("#resetGame");
resetGame.addEventListener("click",() => {replayGame()});
    

