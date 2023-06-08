export const unformatMonay = (monay) => {
  return `${monay}`?.split(".")?.join("")?.replace(",", ".");
};
