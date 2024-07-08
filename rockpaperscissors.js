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
let winner = false;

//play single round
const container = document.createElement("div");

const rock = document.createElement("button");
rock.textContent = "Rock";

const paper = document.createElement("button");
paper.textContent = "Paper";

const scissors = document.createElement("button");
scissors.textContent = "Scissors";

const body = document.querySelector("body");
body.appendChild(container);
container.appendChild(rock);
container.appendChild(paper);
container.appendChild(scissors);

const humanScoreContainer = document.createElement("div");
const computerScoreContainer = document.createElement("div");


const humanScoreLabel = document.createElement("div");
const computerScoreLabel = document.createElement("div");
const humanScoreNum = document.createElement("div");
const computerScoreNum = document.createElement("div");


body.appendChild(humanScoreContainer);
body.appendChild(computerScoreContainer);
humanScoreContainer.appendChild(humanScoreLabel);
computerScoreContainer.appendChild(computerScoreLabel)
humanScoreContainer.appendChild(humanScoreNum);
computerScoreContainer.appendChild(computerScoreNum);

humanScoreLabel.textContent = "Your Score:  ";
computerScoreLabel.textContent = "Computer Score:  ";

humanScoreNum.textContent = "0";
computerScoreNum.textContent = "0";

humanScoreContainer.style.display = "flex";
computerScoreContainer.style.display = "flex";
humanScoreContainer.style.gap = "5px";
computerScoreContainer.style.gap = "5px";

const result = document.createElement("div");
container.appendChild(result);

rock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});

paper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});

scissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});

function playRound(humanChoice, computerChoice){
    if (winner === true) {
        return 0;
    }
    if (humanChoice === 'rock' && computerChoice === 'paper')
    {
        result.textContent = 'You lose! Paper beats rock!';
        computerScore++;
    }
    else if (humanChoice === 'rock' && computerChoice === 'scissors')
    {
        result.textContent = 'You win! Rock beats scissors!';
        humanScore++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'rock')
    {
        result.textContent = "You win! Paper beats rock!";
        humanScore++;
    }
    else if (humanChoice === 'paper' && computerChoice === 'scissors')
    {
        result.textContent = "You lose! Scissors beats paper!";
        computerScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'rock')
    {
        result.textContent = "You lose! Rock beats scissors!";
        computerScore++;
    }
    else if (humanChoice === 'scissors' && computerChoice === 'paper')
    {
        result.textContent = "You win! Scissors beats paper!";
        humanScore++;
    }
    else {
        result.textContent = "Tie.";
    }

    humanScoreNum.textContent = humanScore;
    computerScoreNum.textContent = computerScore;

    if (humanScore === 5 ) {
        result.textContent = "You win!"
        winner = true;
        return;
    } 
    else if (computerScore === 5) {
        result.textContent = "Computer wins!"
        winner = true;
        return;
    }
    return winner;
}


//const humanSelection = getHumanChoice();
//const computerSelection = getComputerChoice();

//playRound(humanSelection, computerSelection);

//play entire game
// function playGame() {
//     while (roundCount < 5) {
//         humanSelection = getHumanChoice();
//         computerSelection = getComputerChoice();
//         playRound(humanSelection, computerSelection);
//     }
//     if(humanScore > computerScore){
//         return console.log("You win!");
//     }
//     else if (humanScore < computerScore){
//         return console.log("You lose!");
//     }
//     else {
//         return console.log("Tie.");
//     }
// }

// playGame();