import { button } from "../components/button.js";

export const lineBreak = (objectAttributes, splitNameToArray) => {
  let div = document.getElementsByClassName("keyboard-layout")[0];
  let b = document.createElement("br");

  button(objectAttributes, splitNameToArray);

  div.appendChild(b);
};
