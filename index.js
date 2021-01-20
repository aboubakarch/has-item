module.exports = function hasItem(itemArray, value, key) {
  if (!key) return arrayHasItem(itemArray, value);
  return matchSpecific(itemArray, key, value);
};

const arrayHasItem = (itemArray, value) => {
  return itemArray.some(
    (item) => JSON.stringify(item) === JSON.stringify(value)
  );
};

const matchSpecific = (array, key, value) => {
  const result = array.filter((item) => item[key] === value);
  if (result.length) return true;
  return false;
};
