// globals
let playerSelection;
let computerSelection;
let gameCount = 0;
let playerWins = 0;
let computerWins = 0;

game();

// randomly generate cpu choice
function getComputerChoice() {
  let computerChoice;
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
      computerChoice = "idk";
  }
  return computerChoice;
}

// eval function
function playRound(playerSelection, computerSelection) {
  let outputMessage;
  let roundMessage;

  if (playerSelection == computerSelection) {
    roundMessage = `TIE! Both chose ${playerSelection}`;
  } else {
    switch (playerSelection) {
      case "rock":
        if (computerSelection == "scissors") {
          playerWins++;
          roundMessage = `Player wins: ${playerSelection} beats ${computerSelection}`;
        }
        if (computerSelection == "paper") {
          computerWins++;
          roundMessage = `Computer wins: ${computerSelection} beats ${playerSelection}`;
        }
        break;
      case "paper": {
        if (computerSelection == "scissors") {
          computerWins++;
          roundMessage = `Computer wins: ${computerSelection} beats ${playerSelection}`;
        }
        if (computerSelection == "rock") {
          playerWins++;
          roundMessage = `Player wins: ${playerSelection} beats ${computerSelection}`;
        }
        break;
      }
      case "scissors": {
        if (computerSelection == "rock") {
          computerWins++;
          roundMessage = `Computer wins: ${computerSelection} beats ${playerSelection}`;
        }
        if (computerSelection == "paper") {
          playerWins++;
          roundMessage = `Player wins: ${playerSelection} beats ${computerSelection}`;
        }
        break;
      }
    }
  }
  outputMessage = `Games played: ${gameCount}\n${roundMessage}\nPlayer: ${playerWins} vs Computer: ${computerWins}\n`;
  console.log(outputMessage);
  return outputMessage;
}

// point of entry function
function game() {
  while (gameCount < 5) {
    playerSelection = prompt("Choose rock, paper or scissors").toLowerCase();
    if (playerSelection == "rock" || playerSelection == "scissors" || playerSelection == "paper") {
      gameCount++;
      computerSelection = getComputerChoice().toLowerCase();
      playRound(playerSelection, computerSelection);
    }
  }

  // after 5 rounds:
  if (playerWins > computerWins) {
    console.log("PLAYER WINS!");
  } else if (computerWins > playerWins) {
    console.log("COMPUTER WINS!");
  } else {
    console.log("IT'S A DRAW!");
  }
}