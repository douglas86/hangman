/**
 * increase the score by 2 points
 * @param elementId
 */
export const increase = (elementId) => {
  let id = document.getElementById(elementId);
  let text = Number(id.textContent) + 2;

  if (Number(id.textContent) + 2 !== text) {
    throw `element with id ${elementId} did not increment correctly it should have been ${text}`;
  }

  id.textContent = text.toString();
};
// function increase(elementId) {
//     let id = document.getElementById(elementId);
//     let text = Number(id.textContent) + 2;
//
//     // throw error if the element didn't increment correctly
//     if (Number(id.textContent) + 2 !== text) {
//         throw `element with id ${elementId} did not increment correctly is should have been ${text}`;
//     }
//
//     id.textContent = text.toString();
// }
