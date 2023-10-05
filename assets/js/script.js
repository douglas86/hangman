import { displayLetter, qwertyKeyboard } from "./components";

import { createArray } from "./utils/createArray.js";
import { findLetterInArray } from "./utils/findLetterInArray.js";
import { randomValue } from "./utils/randomValue.js";

document.addEventListener("DOMContentLoaded", function () {
  const { name } = randomValue(); // randomly select a name from the data array
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let splitNameToArray = name.split("");

  createArray(splitNameToArray);
  qwertyKeyboard(splitNameToArray);

  document.addEventListener("keydown", function (event) {
    let keys = document.getElementsByClassName("keyboard-buttons");
    if (alphabet.includes(event.key.toLowerCase())) {
      displayLetter(event.key); // displays a letter to screen
      findLetterInArray(splitNameToArray, event.key); // finds a letter in array and adjusts score as needed
      createArray(splitNameToArray, event.key); // when the second parameter is passed, it updates the array displayed
      // when a letter is pressed on the keyboard the class of the keyboard will change
      // to give different styling to keys
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].innerText.toLowerCase() === event.key.toLowerCase()) {
          keys[i].setAttribute("class", "keyboard-buttons-clicked");
        }
      }
    }
  });
});
