import { displayArray } from "../components";

/**
 * this will create the blanks need it for an initial load
 * @param array
 * @param update
 * @returns {*[]}
 */
export const createArray = (array, update = false) => {
  let a = [];

  if (update) {
    displayArray(array);
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
