import { displayArrayToScreen } from "../../components";

/**
 * This method maps around an array and updates an array with its results
 * @param mappedArray
 * @param updatedArray
 * @param key
 */
export const map = (mappedArray, updatedArray, key) => {
  mappedArray.map((items, index) => {
    if (items.toUpperCase() === key.toUpperCase()) {
      updatedArray[index] = items;

      let id = document.getElementById("letters");
      id.innerHTML = " "; // clears a div element before appending to it

      displayArrayToScreen(updatedArray);
    }
  });
};
