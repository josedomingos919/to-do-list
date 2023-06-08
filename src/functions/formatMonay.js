export const formatMonay = (monay) => {
  return Number(monay)
    .toFixed(2)
    .replace(/\d(?=(\d{3})+\.)/g, "$&,")
    .replace(".", "L")
    .replace(",", ".")
    .replace("L", ",");
};
