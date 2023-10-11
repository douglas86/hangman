import { hangmanImage } from "./hangmanImage.js";
import { overlay } from "./overlay.js";

/**
 * decreases the score and tries variable
 */
export const decreaseScore = () => {
  let scoring = document.getElementById("scoring");
  let triesLeft = document.getElementById("tries");
  let audio = new Audio("assets/sounds/pencil.mp3");

  scoring.textContent = (Number(scoring.textContent) - 1).toString();
  triesLeft.textContent = (Number(triesLeft.textContent) - 1).toString();

  hangmanImage(Number(triesLeft.innerText));

  Number(triesLeft.innerText) === 0 && overlay("loss");

  audio.play();
};
