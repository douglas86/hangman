import { splitStringToArray } from "../utils/split-string-to-array.js";
import { createArray } from "../utils/create-array.js";
import { storage } from "../utils/storage.js";

/**
 * creates the keyboard buttons on the screen
 * @param objectAttributes - passing an object of all the attributes that I am wanting to create
 */
export const button = (objectAttributes) => {
  let div = document.getElementsByClassName("keyboard-layout")[0];
  let btn = document.createElement("button");
  let guess = document.getElementsByClassName("guessed-word")[0];
  let hidden = document.getElementById("hidden-data");

  let keys = document.getElementsByClassName("keyboard-buttons");

  const config = { childList: true };

  const callback = (mutationList) => {
    for (const mutation of mutationList)
      if (mutation.type === "childList") {
        guess.innerHTML = "";
        createArray(splitStringToArray());
        // when word changes reset all buttons back to the original class
        Object.values(keys).map((item) => {
          item.setAttribute("class", "keyboard-buttons");
        });
        // keysClicked = [];
        storage("clear");
      }
  };

  const observer = new MutationObserver(callback);

  // this event listener is to listen for the word that you need to guess to change
  //   when it changes it resets the keysClicked array
  // this still needs to be broken into its own file - haven't gotten it right yet
  observer.observe(hidden, config);

  Object.entries(objectAttributes).map(([key, value]) => {
    key === "text"
      ? (btn.innerText = `${value}`) &&
        btn.addEventListener("click", function () {
          // if (clickedButtons.length === 0) {
          //   keysClicked.length = 0;
          // }

          // sets the button attribute to change class so that different styling can be applied
          btn.setAttribute("class", "keyboard-buttons-clicked");

          // check to see if a letter has already been pressed
          // if a letter has not been pressed update scores
          // if a letter has been pressed do nothing
          storage(value);

          // pushes all buttons with the class of keyboard-buttons-clicked to array
          // for (let i = 0; i < clickedButtons.length; i++) {
          //   keysClicked.push(clickedButtons[i].innerHTML.toLowerCase());
          // }
        })
      : btn.setAttribute(key, `${value}`);
  });

  div.appendChild(btn);
};
