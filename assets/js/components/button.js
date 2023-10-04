import { createArray, findLetterInArray } from "../utils";
import { displayLetter } from "./displayLetter.js";

export const button = (objectAttributes, splitNameToArray) => {
  let div = document.getElementsByClassName("keyboard-layout")[0];
  let btn = document.createElement("button");

  Object.entries(objectAttributes).map(([key, value]) => {
    key === "text"
      ? (btn.innerText = `${value}`) &&
        btn.addEventListener("click", function () {
          btn.setAttribute("class", "keyboard-buttons-clicked");
          createArray(splitNameToArray, value.toLowerCase());
          findLetterInArray(splitNameToArray, value.toLowerCase());
          displayLetter(value);
        })
      : btn.setAttribute(key, `${value}`);
  });

  div.appendChild(btn);
};
