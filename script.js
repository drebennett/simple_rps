let playerScore = 0
let computerScore = 0
let roundWinner = ''


function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++
        roundWinner = 'you'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    console.log("computer selection" + computerSelection);
    displayResult(roundWinner);
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

//dont need yet for easom 
function isGameOver() {
    return playerScore === 5 || computerScore === 5
}


//for Easom 
//for (let i = 0; i <5; i++){
//let playerChoice = prompt("rock, paper, or scissors? ").toUpperCase()
//   let playerChoice = "ROCK"
//   let compChoice = getComputerChoice()
//   console.log("PLAYER: " + playerChoice)
//   console.log("COMP CHOICE: " + compChoice)
//   playRound(playerChoice, compChoice)
//   console.log("Player score: " + playerScore)
//   console.log("Computer score: " + computerScore)
//}

//front end 



window.onload = function() {

    const paperBtn = document.querySelector('#paperBtn');
    paperBtn.addEventListener('click', () => {
        console.log("clicked paper button");
        playRound('PAPER', getComputerChoice());
    });

    const rockBtn = document.querySelector('#rockBtn');
    rockBtn.addEventListener('click', () => {
        console.log("clicked rock button");
        playRound('ROCK', getComputerChoice());
    });

    const scissorBtn = document.querySelector('#scissorBtn');
    scissorBtn.addEventListener('click', () => {
        console.log("clicked scissor button");
        playRound('SCISSORS', getComputerChoice());
    });
}



function displayResult(roundWinner) {
    console.log("round winner: " + roundWinner);
    const resultContainer = document.querySelector('#resultContainer');
    resultContainer.style.color = "pink";
    //roundWinner.fontcolor("blue");
    resultContainer.textContent = roundWinner;
    //     const content = document.createElement('div');
    //     content.classList.add('content');
    //     content.textContent = 'Answer goes here';
    //     resultContainer.appendChild(content);
}