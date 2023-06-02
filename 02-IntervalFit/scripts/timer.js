export default function TimerCountdown({
  minutesSeries,
  secondsSeries,
}) {
   

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

    
  

  return {
    startCountdown,
  }
}
