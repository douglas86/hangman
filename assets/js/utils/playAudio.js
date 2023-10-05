export const playAudio = (file) => {
  let audio = new Audio(file);
  audio
    .play()
    .then(() => console.log("sound is working"))
    .catch(() => console.log("For some reason the sound is not responding"));
};
