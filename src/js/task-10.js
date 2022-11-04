function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function destroyBoxes(element) {
  if (!element || !element.innerHTML) {
    return;
  }
  element.innerHTML = "";
}


const controls = document.querySelector("div#controls");
const input = controls.querySelector("input");
const createButton = controls.querySelector("button[data-create]");
const destroyButton = controls.querySelector("button[data-destroy]");
const boxesOutput = document.querySelector("div#boxes");

createButton?.addEventListener("click", () => {
  const boxes = [];
  const count = +input.value >= 0 ? +input.value : 0;
  for (let i = 0; i < count; i++) {
    const box = document.createElement("div");
    box.style.height = box.style.width = `${30 + 10 * i}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.push(box);
  }
  boxesOutput?.append(...boxes);
});

destroyButton?.addEventListener("click", () => {
  destroyBoxes(boxesOutput);
});
