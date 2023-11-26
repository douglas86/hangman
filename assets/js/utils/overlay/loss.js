/**
 * This overlay will show when you lost the game
 */
export const loss = () => {
  let id = document.getElementById("overlay");
  let text = document.getElementsByClassName("overlay-text")[0];
  let hidden = document.getElementById("hidden-data").innerText;
  let flag = document.getElementsByClassName("hidden")[0]; // Gets hidden flag value from index.html

  id.style.display = "block";

  text.innerHTML = `
        <h2>Sorry You Lost!!</h2>
        <hr>
        <p>The correct word is: ${hidden}</p>
        <p>Would you like to play again?</p>
        <button class="overlay-button" onclick="window.location.reload()">Reset</button>
    `;

  flag.innerHTML = `False`;

  id.addEventListener("click", function () {
    id.style.display = "none";
    window.location.reload();
  });
};
