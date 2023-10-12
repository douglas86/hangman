import { increaseScore } from "../components/increase-score.js";
import { decreaseScore } from "../components/decrease-score.js";

/**
 * finds if a letter is in the array
 * increases score if found
 * decrease score and tries, if not found
 * @param array
 * @param key
 */
export const findLetterInArray = (array, key) => {
  array.find((e) => e.toLowerCase() === key.toLowerCase())
    ? increaseScore()
    : decreaseScore();
};
