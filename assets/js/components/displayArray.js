/**
 * display the word on the screen
 * @param array
 */
export const displayArray = (array) => {
  let word = document.getElementsByClassName("guessed-word")[0];

  for (let a of array) {
    let h3 = document.createElement("h3");
    h3.setAttribute("class", "spacing");
    h3.innerText = a;

    word.appendChild(h3);
  }
};
