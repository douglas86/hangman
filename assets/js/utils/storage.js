import { checkLetterUsed } from "./check-letter-used.js";
import { splitStringToArray } from "./split-string-to-array.js";

// keeps track of letters that were pressed
let keysPressed = [];

/**
 * Stores array in localStorage only if a letter was not used
 */
export const storage = (letter) => {
  // clears localStorage and keysPressed array when clear is passed
  if (letter === "clear") {
    keysPressed = [];
    localStorage.clear();
    // when a letter is passed run this
  } else {
    // gets array from localStorage
    const parsing = JSON.parse(localStorage.getItem("keysPressed"));

    parsing !== null
      ? // if array found in localStorage
        parsing.indexOf(letter.toLowerCase()) === -1 &&
        keysPressed.push(letter.toLowerCase()) &&
        checkLetterUsed(splitStringToArray(), letter)
      : // if no array found in localStorage
        keysPressed.push(letter.toLowerCase()) &&
        checkLetterUsed(splitStringToArray(), letter);

    // store keysPressed array to localStorage
    let string = JSON.stringify(keysPressed);
    localStorage.setItem("keysPressed", string);
  }
};
