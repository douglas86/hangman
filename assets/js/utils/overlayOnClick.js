export const overlayOnClick = () => {
  let classes = document.getElementsByClassName("question")[0];
  let id = document.getElementById("overlay");
  let text = document.getElementsByClassName("overlay-text")[0];

  classes.addEventListener("click", function () {
    id.style.display = "block";

    text.innerHTML = `<h3>How to Play?</h3><hr>`;
  });

  id.addEventListener("click", function () {
    id.style.display = "none";
  });
};
