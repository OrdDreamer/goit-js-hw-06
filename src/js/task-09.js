function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorButton = document.querySelector("button.change-color");
const outputColorField = document.querySelector("span.color");

changeColorButton?.addEventListener("click", () => {
  const color = getRandomHexColor();
  body.style.backgroundColor = color;
  if (outputColorField) {
    outputColorField.textContent = color;
  }
});
