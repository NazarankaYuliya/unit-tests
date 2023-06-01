const { myIncludes } = require('./servicemethods');

function omit(object, path) {
  const result = {};

  for (let key in object) {
    if (myIncludes(path, key)) {
      continue;
    } else {
      result[key] = object[key];
    }
  }
  return result;
}

module.exports = omit;
