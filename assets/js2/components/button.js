export const button = (objectAttributes) => {
  let div = document.getElementsByClassName("keyboard-layout")[0];
  let btn = document.createElement("button");

  Object.entries(objectAttributes).map(([key, value]) => {
    key === "text"
      ? (btn.innerText = `${value}`) &&
        btn.addEventListener("click", function () {
          btn.setAttribute("class", "keyboard-buttons-clicked");
        })
      : btn.setAttribute(key, `${value}`);
  });

  div.appendChild(btn);
};
