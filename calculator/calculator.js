module.exports = {
  add,
};

function add(numbers) {
  const values = Array.isArray(numbers) ? numbers : Array.from(arguments);
  return values.reduce((sum, value = 0) => {
    return sum + value;
  }, 0);
}
