// global variables
let gameCount = 0;
let playerWins = 0;
let computerWins = 0;

// event listeners and element references
const rock = document.getElementById("rock-btn");
const paper = document.getElementById("paper-btn");
const scissors = document.getElementById("scissors-btn");

const roundMsg = document.createElement("p");
const outputMsg = document.createElement("p");

rock.addEventListener('click', onButtonClick);
paper.addEventListener('click', onButtonClick);
scissors.addEventListener('click', onButtonClick);

const results = document.getElementById("results");

// randomly generate cpu choice
function getComputerChoice() {
  let computerChoice = null;
  const randomNumber = Math.ceil(Math.random() * 3);
  switch (randomNumber) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissors";
      break;
    default:
      computerChoice = null;
  }
  return computerChoice;
}

function onButtonClick(event) {
  const item = event.target;
  const playerSelection = item.dataset.name;
  const computerSelection = getComputerChoice();
  playRound(computerSelection, playerSelection);
}

// eval function
function playRound(computerSelection, playerSelection) {
  // empty round and output msg
  roundMsg.textContent = "";
  outputMsg.textContent = "";

  let outputMessage;
  let roundMessage;
  gameCount = gameCount + 1;

  // check if tie
  if (playerSelection == computerSelection) {
    roundMessage = `TIE! Both chose ${playerSelection}`;
  } else {
    // switch on player selection
    switch (playerSelection) {
      case "Rock":
        if (computerSelection == "Scissors") {
          playerWins++;
          roundMessage = `Player wins: ${playerSelection} beats ${computerSelection}`;
        }
        if (computerSelection == "Paper") {
          computerWins++;
          roundMessage = `Computer wins: ${computerSelection} beats ${playerSelection}`;
        }
        break;
      case "Paper": {
        if (computerSelection == "Scissors") {
          computerWins++;
          roundMessage = `Computer wins: ${computerSelection} beats ${playerSelection}`;
        }
        if (computerSelection == "Rock") {
          playerWins++;
          roundMessage = `Player wins: ${playerSelection} beats ${computerSelection}`;
        }
        break;
      }
      case "Scissors": {
        if (computerSelection == "Rock") {
          computerWins++;
          roundMessage = `Computer wins: ${computerSelection} beats ${playerSelection}`;
        }
        if (computerSelection == "Paper") {
          playerWins++;
          roundMessage = `Player wins: ${playerSelection} beats ${computerSelection}`;
        }
        break;
      }
    }
  }

  roundMsg.textContent = roundMessage;

  outputMessage = `Games played: ${gameCount}\nPlayer: ${playerWins} vs Computer: ${computerWins}\n`;

  if (playerWins >= 5) {
    outputMessage = "Player Wins the match!";
    disableButtons();
  }
  if (computerWins >= 5) {
    outputMessage = "Computer Wins the match!";
    disableButtons();
  }
  outputMsg.textContent = outputMessage
  results.append(roundMsg, outputMsg);
  return outputMessage;
}

// stop user inout after first to 5
function disableButtons() {
  const buttons = document.querySelectorAll("button");
  console.log(buttons);
  buttons.forEach((btn) => {
    btn.disabled = true;
  });

  // add restart
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Play again?"
  restartBtn.addEventListener('click', () => {
    location.reload();
  })
  results.appendChild(restartBtn);
}