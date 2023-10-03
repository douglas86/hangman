import { split } from "../../utils/stringMethods";
import { br, button } from "../atom";

/**
 * function to display the keyboard layout to screen
 * @constructor
 */
const Keyboard = () => {
  let div = document.getElementsByClassName("keyboard-layout")[0];
  let qwertyKeyboard = split("qwertyuiopasdfghjklzxcvbnm");
  let lineBreak = split("plm"); // line break element to split button up giving a qwerty keyboard layout
  let objectAttributes;

  qwertyKeyboard.map((item) => {
    objectAttributes = {
      type: "button",
      class: "keyboard-buttons",
      text: item,
    };
    // break up characters to give me the qwerty keyboard layout
    lineBreak.indexOf(item) !== -1
      ? br(div, objectAttributes)
      : button(div, objectAttributes);
  });
};

export default Keyboard;
