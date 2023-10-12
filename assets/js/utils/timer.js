let t;

/**
 * this timer function is used to clear the letter pressed after 1 second
 * @param id
 */
export const timer = (id) => {
  // clear timer on case I need to restart
  clearInterval(t);

  t = setInterval(() => {
    id.textContent = "";
  }, 1000);
};
