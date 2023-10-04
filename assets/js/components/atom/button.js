import { displayLetter } from "./displayLetter.js";
import { setAttribute } from "../../utils/elementFunctions";

/**
 * this function creates the buttons on the screen passing in an object of all the attributes
 * @param appendToChild
 * @param objectAttributes
 */
export const button = (appendToChild, objectAttributes) => {
  let btn = document.createElement("button");

  Object.entries(objectAttributes).map(([key, value]) => {
    key === "text"
      ? (btn.innerText = `${value}`) &&
        btn.addEventListener("click", function () {
          displayLetter(value);
          setAttribute(btn, "class", "keyboard-buttons-clicked"); // changed class of button when clicked
        })
      : setAttribute(btn, key, `${value}`);
  });

  appendToChild.appendChild(btn);
};
