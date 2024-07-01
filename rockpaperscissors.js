//get computer choice
function getComputerChoice() {
    n = Math.floor(Math.random() * 3)
    if (n === 2)
    {
        return "rock";
    } 
    else if (n === 1)
    {
        return "paper";
    }
    else {
        return "scissors";
    }
}
//get human choice
function getHumanChoice() {
    let humanChoice = prompt("Please enter rock, paper, or scissors.")
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors") {
        alert("Invalid input. Please type rock, paper, or scissors.");
        return getHumanChoice();
    }
    return humanChoice;
}

//declare score variables
let humanScore = 0;
let computerScore = 0;
let roundCount = 0;

//play single round
function playRound(humanChoice, computerChoice){
    roundCount++;
    if (humanChoice === 'rock' && computerChoice === 'paper')
    {
        console.log('You lose! Paper beats rock!');
        computerScore++;
        return roundCount;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors')
    {
        console.log('You win! Rock beats scissors!');
        humanScore++;
        return roundCount;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock')
    {
        console.log("You win! Paper beats rock!");
        humanScore++;
        return roundCount;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors')
    {
        console.log("You lose! Scissors beats paper!");
        computerScore++;
        return roundCount;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock')
    {
        console.log("You lose! Rock beats scissors!");
        computerScore++;
        return roundCount;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper')
    {
        console.log("You win! Scissors beats paper!");
        humanScore++;
        return roundCount;
    }
    else {
        console.log("Tie.");
        return roundCount;
    }
}

//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

//play entire game
function playGame() {
    while (roundCount < 5) {
        humanSelection = getHumanChoice();
        computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    if(humanScore > computerScore){
        return console.log("You win!");
    }
    else if (humanScore < computerScore){
        return console.log("You lose!");
    }
    else {
        return console.log("Tie.");
    }
}

playGame();