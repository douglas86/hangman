import { displayArray } from "../components/displayArray.js";
import { overlay } from "../components/overlay.js";
import { randomValue } from "./randomValue.js";

/**
 * used to update the array on the board or create an array with all the spaces
 * @param array
 * @param key
 * @returns {*[]}
 */
export const createArray = (array, key = "none") => {
  let a = [];
  let className = document.getElementsByTagName("h3");
  let guess = document.getElementsByClassName("guessed-word");
  let scoring = document.getElementById("scoring");

  if (key !== "none") {
    // This will update the array on the screen
    array.find((element, index) => {
      if (element.toLowerCase() === key.toLowerCase()) {
        // if check true replace space with character in a letters array
        className[index].innerText = key.toUpperCase();

        // object to see what values are in the guess class
        let result = Object.values(guess).map((item) => item.innerText);

        // checks to see if the score is greater than or equal to 20, and it doesn't include the "_" character
        // if true shows the overlay win window
        Number(scoring.textContent) + 2 >= 20 &&
          !result[0].split("").includes("_") &&
          overlay("win");

        !result[0].split("").includes("_") && randomValue();
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
