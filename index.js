const people = document.getElementById("people");
const error = document.querySelector(".error");

people.addEventListener("input", updateValue);

function updateValue(e) {
  if (e.target.value < 1 && e.target.value !== "") {
    error.style.display = "inline";
    people.classList.add("invalid");
  } else {
    error.style.display = "none";
    people.classList.remove("invalid");
  }
}
