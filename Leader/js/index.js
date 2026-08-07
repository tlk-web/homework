import HeaderFixed from "./header.js";
import BurgerMenu from "./burger.js";

try {
  const headerFixed = new HeaderFixed({
    HEADER: "header",
    HEADER_FIXED: "header--fixed",
  });

  new BurgerMenu(
    {
      BURGER: "burger",
      BURGER_OPEN: "burger--open",
      HEADER_MENU: "menu",
      HEADER_MENU_OPEN: "menu--open",
      lABEL: {
        OPEN: "Открыть меню",
        CLOSE: "Закрыть меню",
      },
      PAGE_BODY: "page__body",
      PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
      MENU_LINK: "menu__item-link",
      BREAKPOINT: 992,
    },
    headerFixed,
  );
} catch (error) {
  console.error(error);
}
