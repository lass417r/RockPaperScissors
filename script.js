window.addEventListener("load", start);

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const winScreen = document.querySelector("#win");
const loseScreen = document.querySelector("#lose");
const drawScreen = document.querySelector("#draw");

const playerHand = document.querySelector("#player1");
const computerHand = document.querySelector("#player2");

let computer;
let player;

function start() {
  console.log(start);
  gameLoads();
}

function gameLoads() {
  console.log("gameLoad");
  winScreen.classList.add("hidden");
  loseScreen.classList.add("hidden");
  drawScreen.classList.add("hidden");
  playerHand.classList.remove("scissors");
  playerHand.classList.remove("paper");
  playerHand.classList.add("rock");
  computerHand.classList.remove("scissors");
  computerHand.classList.remove("paper");
  computerHand.classList.add("rock");
  rock.addEventListener("mousedown", chooseRock);
  paper.addEventListener("mousedown", choosePaper);
  scissors.addEventListener("mousedown", chooseScissors);
}

function computerTurn() {
  var randNum = Math.floor(Math.random() * 3) + 1;

  switch (randNum) {
    case 1:
      computer = "rock";
      break;

    case 2:
      computer = "paper";
      break;

    case 3:
      computer = "scissors";
      break;
  }
}

function chooseRock() {
  console.log("chooseRock");
  player = "rock";
  playerHand.classList.add("shake");
  computerHand.classList.add("shake");
  computerTurn();
  setTimeout(() => {
    playerHand.classList.remove("shake"), playerHand.classList.add("rock"), computerHand.classList.remove("shake"), computerHand.classList.add(computer);
  }, 1800);
  setTimeout(() => {
    chooseWinner();
  }, 2000);
}

function choosePaper() {
  console.log("choosePaper");
  player = "paper";
  playerHand.classList.add("shake");
  computerHand.classList.add("shake");
  computerTurn();
  setTimeout(() => {
    playerHand.classList.remove("shake"), playerHand.classList.add("paper"), computerHand.classList.remove("shake"), computerHand.classList.add(computer);
  }, 1800);
  setTimeout(() => {
    chooseWinner();
  }, 2000);
}

function chooseScissors() {
  console.log("chooseScissors");
  player = "scissors";
  playerHand.classList.add("shake");
  computerHand.classList.add("shake");
  computerTurn();
  setTimeout(() => {
    playerHand.classList.remove("shake"), playerHand.classList.add("scissors"), computerHand.classList.remove("shake"), computerHand.classList.add(computer);
  }, 1800);
  setTimeout(() => {
    chooseWinner();
  }, 2000);
}

function chooseWinner() {
  if (player == computer) {
    draw();
  } else if (computer == "rock") {
    return player == "paper" ? youWin() : youLose();
  } else if (computer == "paper") {
    return player == "scissors" ? youWin() : youLose();
  } else if (computer == "scissors") {
    return player == "rock" ? youWin() : youLose();
  }
}

function youWin() {
  console.log("youWin");
  winScreen.classList.remove("hidden");
  setTimeout(() => {
    gameLoads();
  }, 2000);
}
function youLose() {
  console.log("youLose");
  loseScreen.classList.remove("hidden");
  setTimeout(() => {
    gameLoads();
  }, 2000);
}
function draw() {
  console.log("draw");
  drawScreen.classList.remove("hidden");
  setTimeout(() => {
    gameLoads();
  }, 2000);
}
