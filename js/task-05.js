const inputNameEl = document.querySelector("#name-input");
const outputNameEl = document.querySelector("#name-output");

inputNameEl.addEventListener("input", handleNameInput);

function handleNameInput(event) {
  outputNameEl.textContent =
    inputNameEl.value.trim() === "" ? "Anonymous" : inputNameEl.value;
}
