// global variables
let numberOfTries = 10;
let timer;

// wait for the document to load then run starting functions
document.addEventListener("DOMContentLoaded", function () {
  // Functions to load on page start
  hangmanImages();

  document.addEventListener("keydown", function (event) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    // checks if the keydown character is in alphabet variable
    if (alphabet.includes(event.key.toLowerCase())) {
      let id = document.getElementById("letter");

      id.textContent = event.key.toUpperCase();

      startTimer(id);
    } else {
      throw "Unknown key please enter the correct key";
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
 * increases the score by 2 points when called
 */
function increaseScore() {
  let id = document.getElementById("scoring");
  let text = Number(id.textContent) + 2;

  id.textContent = text.toString();
}

/**
 * decreases the score by 1 point when called
 */
function decreaseScore() {
  let id = document.getElementById("tries");
  let text = Number(id.textContent) - 1;

  id.textContent = text.toString();
}
