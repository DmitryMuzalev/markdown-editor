const getUniqueName = (elements, name) => {
  let uniqueName = name;
  let index = 1;

  if (elements.some((el) => el.name === uniqueName)) {
    while (elements.some((el) => el.name === uniqueName)) {
      uniqueName = `${name.slice(0, -3)}(${index}).md`;
      index++;
    }
  }

  return uniqueName;
};

export { getUniqueName };
