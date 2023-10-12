import { howToPlay } from "../utils/overlay/how-to-play.js";
import { win } from "../utils/overlay/win.js";
import { loss } from "../utils/overlay/loss.js";

/**
 * this function it to handle the overlay passing in a type of either: win or loss, it will display how to play by default
 * @param type
 */
export const overlay = (type) => {
  switch (type) {
    case "win":
      return win();
    case "loss":
      return loss();
    default:
      return howToPlay();
  }
};
