function pickBy(object, callback) {
  const result = {};
  for (let key in object) {
    if (callback(object[key])) {
      result[key] = object[key];
    }
  }
  return result;
}

module.exports = pickBy;
