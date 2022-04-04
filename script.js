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
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    console.log("Round winner: " + roundWinner)
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
        playRound();
    });
}



function displayResult(roundWinner) {
    const resultContainer = document.querySelector('#resultContainer');
    resultContainer.style.color = "red";
    //roundWinner.fontcolor("blue");
    resultContainer.textContent = roundWinner;
    //     const content = document.createElement('div');
    //     content.classList.add('content');
    //     content.textContent = 'Answer goes here';
    //     resultContainer.appendChild(content);
}