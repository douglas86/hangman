import { playAudio } from "../utils/playAudio.js";

export const increaseScore = () => {
  let id = document.getElementById("scoring");

  id.textContent = (Number(id.textContent) + 2).toString();

  playAudio("assets/sounds/tada.mp3");
};
