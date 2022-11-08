async function compareChanges(oldValue, newValue) {
  const value = oldValue === newValue ? oldValue : newValue;
  return value;
}

module.exports = compareChanges;
