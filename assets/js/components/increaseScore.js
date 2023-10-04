export const increaseScore = () => {
  let id = document.getElementById("scoring");

  id.textContent = (Number(id.textContent) + 2).toString();
};
