/**
 * this will split the hidden word from the web page into an array to be used throughout
 * @returns {string[]}
 */
export const splitStringToArray = () => {
  return document.getElementById("hidden-data").innerText.split("");
};
