const input = document.querySelector("input#name-input");
const output = document.querySelector("span#name-output");

const handleInput = () => {
  if (output) {
    output.textContent = input.value.trim() || "Anonymous";
  }
}

input?.addEventListener("input", handleInput);
