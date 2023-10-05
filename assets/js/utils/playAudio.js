export const playAudio = (file) => {
  let audio = new Audio(file);
  audio.play();
};
