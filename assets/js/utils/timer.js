let t;

export const timer = (id) => {
  // clear timer on case I need to restart
  clearInterval(t);

  t = setInterval(() => {
    id.textContent = "";
  }, 1000);
};
