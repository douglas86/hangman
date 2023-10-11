/**
 * This overlay is for when you won the game
 */
export const win = () => {
  let id = document.getElementById("overlay");
  let text = document.getElementsByClassName("overlay-text")[0];

  id.style.display = "block";

  text.innerHTML = `
        <h2>Congratulation</h2>
        <hr>
        <p>Would you like to play again?</p>
        <button class="overlay-button" onclick="window.location.reload()">Reset</button>
    `;

  id.addEventListener("click", function () {
    id.style.display = "none";
  });
};
