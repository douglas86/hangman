import { displayLetter } from "./displayLetter.js";

import { createArray } from "../utils/createArray.js";
import { findLetterInArray } from "../utils/findLetterInArray.js";

/**
 * creates the keyboard buttons on the screen
 * @param objectAttributes - passing an object of all the attributes that I am wanting to create
 * @param splitNameToArray - this is only passed in to update the other functions that it needs to run
 */
export const button = (objectAttributes, splitNameToArray) => {
  let div = document.getElementsByClassName("keyboard-layout")[0];
  let btn = document.createElement("button");

  Object.entries(objectAttributes).map(([key, value]) => {
    key === "text"
      ? (btn.innerText = `${value}`) &&
        btn.addEventListener("click", function () {
          // sets the button attribute to change class so that different styling can be applied
          btn.setAttribute("class", "keyboard-buttons-clicked");

          createArray(splitNameToArray, value.toLowerCase()); // updates array on display
          findLetterInArray(splitNameToArray, value.toLowerCase()); // finds button in array and updates scores accordingly
          displayLetter(value); // displays a capital letter to the screen on button click
        })
      : btn.setAttribute(key, `${value}`);
  });

  div.appendChild(btn);
};
