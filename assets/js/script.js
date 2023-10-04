import Keyboard from "./components/organism/Keyboard.js";

import { hangmanImages, displayArrayToScreen } from "./components";
import { displayLetter } from "./components/atom";

import { randomArrayValue, getElementsByClassName } from "./utils";
import { find, map, split } from "./utils";

// wait for the document to load then run starting functions
document.addEventListener("DOMContentLoaded", function () {
  const { name } = randomArrayValue(); // using object destructuring will get the name out of the object in names.js
  let splitNameToArray = split(name); // once an object has been grabbed will split the letters to an array
  let arrayBlanks = []; // array is responsible for the blank lines and will be updated based on keydown letters

  // for of loop to create the spacing for letters in an array
  for (let i of splitNameToArray) {
    if (i !== " ") {
      arrayBlanks.push("_");
    } else {
      arrayBlanks.push(" ");
    }
  }

  // Functions to load on page start
  hangmanImages(); // dynamically loads the hangman images to the display
  displayArrayToScreen(arrayBlanks); // function to load letters on display

  // display keyboard layout on board
  Keyboard(splitNameToArray, arrayBlanks);

  document.addEventListener("keydown", function (event) {
    let btn = document.getElementsByClassName("keyboard-buttons");
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // This object will be passed to getElementsByClassName method
    let objectOfAttributes = {
      attributeType: "class",
      attributeName: "keyboard-buttons-clicked",
    };

    // checks if the keydown character is in alphabet variable
    if (alphabet.includes(event.key.toLowerCase())) {
      displayLetter(event.key);

      // Function to find a string within an array
      find(splitNameToArray, event.key);

      // Function to map around and update another array
      map(splitNameToArray, arrayBlanks, event.key);

      // Function to iterate over class name
      getElementsByClassName(btn, event.key.toLowerCase(), objectOfAttributes);
    }
  });
});
