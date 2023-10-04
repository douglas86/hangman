import { button } from "./button.js";
import { lineBreak } from "../utils";

/**
 * creating the qwerty keyboard on the screen
 */
export const qwertyKeyboard = () => {
  let keysLayout = "qwertyuiopasdfghjklzxcvbnm".split("");
  let lineBreakAfterCharacter = "plm".split("");
  let objectAttributes;

  keysLayout.map((items) => {
    objectAttributes = {
      type: "button",
      class: "keyboard-buttons",
      text: items.toUpperCase(),
    };

    lineBreakAfterCharacter.indexOf(items) !== -1
      ? lineBreak(objectAttributes)
      : button(objectAttributes);
  });
};
