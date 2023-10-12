import { displayLetter } from "../components/display-letter.js";
import { findLetterInArray } from "./find-letter-in-array.js";
import { createArray } from "./create-array.js";

/**
 * displays letter to board finds and updates score and update array displayed on screen
 * @param splitNameToArray
 * @param key
 */
export const checkLetterUsed = (splitNameToArray, key) => {
  displayLetter(key); // displays a letter to screen
  findLetterInArray(splitNameToArray, key); // finds a letter in array and adjusts score as needed
  createArray(splitNameToArray, key); // when the second parameter is passed, it updates the array displayed
};
