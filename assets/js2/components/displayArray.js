export const displayArray = (array) => {
  let id = document.getElementById("letters");

  for (let a of array) {
    let h3 = document.createElement("h3");
    h3.setAttribute("id", "spacing");
    h3.innerText = a;

    id.appendChild(h3);
  }
};
