const input = document.querySelector("input#validation-input");

if (input) {
  const reqLength = +input.dataset.length;
  input.addEventListener("blur", () => {
    if (
      reqLength ===
      input.value
        .split(" ")
        .filter((e) => e)
        .join(" ").length
    ) {
      input.classList.add("valid");
      input.classList.remove("invalid");
    } else {
      input.classList.add("invalid");
      input.classList.remove("valid");
    }
  });
}
