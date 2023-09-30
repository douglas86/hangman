/**
 * generate the src attribute dynamically
 */
export const hangmanImages = () => {
  let triesLeft = Number(document.getElementById("tries").innerHTML);

  let images = `assets/images/hangman/${triesLeft}.png`;
  let id = document.getElementById("hanging");

  id.setAttribute("src", images);

  id.value;
};
