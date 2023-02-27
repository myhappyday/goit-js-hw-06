const decrementBtnEl = document.querySelector(`[data-action="decrement"]`);
const incrementBtnEl = document.querySelector(`[data-action="increment"]`);
const valueEl = document.querySelector("#value");

let counterValue = 0;

decrementBtnEl.addEventListener("click", onDecrementBtnClick);
incrementBtnEl.addEventListener("click", onIncrementBtnClick);

function onDecrementBtnClick(event) {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

function onIncrementBtnClick(event) {
  counterValue += 1;
  valueEl.textContent = counterValue;
}
