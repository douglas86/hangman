import { checkLetterUsed } from "../utils/checkLetterUsed.js";

/**
 * creates the keyboard buttons on the screen
 * @param objectAttributes - passing an object of all the attributes that I am wanting to create
 * @param splitNameToArray - this is only passed in to update the other functions that it needs to run
 */
export const button = (objectAttributes, splitNameToArray) => {
  let div = document.getElementsByClassName("keyboard-layout")[0];
  let btn = document.createElement("button");
  let clickedButtons = document.getElementsByClassName(
    "keyboard-buttons-clicked",
  );
  let keysClicked = [];

  Object.entries(objectAttributes).map(([key, value]) => {
    key === "text"
      ? (btn.innerText = `${value}`) &&
        btn.addEventListener("click", function () {
          // sets the button attribute to change class so that different styling can be applied
          btn.setAttribute("class", "keyboard-buttons-clicked");

          // check to see if a letter has already been pressed
          // if a letter has not been pressed update scores
          // if a letter has been pressed do nothing
          keysClicked.indexOf(value.toLowerCase()) === -1 &&
            checkLetterUsed(splitNameToArray, value);

          // pushes all buttons with the class of keyboard-buttons-clicked to array
          for (let i = 0; i < clickedButtons.length; i++) {
            keysClicked.push(clickedButtons[i].innerHTML.toLowerCase());
          }
        })
      : btn.setAttribute(key, `${value}`);
  });

  div.appendChild(btn);
};
