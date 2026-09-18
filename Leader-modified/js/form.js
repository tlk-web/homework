export function initForm(modal) {
  const form = document.querySelector(".request__form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (form.checkValidity()) {
      modal.style.display = "block";
      form.reset();
    } else {
      form.reportValidity();
    }
  });
}
