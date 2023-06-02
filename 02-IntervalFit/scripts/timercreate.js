export default function CreateTimerDisplay({
  minutesSeries,
  secondsSeries,
  timerSection,
}) {

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
  
    let timerSectionONE = timerSection.innerHTML;
    return timerSectionONE;
  }

  return {
    createTimeCountdown,
  }
  
}