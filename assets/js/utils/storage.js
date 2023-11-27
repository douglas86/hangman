import { checkLetterUsed } from "./check-letter-used.js";
import { splitStringToArray } from "./split-string-to-array.js";

let keysPressed = [];

export const storage = (letter) => {
  const parsing = JSON.parse(localStorage.getItem("keysPressed"));

  parsing !== null
    ? parsing.indexOf(letter.toLowerCase()) === -1 &&
      keysPressed.push(letter.toLowerCase()) &&
      checkLetterUsed(splitStringToArray(), letter)
    : keysPressed.push(letter.toLowerCase()) &&
      checkLetterUsed(splitStringToArray(), letter);

  let string = JSON.stringify(keysPressed);
  localStorage.setItem("keysPressed", string);
};
