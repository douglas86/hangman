export const storage = (letter) => {
  let keysPressed = [];
  const parsing = JSON.parse(localStorage.getItem("keysPressed"));

  parsing !== null ? console.log("o") : keysPressed.push(letter);
};
