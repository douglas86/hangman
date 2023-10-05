import { playAudio } from "../utils/playAudio.js";
import file from "../../sounds/tada.mp3";

export const increaseScore = () => {
  let id = document.getElementById("scoring");

  id.textContent = (Number(id.textContent) + 2).toString();

  playAudio(file);
};
