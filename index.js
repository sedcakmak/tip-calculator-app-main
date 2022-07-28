const bill = document.getElementById("bill");
const people = document.getElementById("people");
const error = document.querySelector(".error");
const tipButtons = document.querySelectorAll(".tip-button");
const customTip = document.getElementById("custom-tip");
const total = document.getElementById("total");
const tipAmount = document.getElementById("total-tip");
//const fields = document.querySelectorAll(".validated-field");

//bill.addEventListener("input", getValue);

document.body.addEventListener("input", calculate);

function calculate(e) {
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
    total.innerHTML = "$" + (totalDisplay / Number(people.value)).toFixed(2);
    tipAmount.innerHTML = "$" + (tipDisplay / Number(people.value)).toFixed(2);
  } else {
    total.innerHTML = "$" + totalDisplay.toFixed(2);
    tipAmount.innerHTML = "$" + tipDisplay.toFixed(2);
  }

  // console.log(e.target.id + "" + e.target.value);
  // console.log("bill value " + bill.value);
  // console.log("people " + people.value);
  // console.log("custom-tip " + customTip.value);
  // console.log("bill" + typeof Number(bill.value));
  // console.log("people" + typeof people.value);
  // console.log("tip" + typeof customTip.value);
  //console.log(e.target.id + " and value is " + e.target.value);
}

//tip amount = bill *  select-tip.value /100 / people.value
//total = (bill + tip amount*people) / people

// var tipValue = bill * (tip/100)
// var finalBill = bill + tipValue

people.addEventListener("input", (e) => {
  errorMessage(e);
});

// tipButtons.forEach((button) => {
//   button.addEventListener("click", activeClass);
// });
tipButtons.forEach((button) => {
  button.addEventListener("click", setChecked);
});

function setChecked(e) {
  if (customTip.value) customTip.value = "";
  e.target.checked = true;
}

customTip.addEventListener("input", uncheckTipButtons);

function uncheckTipButtons() {
  if (document.querySelector('input[name="buttonGroup"]:checked')) {
    document.querySelector('input[name="buttonGroup"]:checked').checked = false;
  }
}

function getValue(e) {
  console.log(
    "getValue working " + Number(e.target.value) + typeof Number(e.target.value)
  );
  return Number(e.target.value);
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
