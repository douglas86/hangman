export const increaseScore = () => {
  let id = document.getElementById("scoring");
  let audio = new Audio("assets/sounds/tada.mp3");

  id.textContent = (Number(id.textContent) + 2).toString();

  audio.play().catch(() => throw `File unable to play`);
};
