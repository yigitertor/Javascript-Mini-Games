const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;

  if (randomNumber === 1) {
    computerChoice = "Rock";
  } else if (randomNumber === 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

/*function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    result = "It's a tie!";
  } else if (
    (userChoice === "Rock" && computerChoice === "Scissors") ||
    (userChoice === "Paper" && computerChoice === "Rock") ||
    (userChoice === "Scissors" && computerChoice === "Paper")
  ) {
    result = `You win! ${userChoice} beats ${computerChoice}.`;
  } else {
    result = `You lose! ${computerChoice} beats ${userChoice}.`;
  }
  resultDisplay.innerHTML = result;
}
*/

function getResult() {
  if (computerChoice === userChoice) {
    result = "🤝 It's a tie!";
  } else if (
    (computerChoice === "Rock" && userChoice === "Scissors") ||
    (computerChoice === "Paper" && userChoice === "Rock") ||
    (computerChoice === "Scissors" && userChoice === "Paper")
  ) {
    result = `❌ You lose! ${computerChoice} beats ${userChoice}.`;
  } else {
    result = `✅ You win! ${userChoice} beats ${computerChoice}.`;
  }

  resultDisplay.innerHTML = result;
}
