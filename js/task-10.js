const createBoxBtnEl = document.querySelector("[data-create]");
const destroyBoxBtnEl = document.querySelector("[data-destroy]");
const divBoxesEl = document.querySelector("#boxes");

createBoxBtnEl.addEventListener("click", () => {
  const amount = document.querySelector("input").value;
  if (amount > 0 && amount <= 100) {
    createBoxes(amount);
  }
});

destroyBoxBtnEl.addEventListener("click", () => {
  destroyBoxes();
});

function createBoxes(amount) {
  const arrayBox = [];
  let boxSize = 30;
  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    const colorBox = getRandomHexColor();
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = colorBox;
    arrayBox.push(box);
    boxSize += 10;
  }
  divBoxesEl.append(...arrayBox);
}

function destroyBoxes() {
  divBoxesEl.innerHTML = "";
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
