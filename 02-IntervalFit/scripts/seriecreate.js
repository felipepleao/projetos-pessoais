import TimerCountdown from "./timer.js";


export default function CreateSeries({ countSeries, inputSerie }) {
  let checkboxArray = [];
  function serieCreate() {
    let countS = Number(countSeries.textContent);

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
      let idCheck = checkbox.id.match(/\d+/g).join("");
      if (idCheck > 1) {
        checkbox.setAttribute("disabled", "");
      }
    });

    function completeSerie(event) {
      for (let i = 0; i < checkboxArray.length; i++) {
        let idCheck = checkboxArray[i].id.match(/\d+/g).join("");
        let eventIdCheck = event.target.id.match(/\d+/g).join("");

        if (eventIdCheck === idCheck) {
          checkboxArray[i].setAttribute("disabled", "");
          TimerCountdown.sta
          console.log("comece a contar");
          i++;
          if (i < checkboxArray.length) {
            checkboxArray[i].removeAttribute("disabled");
          } else {
            console.log('abre o modal')
          }
        }
      }
    }

    checkboxArray.forEach((checkbox) => {
      checkbox.addEventListener("click", completeSerie);
    });
  }

  return { serieCreate };
}
