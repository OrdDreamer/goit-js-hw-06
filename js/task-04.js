const outputElement = document.querySelector("span#value");
const decrementButton = document.querySelector(
  'button[data-action="decrement"]'
);
const incrementButton = document.querySelector(
  'button[data-action="increment"]'
);

let counterValue = 0;

const updateCounter = (value) => {
  if (Number.isNaN(Number(value))) {
    return;
  }
  counterValue += Number(value);
  if (outputElement) {
    outputElement.textContent = counterValue;
  }
};

decrementButton?.addEventListener("click", () => {
  updateCounter(-1);
});

incrementButton?.addEventListener("click", () => {
  updateCounter(1);
});
