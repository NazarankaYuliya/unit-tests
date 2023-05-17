function merge(object1, object2) {
  for (let key in object1) {
    const result = [];
    const len =
      object1[key].length > object2[key].length
        ? object1[key].length
        : object2[key].length;
    for (let i = 0; i < len; i++) {
      const resultObj = { ...object1[key][i], ...object2[key][i] };
      result.push(resultObj);
    }
    object1[key] = result;
    return object1;
  }
}

module.exports = merge;
