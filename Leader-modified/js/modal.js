export function initModal() {
  const modal = document.querySelector(".modal");
  const closeModal = document.querySelector(".modal__button");

  window.addEventListener("click", (event) => {
    if (event.target === modal) modal.style.display = "none";
  });

  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  return modal;
}
