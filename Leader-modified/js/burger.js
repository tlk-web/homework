export function initBurger() {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".menu");
  const body = document.querySelector("body");

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
}
