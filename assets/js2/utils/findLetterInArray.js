import { increaseScore, decreaseScore } from "../components";

export const findLetterInArray = (array, key) => {
  array.find((e) => e.toLowerCase() === key.toLowerCase())
    ? increaseScore()
    : decreaseScore();
};
