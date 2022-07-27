const bill = document.getElementById("bill");
const people = document.getElementById("people");
const error = document.querySelector(".error");
const tipButtons = document.querySelectorAll(".tip-button");
const customTip = document.getElementById("custom-tip");
const total = document.getElementById("total");

bill.addEventListener("input", getValue);

document.body.addEventListener("change", testing);

function testing(e) {
  let tipDisplay;
  let totalDisplay;

  console.log(e.target.id + " and value is " + e.target.value);
}

//tip amount = bill *  select-tip.value /100 / people.value
//total = (bill + tip amount*people) / people

people.addEventListener("input", (e) => {
  //   getValue(e);
  errorMessage(e);
});

// tipButtons.forEach((button) => {
//   button.addEventListener("click", activeClass);
// });
tipButtons.forEach((button) => {
  button.addEventListener("click", setChecked);
});

function setChecked(e) {
  e.target.checked = true;
}

// const test = customTip.addEventListener("input", getValue);
let value;
function getValue(e) {
  typeof e.target.value === "string"
    ? (value = Number(e.target.value))
    : (value = e.target.value);

  return value;
}

function errorMessage(e) {
  if (e.target.value < 1 && e.target.value !== "") {
    error.style.display = "inline";
    people.classList.add("invalid");
  } else {
    error.style.display = "none";
    people.classList.remove("invalid");
  }
}

function activeClass(e) {
  e.target.classList.contains("active")
    ? e.target.classList.remove("active")
    : e.target.classList.add("active");
}
