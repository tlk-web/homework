import { initBurger } from "./burger.js";
import { initModal } from "./modal.js";
import { initForm } from "./form.js";
import { initProgressBar } from "./progressbar.js";
import { initMask } from "./inputmask.js";
import { initTimer } from "./timer.js";

try {
  initBurger();
  const modal = initModal();
  initForm(modal);
  initProgressBar();
  initMask();
  initTimer();
} catch (error) {
  console.error(error);
}
