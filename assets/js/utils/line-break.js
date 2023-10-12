import { button } from "../components/button.js";

/**
 * This creates the line break tag, giving a qwerty keyboard layout onscreen
 * @param objectAttributes
 */
export const lineBreak = (objectAttributes) => {
  let div = document.getElementsByClassName("keyboard-layout")[0];
  let b = document.createElement("br");

  button(objectAttributes);

  div.appendChild(b);
};
