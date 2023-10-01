import { hangmanImages } from "../../components";

import { decrease, increase } from "../scoring";

/**
 * this method finds a string within an array
 * @param array
 */
export const find = (array) => {
  array.find((element) => element.toLowerCase() === event.key.toLowerCase())
    ? increase("scoring")
    : decrease("scoring") || decrease("tries") || hangmanImages();
};
