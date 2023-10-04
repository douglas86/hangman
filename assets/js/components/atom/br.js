import { button } from "./button.js";

/**
 * line break element to break after a certain element
 * this element only breaks after a button element
 * objectAttributes has a default value of "none" if nothing is passed
 * @param appendToChild
 * @param splitNameToArray
 * @param arrayBlanks
 * @param objectAttributes
 */
export const br = (
  appendToChild,
  splitNameToArray,
  arrayBlanks,
  objectAttributes = "none",
) => {
  let b = document.createElement("br");

  objectAttributes !== "none" &&
    button(appendToChild, objectAttributes, splitNameToArray);

  appendToChild.appendChild(b);
};
