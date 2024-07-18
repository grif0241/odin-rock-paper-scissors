// global variables
let playerSelection;
let computerSelection;
let gameCount = 0;
let playerWins = 0;
let computerWins = 0;

playGame();

// randomly generate cpu choice
function getComputerChoice() { // String
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
  return computerChoice.toLowerCase();
}

// get humanChoice
function getHumanChoice() { // String
  const playerChoice = prompt("Choose rock, paper or scissors").toLowerCase();
  if (playerChoice == "rock" || playerChoice == "scissors" || playerChoice == "paper") {
    return playerChoice;
  } else {
    return null;
  }
}

// eval function
function playRound(playerSelection, computerSelection) { // String
  let outputMessage;
  let roundMessage;
  gameCount = gameCount + 1;

  // check if tie
  if (playerSelection == computerSelection) {
    roundMessage = `TIE! Both chose ${playerSelection}`;
  } else {
    // switch on player selection
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
  // print output message after a round
  outputMessage = `Games played: ${gameCount}\n${roundMessage}\nPlayer: ${playerWins} vs Computer: ${computerWins}\n`;
  console.log(outputMessage);
  return outputMessage;
}

// point of entry function
function playGame() { // Undefined
  while (gameCount < 5) {
    playerSelection = getHumanChoice();
    computerSelection = getComputerChoice();

    // check for valid values
    if (playerSelection && computerSelection) {
      playRound(playerSelection, computerSelection);
    } else {
      playGame();
    }
  }

  // after 5 rounds:
  if (playerWins > computerWins) {
    console.log("PLAYER WINS THE MATCH!");
  } else if (computerWins > playerWins) {
    console.log("COMPUTER WINS THE MATCH!");
  } else {
    console.log("IT'S A DRAW!");
  }
}