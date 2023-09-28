/**
 * passing in a param will print out the array to the screen were necessary
 * @param splitNameToArray
 */
export const displayArrayToScreen = (splitNameToArray) => {
  let id = document.getElementById("letters");

  for (let splitNameToArrayElement of splitNameToArray) {
    let h3 = document.createElement("h3");
    h3.setAttribute("id", "spacing");

    h3.textContent = splitNameToArrayElement;

    id.appendChild(h3);
  }
};
