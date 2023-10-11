import { sound } from "../utils/sound.js";

/**
 * increases score if letter is in array displayed
 */
export const increaseScore = () => {
  let id = document.getElementById("scoring");

  id.textContent = (Number(id.textContent) + 2).toString();

  sound("tada");
};
