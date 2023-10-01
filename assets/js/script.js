import { increase, decrease } from "./utils/scoring";
import { hangmanImages, displayArrayToScreen } from "./components";
import { randomArrayValue } from "./utils/miscellanous";

let timer;

// wait for the document to load then run starting functions
document.addEventListener("DOMContentLoaded", function () {
  const { name } = randomArrayValue(); // using object destructuring will get the name out of the object in names.js
  let splitNameToArray = name.split(""); // once an object has been grabbed will split the letters to an array
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

  document.addEventListener("keydown", function (event) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // checks if the keydown character is in alphabet variable
    if (alphabet.includes(event.key.toLowerCase())) {
      let id = document.getElementById("letter");

      id.textContent = event.key.toUpperCase();

      startTimer(id);

      // when it finds the key that was pressed in the array, it adds score by one
      // when it doesn't find the key in array it subtracts one from score and tries
      splitNameToArray.find(
        (element) => element.toLowerCase() === event.key.toLowerCase(),
      )
        ? increase("scoring")
        : decrease("scoring") || decrease("tries") || hangmanImages();

      // checks if key is in array using a map
      splitNameToArray.map((items, index) => {
        if (items.toUpperCase() === event.key.toUpperCase()) {
          arrayBlanks[index] = items;

          let id = document.getElementById("letters");
          id.innerHTML = " "; // clears a div element before appending to it

          displayArrayToScreen(arrayBlanks);
        }
      });
    }
  });
});

/**
 * starts timer on keydown event in alphabet string
 * @param id
 */
function startTimer(id) {
  // clear timer in case I need to restart
  clearInterval(timer);

  timer = setInterval(function () {
    id.textContent = "";
  }, 1000);
}
