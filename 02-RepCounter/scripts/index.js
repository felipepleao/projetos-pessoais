import { elements } from "./elements.js";

const {
  sectionSettings,
  inputSerie,
  timerSection,
  sectionScore,
  countSeries,
  minutesSeries,
  secondsSeries,
  buttonAddSeries,
  buttonAddTimeSeries,
  buttonRemoveTimeSeries,
  buttonRemoveSeries,
  buttonStart,
  buttonReset,
} = elements;

//events
buttonAddSeries.addEventListener("click", addSeries);
buttonRemoveSeries.addEventListener("click", removeSeries);
buttonAddTimeSeries.addEventListener("click", addTimeSeries);
buttonRemoveTimeSeries.addEventListener("click", removeTimeSeries);
buttonStart.addEventListener("click", startSettings);
buttonReset.addEventListener("click", resetSettings);

//functions settings
function addSeries() {
  let series = parseInt(countSeries.textContent);
  series++;
  countSeries.textContent = String(series).padStart(2, "0");
}

function removeSeries() {
  let series = parseInt(countSeries.textContent);
  --series;
  series > 0
    ? (countSeries.textContent = String(series).padStart(2, "0"))
    : null;
}

function addTimeSeries() {
  let minutes = Number(minutesSeries.textContent);
  let seconds = Number(secondsSeries.textContent);
  seconds += 30;

  if (seconds < 60) {
    secondsSeries.textContent = seconds;
  } else if (minutes < 9) {
    secondsSeries.textContent = "00";
    minutes++;
    minutesSeries.textContent = minutes;
  }
}

function removeTimeSeries() {
  let minutes = Number(minutesSeries.textContent);
  let seconds = Number(secondsSeries.textContent);

  if (minutes > 0) {
    seconds -= 30;
    if (seconds < 0) {
      seconds = 30;
      --minutes;
      minutesSeries.textContent = minutes;
    }
    secondsSeries.textContent = String(seconds).padStart(2, "0");
  }
}

function startSettings() {
  createSerie();
  createTimeCountdown();
  toggleCard();
}

//functions progress
function createSerie() {
  let countS = Number(countSeries.textContent);
  let checkboxArray = [];

  function startCountdown() {
    const countDown = setInterval(() => {
      let minutes = Number(minutesSeries.textContent);
      let seconds = Number(secondsSeries.textContent);

      if (minutes === 0 && seconds === 0) {
        // O contador chegou a zero, faça algo aqui
        clearInterval(countDown); // Parar o temporizador
      } else {
        if (seconds === 0) {
          minutes--; // Decrementar os minutos se os segundos chegarem a zero
          seconds = secondsSeries.textContent; // Reiniciar os segundos para 59
        } else {
          seconds--; // Decrementar os segundos
        }
      }

      minutesSeries.textContent = String(minutes).padStart(2, "0");
      secondsSeries.textContent = String(seconds).padStart(2, "0");

      console.log(seconds);
    }, 1000);
  }

  for (let i = 1; i <= countS; i++) {
    const div = document.createElement("div");
    div.innerHTML = `  
    <div class="input-serie">
      <input type="checkbox" id="serieCounter${i}" />
      <label for="serieCounter${i}"><span class="input-serie-count">${i}</span>ª Série</label>
    </div>
  `;
    inputSerie.appendChild(div);

    const checkbox = document.getElementById(`serieCounter${i}`);
    checkboxArray.push(checkbox);
  }

  checkboxArray.forEach((checkbox) => {
    function seriesChecked(event) {
      let idCheckbox = checkbox.id;
      checkbox.setAttribute("disabled", "");

      if (event.target.id === idCheckbox) {
        checkbox.setAttribute("disabled", "");
        startCountdown();
      }
    }

    checkbox.addEventListener("click", seriesChecked);
  });
}

function createTimeCountdown() {
  const divTimer = document.createAttribute("div");
  let minutes = Number(minutesSeries.textContent);
  let seconds = Number(secondsSeries.textContent.padStart("2", "0"));

  divTimer.innerHTML = `
  <div>
    <span class="minutesTimer">${minutes}</span>:<span class="secondsTimer">${seconds}</span>
  </div>
  `;
  timerSection.innerHTML = divTimer.innerHTML;

  let timerSectionONE = timerSection.innerHTML
  return timerSectionONE
}

function resetSettings() {
  countSeries.textContent = "01";
  minutesSeries.textContent = "0";
  secondsSeries.textContent = "30";
  inputSerie.innerHTML = ``;
  toggleCard();
}

function toggleCard() {
  sectionSettings.classList.toggle("hidden");
  sectionScore.classList.toggle("hidden");
}