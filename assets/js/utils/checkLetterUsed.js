import { displayLetter } from "../components/displayLetter.js";
import { findLetterInArray } from "./findLetterInArray.js";
import { createArray } from "./createArray.js";

export const checkLetterUsed = (splitNameToArray, key) => {
  displayLetter(key); // displays a letter to screen
  findLetterInArray(splitNameToArray, key); // finds a letter in array and adjusts score as needed
  createArray(splitNameToArray, key); // when the second parameter is passed, it updates the array displayed
};
