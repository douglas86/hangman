export const increaseScore = () => {
  let id = document.getElementById("scoring");
  let audio = new Audio("assets/sounds/tada.mp3");

  id.textContent = (Number(id.textContent) + 2).toString();

  audio
    .play()
    .then(() => console.log("Sound is playing"))
    .catch(() => console.log("Sound is off"));
};
