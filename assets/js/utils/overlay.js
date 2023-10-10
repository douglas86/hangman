export const overlay = () => {
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
                <li>For every correct answer you get 2 points</li>
                <li>For every incorrect answer it subtracts 1 point from your score</li>
                <li>You get a total of 10 tries to guess the word</li>
                <li>You win the game by getting 20 points</li>
                <li>You lose the game by getting tries to 0</li>
           </ul>
           `;
  });

  id.addEventListener("click", function () {
    id.style.display = "none";
  });
};
