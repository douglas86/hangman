import { createArray, randomValue } from "./utils";

document.addEventListener("DOMContentLoaded", function () {
  const { name } = randomValue(); // randomly select a name from the data array
  let splitNameToArray = name.split("");

  console.log("s", splitNameToArray);

  createArray(splitNameToArray);
});
