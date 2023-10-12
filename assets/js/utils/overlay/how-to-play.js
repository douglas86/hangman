export const howToPlay = () => {
  let classes = document.getElementsByClassName("question")[0];
  let id = document.getElementById("overlay");
  let text = document.getElementsByClassName("overlay-text")[0];

  classes.addEventListener("click", function () {
    id.style.display = "block";

    text.innerHTML = `
           <h2>How to Play?</h2>
           <hr>
           <ul>
                <li>You play this game by either pressing a key on the keyboard from a - z or by clicking the qwerty keyboard under the letters</li>
                <li>A letter will display showing what key you pressed at the top left of the picture on the board</li>
                <li>There is a button to turn sound on and off</li>
                <li>If the sound is on, there will be different sounds depending on if your answer is correct or not</li>
                <li>points: add 2 points per correct and subtract 1 point per incorrect answers</li>
                <li>You get a total of 10 tries to guess the word</li>
                <li>The Game is won by getting 20 points, and lost when tries hit 0</li>
                <button class="overlay-button" onclick="function overlayBtn() {
                    id.style.display = 'none'
                }">Close</button>
           </ul>
           `;
  });

  id.addEventListener("click", function () {
    id.style.display = "none";
  });
};