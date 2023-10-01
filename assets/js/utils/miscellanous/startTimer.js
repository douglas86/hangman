// global variable
let timer;

/**
 * Starts timer whenever an event is triggered and event is in alphabet string
 * @param id
 */
export const startTimer = (id) => {
  // clear timer on case I need to restart
  clearInterval(timer);

  timer = setInterval(() => {
    id.textContent = "";
  }, 1000);
};
