import { displayLetter } from "./displayLetter.js";
import { find, map, setAttribute } from "../../utils";

/**
 * this function creates the buttons on the screen passing in an object of all the attributes
 * @param appendToChild
 * @param objectAttributes
 * @param splitNameToArray
 * @param arrayBlanks
 */
export const button = (
  appendToChild,
  objectAttributes,
  splitNameToArray,
  arrayBlanks,
) => {
  let btn = document.createElement("button");
  let letters = document.getElementById("letters");

  Object.entries(objectAttributes).map(([key, value]) => {
    key === "text"
      ? (btn.innerText = `${value}`) &&
        btn.addEventListener("click", function () {
          displayLetter(value);
          setAttribute(btn, "class", "keyboard-buttons-clicked"); // changed class of button when clicked
          letters.innerText; // this will highlight the letters on the keyboard as a letter is pressed
          find(splitNameToArray, value); // adds or subtracts score, if found in an array
          map(splitNameToArray, arrayBlanks, value);
        })
      : setAttribute(btn, key, `${value}`);
  });

  appendToChild.appendChild(btn);
};
