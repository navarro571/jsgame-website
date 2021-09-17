const options = ["stone", "paper", "scissor"];
let playerSelection;
let machineSelection;

const resultTxt = document.querySelector("#result-text");
const playerSelectionImg = document.querySelector("#playerSelectionImg");
const machineSelectionImg = document.querySelector("#machineSelectionImg");
const cover = document.querySelector(".action-panel__cover");

function play(action){
    playerSelection = action;
    machineSelection = Math.floor(Math.random() * options.length);

    playerSelectionImg.src = "../assets/option" + action + ".png";
    machineSelectionImg.src = "../assets/option" + machineSelection + ".png";

    if(playerSelection == machineSelection) resultText("Empate!");
    else if (playerSelection == 0 && machineSelection == 2 ||
            playerSelection == 1 && machineSelection == 0 ||
            playerSelection == 2 && machineSelection == 1) resultText("Ganaste!");
    else  resultText("Perdiste!");

    cover.classList.add("active-cover");
}

function reset() {
    playerSelection = undefined;
    machineSelection = undefined;

    playerSelectionImg.src = "../assets/question.png";
    machineSelectionImg.src = "../assets/question.png";

    resultTxt.textContent = "Resultado";
    cover.classList.remove("active-cover");
}

function resultText(result) {
    resultTxt.textContent = result;
}