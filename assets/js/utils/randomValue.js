import { data } from "./data.js";

/**
 * randomly selects data from the data array
 */
export const randomValue = () => {
  let hidden = document.getElementById("hidden-data");

  hidden.innerText = data[Math.floor(Math.random() * data.length)].name;
};
