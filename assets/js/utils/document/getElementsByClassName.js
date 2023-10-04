import { setAttribute } from "../elementFunctions";

export const getElementsByClassName = (element, event, objectOfAttributes) => {
  const { attributeType, attributeName } = objectOfAttributes;

  for (let i = 0; i < element.length; i++) {
    element[i].innerHTML.toLowerCase() === event &&
      setAttribute(element[i], attributeType, attributeName);
  }
};
