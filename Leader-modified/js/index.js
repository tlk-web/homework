const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".menu");
const body = document.querySelector("body");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".modal__button");
const form = document.querySelector(".request__form");

function closeMenu() {
  burger.classList.remove("burger--open");
  menu.classList.remove("menu--open");
  body.classList.remove("page__body-no-scroll");
}

burger.addEventListener("click", () => {
  burger.classList.toggle("burger--open");
  menu.classList.toggle("menu--open");
  body.classList.toggle("page__body-no-scroll");
});

menu.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

body.addEventListener("click", (event) => {
  const isOpen = menu.classList.contains("menu--open");
  if (!isOpen) return;
  if (event.target.closest(".header__burger")) return;
  if (event.target.closest(".menu")) return;

  closeMenu();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (form.checkValidity()) {
    modal.style.display = "block";
    form.reset();
  } else {
    form.reportValidity();
  }
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
