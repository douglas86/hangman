import { createArray } from "./utils/create-array.js";
import { qwertyKeyboard } from "./components/qwerty-keyboard.js";
import { checkLetterUsed } from "./utils/check-letter-used.js";
import { overlay } from "./components/overlay.js";
import { randomValue } from "./utils/random-value.js";
import { splitStringToArray } from "./utils/split-string-to-array.js";

/**
 * Main entry point into the whole program
 */
document.addEventListener("DOMContentLoaded", function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  randomValue(); // creates the random value to be displayed

  let sound = document.getElementsByClassName("sound")[0];
  let play = document.getElementsByClassName("play-sound")[0];
  let hidden = document.getElementById("hidden-data");
  let guess = document.getElementsByClassName("guessed-word")[0];
  let keyboard = document.getElementsByClassName("keyboard-buttons-clicked");
  let keysPressed = []; // captures all the keys that were pressed

  createArray(splitStringToArray());
  qwertyKeyboard();
  overlay();
  // clears the localStorage when page loads
  localStorage.clear();

  // This event listener attaches to the music button
  // This is used as a toggle to turn the music off and on
  sound.addEventListener("click", function () {
    play.innerText === "OFF"
      ? (play.innerText = "ON")
      : (play.innerText = "OFF");
  });

  const config = { childList: true };

  const callback = (mutationList) => {
    for (const mutation of mutationList)
      if (mutation.type === "childList") {
        guess.innerHTML = "";
        createArray(splitStringToArray());
        // when word changes reset all buttons back to the original class
        Object.values(keyboard).map((item) => {
          item.setAttribute("class", "keyboard-buttons");
        });
        keysPressed = [];
      }
  };

  // this event listener is to listen for the word that you need to guess to change
  //   when it changes it resets the keysClicked array
  // this still needs to be broken into its own file - haven't gotten it right yet
  const observer = new MutationObserver(callback);

  observer.observe(hidden, config);

  document.addEventListener("keydown", function (event) {
    let keys = document.getElementsByClassName("keyboard-buttons");
    let flag = document.getElementsByClassName("hidden")[0].innerText;

    if (alphabet.includes(event.key.toLowerCase())) {
      if (flag === "True") {
        // check to see if a letter has already been pressed
        // if a letter has not been pressed update scores
        // if a letter has been pressed do nothing
        keysPressed.indexOf(event.key.toLowerCase()) === -1 &&
          checkLetterUsed(splitStringToArray(), event.key);

        // sets localStorage converting keysPressed array to string
        let string = JSON.stringify(keysPressed);
        localStorage.setItem("keysPressed", string);

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
    }
  });
});
