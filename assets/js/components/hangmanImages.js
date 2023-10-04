import { setAttribute } from "../utils/elementFunctions";

/**
 * generate the src attribute dynamically
 */
export const hangmanImages = () => {
  let triesLeft = Number(document.getElementById("tries").innerHTML);

  let images =
    triesLeft > 0
      ? `assets/images/hangman/${triesLeft}.png`
      : `assets/images/hangman/0.png`;
  let id = document.getElementById("hanging");

  setAttribute(id, "src", images);

  id.value;
};
