/**
 * This overlay is for when you won the game
 */
export const win = () => {
  let id = document.getElementById("overlay");
  let text = document.getElementsByClassName("overlay-text")[0];
  let flag = document.getElementsByClassName("hidden")[0]; // Gets hidden flag value from index.html

  id.style.display = "block";

  text.innerHTML = `
        <h2>Congratulation</h2>
        <hr>
        <p>Would you like to play again?</p>
        <button class="overlay-button" onclick="window.location.reload()">Reset</button>
    `;

  flag.innerHTML = "False";

  id.addEventListener("click", function () {
    id.style.display = "none";
    window.location.reload();
  });
};
