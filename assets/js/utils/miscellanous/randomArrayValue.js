import { dataObject } from "./dataObject.js";

/**
 * randomly selects a value from names array
 */
export const randomArrayValue = () => {
  return dataObject[Math.floor(Math.random() * dataObject.length)];
};
