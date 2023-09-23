// global variables
let numberOfTries = 10;
let timer;

// wait for the document to load then run starting functions
document.addEventListener("DOMContentLoaded", function () {
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
 * Creates the images for the hangman game dynamically
 */
function hangmanImages() {
  let images = `assets/images/hangman/${numberOfTries}.png`;
  let id = document.getElementById("hangman-images");

  // Creating and setting attributes for the image
  let img = document.createElement("img");
  img.setAttribute("id", "hanging");
  img.setAttribute("src", images);
  img.setAttribute("alt", "Images for hangman incorrect answers");
  img.setAttribute("width", "150rem");
  img.setAttribute("height", "auto");

  // add image element to div
  id.appendChild(img);

  // insert all created elements to div
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
