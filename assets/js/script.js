// global variables
let numberOfTries = 10;

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

hangmanImages();
