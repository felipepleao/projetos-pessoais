import { elements } from "./elements.js";

const {
  sectionSettings,
  sectionScore,
  countSeries,
  minutesSeries,
  secondsSeries,
  countRepetitions,
  minutesRepetitions,
  secondsRepetitions,
  buttonAddSeries,
  buttonAddTimeSeries,
  buttonRemoveTimeSeries,
  buttonRemoveSeries,
  buttonAddRepetitions,
  buttonRemoveRepetitions,
  buttonAddTimeRepetitions,
  buttonRemoveTimeRepetitions,
  buttonStart,
  buttonReset,
} = elements;

console.log(buttonStart);

//events
buttonAddSeries.addEventListener("click", addSeries);
buttonRemoveSeries.addEventListener("click", removeSeries);
buttonAddTimeSeries.addEventListener("click", addTimeSeries);
buttonRemoveTimeSeries.addEventListener("click", removeTimeSeries);
buttonAddRepetitions.addEventListener("click", addRepetitions);
buttonRemoveRepetitions.addEventListener("click", removeRepetitions);
buttonAddTimeRepetitions.addEventListener("click", addTimeRepetitions);
buttonRemoveTimeRepetitions.addEventListener("click", removeTimeRepetitions);
buttonStart.addEventListener("click", startSettings);
buttonReset.addEventListener("click", resetSettings)

//functions
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

function addRepetitions() {
  let repetitions = parseInt(countRepetitions.textContent);
  repetitions++;
  countRepetitions.textContent = String(repetitions).padStart(2, "0");
}

function removeRepetitions() {
  let repetitions = parseInt(countRepetitions.textContent);
  --repetitions;
  repetitions > 0
    ? (countRepetitions.textContent = String(repetitions).padStart(2, "0"))
    : null;
}

function addTimeRepetitions() {
  let minutes = Number(minutesRepetitions.textContent);
  let seconds = Number(secondsRepetitions.textContent);
  seconds += 30;

  if (seconds < 60) {
    secondsRepetitions.textContent = seconds;
  } else if (minutes < 9) {
    secondsRepetitions.textContent = "00";
    minutes++;
    minutesRepetitions.textContent = minutes;
  }
}

function removeTimeRepetitions() {
  let minutes = Number(minutesRepetitions.textContent);
  let seconds = Number(secondsRepetitions.textContent);

  if (minutes > 0) {
    seconds -= 30;
    if (seconds < 0) {
      seconds = 30;
      --minutes;
      minutesRepetitions.textContent = minutes;
    }
    secondsRepetitions.textContent = String(seconds).padStart(2, "0");
  }
}

function startSettings() {
  toggleCard()
}

function resetSettings() {
  
  toggleCard()
}

function toggleCard() {
  sectionSettings.classList.toggle("hidden")
  sectionScore.classList.toggle("hidden")
}