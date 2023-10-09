import { displayArray } from "../components/displayArray.js";

/**
 * this will create the blanks need it for an initial load
 * @param array
 * @param key
 * @returns {*[]}
 */
export const createArray = (array, key = "none") => {
  let a = [];
  let className = document.getElementsByTagName("h3");

  if (key !== "none") {
    // This will update the array on the screen
    array.find((element, index) => {
      if (element.toLowerCase() === key.toLowerCase()) {
        // if check true replace space with character in a letters array
        className[index].innerText = key.toUpperCase();
      }
    });
  } else {
    for (let i of array) {
      if (i !== " ") {
        a.push("_");
      } else {
        a.push(" ");
      }
    }
    displayArray(a);
  }
};
