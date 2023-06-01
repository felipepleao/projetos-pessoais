//controls
// import SerieCreate from "./createserie.js";

// const serieCreate = SerieCreate({});

export default function Controls({
  countSeries,
  minutesSeries,
  secondsSeries,
  inputSerie,
  sectionSettings,
  sectionScore,
}) {
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
    // serieCreate.initializeSeries();
    // createTimeCountdown();
    toggleCard();
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

  return {
    addSeries,
    removeSeries,
    addTimeSeries,
    removeTimeSeries,
    startSettings,
    resetSettings,
  };
}
