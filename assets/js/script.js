import { names } from "./names.js";

// global variables
let numberOfTries = 10;
let timer;

// wait for the document to load then run starting functions
document.addEventListener("DOMContentLoaded", function () {
  const { name } = randomArrayValue(); // using object destructuring will get the name out of the object in names.js
  let splitNameToArray = name.split(""); // once an object has been grabbed will split the letters to an array

  // Functions to load on page start
  hangmanImages(); // dynamically loads the hangman images to the display
  displayArrayToScreen(splitNameToArray); // function to load letters on display

  document.addEventListener("keydown", function (event) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // checks if the keydown character is in alphabet variable
    if (alphabet.includes(event.key.toLowerCase())) {
      let id = document.getElementById("letter");

      id.textContent = event.key.toUpperCase();

      startTimer(id);
    }
  });
});

/**
 * generate the src attribute dynamically
 */
function hangmanImages() {
  let images = `assets/images/hangman/${10 - numberOfTries}.png`;
  let id = document.getElementById("hanging");

  id.setAttribute("src", images);

  id.value;
}

/**
 * passing in a param will print out the array to the screen were necessary
 * @param splitNameToArray
 */
function displayArrayToScreen(splitNameToArray) {
  let id = document.getElementById("letters");

  for (let splitNameToArrayElement of splitNameToArray) {
    let h3 = document.createElement("h3");
    h3.textContent = splitNameToArrayElement;

    id.appendChild(h3);
  }
}

/**
 * randomly selects a value from names array
 */
function randomArrayValue() {
  return names[Math.floor(Math.random() * names.length)];
}

/**
 * starts the timer on keydown event and sets the text content by id
 * @param id
 */
function startTimer(id) {
  // clear timer in case I need to restart
  clearInterval(timer);

  timer = setInterval(function () {
    id.textContent = "";
  }, 1000);
}

/**
 * increase the score by 2 points
 * @param elementId
 */
function increase(elementId) {
  let id = document.getElementById(elementId);
  let text = Number(id.textContent) + 2;

  // throw error if the element didn't increment correctly
  if (Number(id.textContent) + 2 !== text) {
    throw `element with id ${elementId} did not increment correctly is should have been ${text}`;
  }

  id.textContent = text.toString();
}

/**
 * decrease score by one point
 * @param elementId
 */
function decrease(elementId) {
  let id = document.getElementById(elementId);
  let text = Number(id.textContent) - 1;

  id.textContent = text.toString();
}
