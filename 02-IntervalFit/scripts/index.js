import { elements } from "./elements.js";
import Controls from "./controls.js";
import CreateTimerDisplay from "./timercreate.js";
import CreateSeries from "./serieCreate.js";
import TimerCountdown from "./timer.js";

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

const controls = Controls({
  countSeries,
  minutesSeries,
  secondsSeries,
  inputSerie,
  sectionSettings,
  sectionScore,
});

const timerCreate = CreateTimerDisplay({
  minutesSeries,
  secondsSeries,
  timerSection,
});

const createSeries = CreateSeries({
  countSeries,
  inputSerie,
});

const timerCountdown = TimerCountdown({
  countSeries,
  minutesSeries,
  secondsSeries,
  inputSerie,
});

//events
buttonAddSeries.addEventListener("click", () => {
  controls.addSeries();
});

buttonRemoveSeries.addEventListener("click", () => {
  controls.removeSeries();
});

buttonAddTimeSeries.addEventListener("click", () => {
  controls.addTimeSeries();
});

buttonRemoveTimeSeries.addEventListener("click", () => {
  controls.removeTimeSeries();
});

buttonStart.addEventListener("click", () => {
  createSeries.serieCreate();
  controls.startSettings();
  timerCreate.createTimeCountdown();
});

buttonReset.addEventListener("click", () => {
  controls.resetSettings();
});
