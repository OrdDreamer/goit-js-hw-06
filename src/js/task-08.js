const form = document.querySelector("form.login-form");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (!email.value) {
    alert("Заповни e-mail");
    return;
  }

  if (!password.value) {
    alert("Заповни password");
    return;
  }

  console.log({
    [email.name]: email.value,
    [password.name]: password.value,
  });
  event.currentTarget.reset();
});
