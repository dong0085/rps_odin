const rock = "rock";
const paper = "paper";
const scissors = "scissors";

let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice;
let computerSelection = getComputerChoice;

function getComputerChoice() {
  let computerChoice = "";

  let random = Math.floor(Math.random() * 3) + 1;

  if (random == 1) {
    computerChoice = rock;
  } else if (random == 2) {
    computerChoice = paper;
  } else {
    computerChoice = scissors;
  }

  return `${computerChoice}`;
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, paper, or scissor?");
  humanChoice = humanChoice.toLowerCase();
  console.log(humanChoice);

  if (humanChoice == "rock") {
    return rock;
  } else if (humanChoice == "paper") {
    return paper;
  } else if (humanChoice == "scissors" || humanChoice == "scissor") {
    return scissors;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == rock) {
    switch (computerChoice) {
      case rock:
        console.log(`tie, ${humanChoice} beats ${computerChoice}`);
        displayScore();
        break;
      case paper:
        console.log(`computer win, ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        displayScore();
        break;
      case scissors:
        console.log(`human win, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        displayScore();
        break;
      default:
        console.log("error, no match result");
    }
  }
  if (humanChoice == paper) {
    switch (computerChoice) {
      case paper:
        console.log(`tie, ${humanChoice} beats ${computerChoice}`);
        displayScore();
        break;
      case scissors:
        console.log(`computer win, ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        displayScore();
        break;
      case rock:
        console.log(`human win, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        displayScore();
        break;
      default:
        console.log("error, no match result");
    }
  }
  if (humanChoice == scissors) {
    switch (computerChoice) {
      case scissors:
        console.log(`tie, ${humanChoice} beats ${computerChoice}`);
        displayScore();
        break;
      case rock:
        console.log(`computer win, ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        displayScore();
        break;
      case paper:
        console.log(`human win, ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        displayScore();
        break;
      default:
        console.log("error, no match result");
    }
  }
}

const displayScore = () =>
  console.log(`current score: human ${humanScore}, computer ${computerScore}`);

function playGame() {
  for (let i = 0; i < 4; i++) {
    playRound(humanSelection(), computerSelection());
  }
  if (humanScore > computerScore) {
    console.log("human wins this game of RPS");
  } else if (computerScore > humanScore) {
    console.log("computer wins this game of RPS");
  } else {
    console.log("game concluded, tie");
  }
}

playGame();
