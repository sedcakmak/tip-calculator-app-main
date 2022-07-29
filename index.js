const bill = document.getElementById("bill");
const tipButtons = document.querySelectorAll(".tip-button");
const customTip = document.getElementById("custom-tip");
const people = document.getElementById("people");
const error = document.querySelector(".error");
const total = document.getElementById("total");
const tipAmount = document.getElementById("total-tip");
const resetButton = document.querySelector(".reset");

document.body.addEventListener("input", () => {
  calculate();
  activateResetButton();
});

tipButtons.forEach((button) => {
  button.addEventListener("click", setChecked);
});

customTip.addEventListener("input", uncheckTipButtons);

people.addEventListener("input", (e) => {
  errorMessage(e);
});

resetButton.addEventListener("click", function () {
  setTimeout(function () {
    resetButton.disabled = true;
  }, 100);
});

function calculate() {
  let tipDisplay;
  let totalDisplay;

  if (document.querySelector('input[name="buttonGroup"]:checked')) {
    tipDisplay =
      (bill.value *
        Number(
          document.querySelector('input[name="buttonGroup"]:checked').value
        )) /
      100;
  } else {
    tipDisplay = (bill.value * Number(customTip.value)) / 100;
  }

  tipDisplay
    ? (totalDisplay = Number(bill.value) + tipDisplay)
    : (totalDisplay = Number(bill.value));

  if (people.value > 0) {
    total.value = "$" + (totalDisplay / Number(people.value)).toFixed(2);
    tipAmount.value = "$" + (tipDisplay / Number(people.value)).toFixed(2);
  } else {
    total.value = "$" + totalDisplay.toFixed(2);
    tipAmount.value = "$" + tipDisplay.toFixed(2);
  }
}

function activateResetButton() {
  resetButton.disabled = false;
}

function setChecked(e) {
  if (customTip.value) customTip.value = "";
  e.target.checked = true;
}

function uncheckTipButtons() {
  if (document.querySelector('input[name="buttonGroup"]:checked')) {
    document.querySelector('input[name="buttonGroup"]:checked').checked = false;
  }
}

function errorMessage(e) {
  if (e.target.value < 1 && e.target.value !== "") {
    error.style.display = "inline";
    people.classList.add("invalid-value");
  } else {
    error.style.display = "none";
    people.classList.remove("invalid-value");
  }
}
