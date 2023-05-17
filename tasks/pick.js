const { myIncludes } = require('./servicemethods');

function pick(object, path) {
  const result = {};
  for (let key in object) {
    if (myIncludes(path, key)) {
      result[key] = object[key];
    }
  }
  return result;
}

module.exports = pick;
