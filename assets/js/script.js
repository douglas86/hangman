import { createArray } from "./utils/createArray.js";
import { qwertyKeyboard } from "./components/qwertyKeyboard.js";
import { checkLetterUsed } from "./utils/checkLetterUsed.js";
import { overlay } from "./components/overlay.js";
import { randomValue } from "./utils/randomValue.js";

document.addEventListener("DOMContentLoaded", function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  let sound = document.getElementsByClassName("sound")[0];
  let play = document.getElementsByClassName("play-sound")[0];
  let data = document.getElementById("hidden-data").innerText;
  let splitNameToArray = data.split("");
  let keysPressed = []; // captures all the keys that were pressed

  randomValue(); // creates the random value to be displayed
  createArray(splitNameToArray);
  qwertyKeyboard(splitNameToArray);
  overlay();

  // This event listener attaches to the music button
  // This is used as a toggle to turn the music off and on
  sound.addEventListener("click", function () {
    play.innerText === "OFF"
      ? (play.innerText = "ON")
      : (play.innerText = "OFF");
  });

  document.addEventListener("keydown", function (event) {
    let keys = document.getElementsByClassName("keyboard-buttons");
    if (alphabet.includes(event.key.toLowerCase())) {
      // check to see if a letter has already been pressed
      // if a letter has not been pressed update scores
      // if a letter has been pressed do nothing
      keysPressed.indexOf(event.key.toLowerCase()) === -1 &&
        checkLetterUsed(splitNameToArray, event.key);

      // when a letter on keyboard used append to keysPressed array
      keysPressed.push(event.key.toLowerCase());

      // when a letter is pressed on the keyboard, the class of the keyboard will change
      // to give different styling to keys
      for (let i = 0; i < keys.length; i++) {
        if (keys[i].innerText.toLowerCase() === event.key.toLowerCase()) {
          keys[i].setAttribute("class", "keyboard-buttons-clicked");
        }
      }
    }
  });
});
