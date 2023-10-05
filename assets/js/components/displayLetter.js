import { timer } from "../utils/timer.js";

/**
 * display a letter to the screen when key event is triggered
 * @param letter
 */
export const displayLetter = (letter) => {
  let id = document.getElementById("letter");

  id.innerText = letter.toUpperCase();

  timer(id);
};
