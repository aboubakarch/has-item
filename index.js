module.exports = function hasItem(itemArray, value) {
  return itemArray.some(
    (item) => JSON.stringify(item) === JSON.stringify(value)
  );
};
