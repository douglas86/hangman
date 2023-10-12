import { button } from "../components/button.js";

export const lineBreak = (objectAttributes) => {
  let div = document.getElementsByClassName("keyboard-layout")[0];
  let b = document.createElement("br");

  button(objectAttributes);

  div.appendChild(b);
};
