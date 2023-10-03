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
    // on object of all the attributes that are added onto the button element
    objectAttributes = {
      type: "button",
      class: "keyboard-buttons",
      text: item.toUpperCase(), // text to be displayed on the button tag - this is for the innerText method
    };
    // break up characters to give me the qwerty keyboard layout
    lineBreak.indexOf(item) !== -1
      ? br(div, objectAttributes)
      : button(div, objectAttributes);
  });
};

export default Keyboard;
