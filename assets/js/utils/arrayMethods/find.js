import { hangmanImages } from "../../components";

import { decrease, increase } from "../scoring";

/**
 * this method finds a string within an array
 * @param array
 * @param key
 */
export const find = (array, key) => {
  array.find((element) => element.toLowerCase() === key.toLowerCase())
    ? increase("scoring")
    : decrease("scoring") || decrease("tries") || hangmanImages();
};
