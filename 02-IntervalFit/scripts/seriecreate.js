export default function CreateSeries({
  countSeries,
  inputSerie,
}) {

  function serieCreate() {
    let countS = Number(countSeries.textContent);
    let checkboxArray = [];

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

  return { serieCreate };
}
