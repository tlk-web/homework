import { initBurger } from "./burger.js";
import { initModal } from "./modal.js";
import { initForm } from "./form.js";
import { initProgressBar } from "./progressbar.js";

try {
  initBurger();
  const modal = initModal();
  initForm(modal);
  initProgressBar();
} catch (error) {
  console.error("Что-то сломалось");
}
