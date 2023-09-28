/**
 * generate the src attribute dynamically
 */
export const hangmanImages = () => {
  let tries = Number(document.getElementById("tries").innerHTML);

  let images = `assets/images/hangman/${tries}.png`;
  let id = document.getElementById("hanging");

  id.setAttribute("src", images);

  id.value;
};
