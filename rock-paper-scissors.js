// Get the Computer choice
function getComputerChoice() {
    const range = Math.random() * 3;
    if (range <1) {return "Rock"}
    else if (range <1) {return "Scissors"}
    else { return "Paper"}
}
