// Get the Computer choice
function getComputerChoice() {
    const range = Math.random() * 3;
    if (range <1) {return "Rock"}
    else if (range <2) {return "Scissors"}
    else { return "Paper"}
}

// Get the Human choice 
function getHumanChoice() {
    return prompt("Do you want to choose Rock, Scissors, or Paper?")
}
