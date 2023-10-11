import { howToPlay } from "../utils/overlay/howToPlay.js";
import { win } from "../utils/overlay/win.js";

/**
 * this function it to handle the overlay passing in a type of either: win or loss, it will display how to play by default
 * @param type
 */
export const overlay = (type) => {
  switch (type) {
    case "win":
      return win();
    case "loss":
      return console.log("I loss");
    default:
      return howToPlay();
  }
};
