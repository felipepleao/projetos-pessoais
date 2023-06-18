export default function CreateTimerDisplay({
  minutesSeries,
  secondsSeries,
  timerSection,
}) {
  function createTimeCountdown() {
    const divTimer = document.createAttribute("div");
    let minutes = Number(minutesSeries.textContent);
    let seconds = secondsSeries.textContent.padStart("2", "0");

    divTimer.innerHTML = `
    <div>
      <span class="minutesTimer">${minutes}</span>:<span class="secondsTimer">${seconds}</span>
    </div>
    `;
    timerSection.innerHTML = divTimer.innerHTML;

    let timerSectionHTML = countdownDiv.innerHTML;
    let minutesTimer = countdownDiv.querySelector(".minutesTimer").textContent;
    let secondsTimer = countdownDiv.querySelector(".secondsTimer").textContent;
    
    return {
      timerSectionHTML,
      minutesTimer,
      secondsTimer,
  };
  }

  return {
    createTimeCountdown,
  };
}
