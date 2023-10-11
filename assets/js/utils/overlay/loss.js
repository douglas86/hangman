/**
 * This overlay will show when you lost the game
 */
export const loss = () => {
  let id = document.getElementById("overlay");
  let text = document.getElementsByClassName("overlay-text")[0];

  id.style.display = "block";

  text.innerHTML = `
        <h2>Sorry You Lost!!</h2>
        <hr>
        <p>Would you like to play again?</p>
        <button class="overlay-button" onclick="window.location.reload()">Reset</button>
    `;

  id.addEventListener("click", function () {
    id.style.display = "none";
  });
};
