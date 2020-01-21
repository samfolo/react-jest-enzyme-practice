export const findByTestAttr = (wrapper, attribute) => {
  return wrapper.find(`[data-test='${attribute}']`);
};
