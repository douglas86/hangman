import { data } from "./data.js";

/**
 * randomly selects data from the data array
 */
export const randomValue = () => {
  return data[Math.floor(Math.random() * data.length)];
};
