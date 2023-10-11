/**
 * plays sound when the sound button is ON
 * @param mp3
 */
export const sound = (mp3) => {
  let audio = new Audio(`assets/sounds/${mp3}.mp3`);
  let sound = document.getElementsByClassName("play-sound")[0].innerText;

  sound === "ON" && audio.play();
};
