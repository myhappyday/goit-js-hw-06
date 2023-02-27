const inputFontSizeEl = document.querySelector("#font-size-control");
const outputFontSizeEl = document.querySelector("#text");

inputFontSizeEl.addEventListener("input", changeFontSize);

function changeFontSize(event) {
  outputFontSizeEl.style.fontSize = `${inputFontSizeEl.value}px`;
}
