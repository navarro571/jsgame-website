import { RandomArray } from "./utils.js";

const resultTxt = document.querySelector(".result-text");
const playerImg = document.querySelector("#playerimg");
const machineImg = document.querySelector("#machineimg");
const cover = document.querySelector(".cover");

const options = ["stone", "paper", "scissor"];

const GameRules = {
  stone: {
    win: ["scissor"],
    tie: ["stone"],
    gameover: ["paper"],
  },
  paper: {
    win: ["stone"],
    tie: ["paper"],
    gameover: ["scissor"],
  },
  scissor: {
    win: ["paper"],
    tie: ["scissor"],
    gameover: ["stone"],
  },
};

export function play(action) {
  const playerOption = GameRules[options[action]];
  const machineOption = RandomArray(options);

  playerImg.src = `./assets/option${action}.png`;
  machineImg.src = `./assets/option${options.indexOf(machineOption)}.png`;

  if (machineOption == playerOption.win) result("Ganaste!");
  else if (machineOption == playerOption.tie) result("Empate!");
  else if (machineOption == playerOption.gameover) result("Perdiste!!");

  cover.classList.add("active-cover");
}

export function reset() {
  playerImg.src = "./assets/question.png";
  machineImg.src = "./assets/question.png";
  resultTxt.textContent = "Resultado";
  cover.classList.remove("active-cover");
}

function result(result) {
  resultTxt.textContent = result;
}
