const insertCalcule = document.getElementById("calculation-insert");
const displayResult = document.getElementById("calculation-result");
const buttonClearCE = document.querySelector(".button-clear-input");
const buttonClearC = document.querySelector(".button-clear-all");
const buttonNumbers = document.querySelectorAll(".button-number");
const buttonSpecial = document.querySelectorAll(".button-special.operator");
const buttonEqual = document.querySelector(".button-special-equal");
const buttonPercentage = document.querySelector(".button-percentage");

insertCalcule.value = 0;
displayResult.value = 0;
let actionEqual = 1;
let activeEqual = false;

// functions

function resetInput(event) {
  if (event.target.textContent === "CE") {
    insertCalcule.value = insertCalcule.value.slice(0, -1);
    insertCalcule.value == "" ? (insertCalcule.value = 0) : null;
    if (activeEqual) {
      insertCalcule.value = 0;
      displayResult.value = 0;
    }
  } else if (event.target.textContent === "C") {
    actionEqual = 1;
    insertCalcule.value = 0;
    displayResult.value = 0;
  }
}

function insertNumber(event) {
  let hasZero = insertCalcule.value == 0;
  if (hasZero) {
    insertCalcule.value = "";
  }
  insertCalcule.value += event.target.textContent;

  if (activeEqual) {
    activeEqual = false;
    insertCalcule.value = "";
    insertCalcule.value += event.target.textContent;
  }
}

function operation(event) {
  let operator = event.target.textContent;
  let selectOperator;

  switch (operator) {
    case "÷":
      selectOperator = "/";
      break;
    case "×":
      selectOperator = "*";
      break;
    case "−":
      selectOperator = "-";
      break;
    case "+":
      selectOperator = "+";
      break;
    case ",":
      selectOperator = ".";
      break;
  }

  eval(insertCalcule.value) > 0
    ? (insertCalcule.value += selectOperator)
    : null;

  if (activeEqual) {
    activeEqual = false;
    insertCalcule.value = displayResult.value;
    displayResult.value = 0;
    insertCalcule.value += selectOperator;
  }
}

function operationResult() {
  let hasZero = displayResult.value == 0;
  if (hasZero) {
    displayResult.value = "";
  }

  if (actionEqual == 1) {
    displayResult.value += eval(insertCalcule.value);
    actionEqual = 2;
  } else if (actionEqual == 2) {
    displayResult.value = 0;

    let operador =
      insertCalcule.value.indexOf("+") !== -1
        ? "+"
        : insertCalcule.value.indexOf("-") !== -1
        ? "-"
        : insertCalcule.value.indexOf("*") !== -1
        ? "*"
        : "/";

    if (eval(insertCalcule.value) > 0 && activeEqual) {
      displayResult.value = "";
      insertCalcule.value =
        eval(insertCalcule.value) +
        insertCalcule.value.slice(insertCalcule.value.indexOf(operador));
      displayResult.value += eval(insertCalcule.value);
    }
  }
  displayResult.value = eval(insertCalcule.value);
  activeEqual = true;
}

function percentage() {
  insertCalcule.value = ((insertCalcule.value.slice(0, -1)) * 1) / 100;
  displayResult.value = insertCalcule.value;
}

// events

buttonNumbers.forEach((buttonNumber) => {
  buttonNumber.addEventListener("click", insertNumber);
});

buttonSpecial.forEach((buttonSpecial) => {
  buttonSpecial.addEventListener("click", operation);
});

buttonEqual.addEventListener("click", operationResult);
buttonClearCE.addEventListener("click", resetInput);
buttonClearC.addEventListener("click", resetInput);
buttonPercentage.addEventListener("click", percentage);
