import CreateTimerDisplay from "./timercreate.js";

const timerDisplay = CreateTimerDisplay({
  minutesSeries: document.querySelector('.minutes'),
  secondsSeries: document.querySelector('.seconds'),
  timerSection: document.querySelector('.timer-section'),
});

export default function TimerCountdown({
}) {
  console.log(timerDisplay.createTimeCountdown().minutesTimer)

    function startCountdown() {
      
      const countDown = setInterval(() => {
        let minutes = Number(minutesTimer.textContent);
        let seconds = Number(secondsTimer.textContent);

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

        minutesTimer.textContent = String(minutes).padStart(2, "0");
        secondsTimer.textContent = String(seconds).padStart(2, "0");

        console.log(seconds);
      }, 1000);
    }

    
  

  return {
    startCountdown,
  }
}
