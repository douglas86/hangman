import { hangmanImage } from "./hangman-image.js";
import { overlay } from "./overlay.js";
import { sound } from "../utils/sound.js";

/**
 * decreases the score and tries variable
 */
export const decreaseScore = () => {
  let scoring = document.getElementById("scoring");
  let triesLeft = document.getElementById("tries");

  scoring.textContent = (Number(scoring.textContent) - 1).toString();
  triesLeft.textContent = (Number(triesLeft.textContent) - 1).toString();

  hangmanImage(Number(triesLeft.innerText));

  Number(triesLeft.innerText) === 0 && overlay("loss");

  sound("pencil");
};
