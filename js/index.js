import * as Game from "./game.js";

const buttonPaper = document.getElementById("btn-paper");
const buttonStone = document.getElementById("btn-stone");
const buttonScissor = document.getElementById("btn-scissor");
const buttonReset = document.getElementById("btn-reset");

buttonPaper.onclick = () => {
  Game.play(0);
};
buttonStone.onclick = () => {
  Game.play(1);
};
buttonScissor.onclick = () => {
  Game.play(2);
};
buttonReset.onclick = () => {
  Game.reset();
};
