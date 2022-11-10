const form = document.querySelector("form.login-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value || !password.value) {
    alert("Заповни необхідні поля");
    return;
  }

  console.log({
    [email.name]: email.value,
    [password.name]: password.value,
  });
  event.currentTarget.reset();
});
