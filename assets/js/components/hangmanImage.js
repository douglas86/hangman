/**
 * displays image to screen based on tries left
 * @param triesLeft
 */
export const hangmanImage = (triesLeft) => {
  let id = document.getElementById("hanging");
  let images =
    triesLeft > 0
      ? `assets/images/hangman/${triesLeft}.png`
      : `assets/images/hangman/0.png`;

  id.setAttribute("src", images);
};
