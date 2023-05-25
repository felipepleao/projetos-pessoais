const inputRepeat = document.querySelectorAll(".inputRepeat");
const repeatSelect = document.querySelectorAll(".repeatSelect");
const serieChange = document.querySelector(".serie-n");
let serieChangeNumber = Number(serieChange.textContent);
let finish = false;
let reset = false;

// Obtenha a barra de progresso
let progressBar = document.querySelector(".progress");

// Atualize o valor da barra de progresso

function updateProgress(value) {
  progressBar.style.width = value + "%";
}

updateProgress(0);

function repeatProgress(event) {
  if (event.target.name === "repeatOne") {
    repeatSelect[0].setAttribute("disabled", "");
    repeatSelect[1].removeAttribute("disabled");
    updateProgress(25);
  }
  if (event.target.name === "repeatTwo") {
    repeatSelect[1].setAttribute("disabled", "");
    repeatSelect[2].removeAttribute("disabled");
    updateProgress(50);
  }
  if (event.target.name === "repeatThree") {
    repeatSelect[2].setAttribute("disabled", "");
    repeatSelect[3].removeAttribute("disabled");
    updateProgress(75);
  }
  if (event.target.name === "repeatFour") {
    updateProgress(100);
    finish = true;
  }

  if (finish) {
    repeatReset();
    updateProgress(0);
    finish = false;
  }
}

function repeatReset() {
  repeatSelect[0].removeAttribute("disabled");
  repeatSelect[1].setAttribute("disabled", "");
  repeatSelect[2].setAttribute("disabled", "");
  repeatSelect[3].setAttribute("disabled", "");

  repeatSelect[0].checked = false;
  repeatSelect[1].checked = false;
  repeatSelect[2].checked = false;
  repeatSelect[3].checked = false;

  serieChangeNumber += 1;
  serieChange.textContent = serieChangeNumber;

  serieChangeNumber > 4 ? resetProgress() : null;
 
}

function resetProgress() {
  updateProgress(0);
  serieChangeNumber = 1;
  serieChange.textContent = 1;
  alert("Complete");
}

inputRepeat.forEach((input) => {
  input.addEventListener("click", repeatProgress);
});
