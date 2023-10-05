import { hangmanImage } from "./hangmanImage.js";

/**
 * decreases the score and tries variable
 */
export const decreaseScore = () => {
  let scoring = document.getElementById("scoring");
  let triesLeft = document.getElementById("tries");

  scoring.textContent = (Number(scoring.textContent) - 1).toString();
  triesLeft.textContent = (Number(triesLeft.textContent) - 1).toString();

  hangmanImage(Number(triesLeft.innerText));
};