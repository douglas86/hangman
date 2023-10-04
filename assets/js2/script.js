import { createArray, findLetterInArray, randomValue } from "./utils";
import { displayLetter } from "./components";

document.addEventListener("DOMContentLoaded", function () {
  const { name } = randomValue(); // randomly select a name from the data array
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let splitNameToArray = name.split("");

  createArray(splitNameToArray);

  document.addEventListener("keydown", function (event) {
    if (alphabet.includes(event.key.toLowerCase())) {
      displayLetter(event.key); // displays a letter to screen
      findLetterInArray(splitNameToArray, event.key); // finds a letter in array and adjusts score as needed
      createArray(splitNameToArray, event.key); // when the second parameter is passed, it updates the array displayed
    }
  });
});
