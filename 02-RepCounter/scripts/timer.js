export default function TimerCountdown({
  countSeries,
  minutesSeries,
  secondsSeries,
  inputSerie,
}) {
 
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
  

  return {
    startCountdown,
  }
}
