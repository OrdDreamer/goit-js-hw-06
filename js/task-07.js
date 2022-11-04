const input = document.querySelector("input#font-size-control");
const target = document.querySelector("span#text");

if (input && target) {
  input.addEventListener(
    "input",
    () => (target.style.fontSize = `${+input.value}px`)
  );
}
