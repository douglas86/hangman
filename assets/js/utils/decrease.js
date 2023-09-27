/**
 * decrease score by one point
 * @param elementId
 */
export const decrease = (elementId) => {
  let id = document.getElementById(elementId);
  let text = Number(id.textContent) - 1;

  id.textContent = text.toString();
};
// function decrease(elementId) {
//   let id = document.getElementById(elementId);
//   let text = Number(id.textContent) - 1;
//
//   id.textContent = text.toString();
// }
