const choices = ["rock", "paper", "scissors"];

function getHumanChoice() {
  var humanChoice = prompt("enter choice");
  return humanChoice;
}

function getComputerChoice() {
  var computerChoice = choices[Math.floor(Math.random() * 10) % 3];
  return computerChoice;
}

function check(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("Try again");
  } else if (humanChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("You won!");
    } else {
      console.log("You lost!");
    }
  } else if (humanChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("You Won!");
    } else {
      console.log("You Lost!");
    }
  } else if (humanChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("You Won!");
    } else {
      console.log("You Lost!");
    }
  } else {
    console.log("invalid input, try again");
  }
}

var humanChoice = getHumanChoice();
var computerChoice = getComputerChoice();

console.log("You chose " + humanChoice);
console.log("The computer chose " + computerChoice);
check(humanChoice, computerChoice);
