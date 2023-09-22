// global variables
let numberOfTries = 10;

function hangmanImages() {
  let images = `assets/images/hangman/${numberOfTries}.png`;
  let id = document.getElementById("hangman-images");

  let img = document.createElement("img");
  img.setAttribute("src", images);
  img.setAttribute("alt", "Images for hangman incorrect answers");
  img.setAttribute("width", "200px");
  img.setAttribute("height", "200px");

  id.appendChild(img);

  id.value;
}

hangmanImages();
