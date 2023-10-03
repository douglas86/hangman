import { displayLetter } from "./displayLetter.js";

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
        })
      : btn.setAttribute(key, `${value}`);
  });

  appendToChild.appendChild(btn);
};
