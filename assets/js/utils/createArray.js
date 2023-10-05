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
        // if the first letter in the array is true, make letter capital
        index === 0
          ? (className[index].innerText = key.toUpperCase())
          : (className[index].innerText = key);
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
