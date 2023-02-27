const inputSymbolsEl = document.querySelector("#validation-input");

inputSymbolsEl.addEventListener("blur", handleSymbolsInput);

function handleSymbolsInput(event) {
  const length = Number(inputSymbolsEl.dataset.length);
  const valueLength = event.currentTarget.value.trim().length;

  if (valueLength === length) {
    inputSymbolsEl.classList.add("valid");
    inputSymbolsEl.classList.remove("invalid");
  } else {
    inputSymbolsEl.classList.add("invalid");
    inputSymbolsEl.classList.remove("valid");
  }
}
