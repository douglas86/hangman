/**
 * display a letter to screen
 * @param letter
 */
export const displayLetter = (letter) => {
  let id = document.getElementById("letter");

  id.innerText = letter.toUpperCase();
};
