const { myIncludes } = require('./servicemethods');

function includes(collection, value, index) {
  if (Array.isArray(collection)) {
    return myIncludes(collection, value, index);
  } else if (typeof collection === 'object') {
    return myIncludes(Object.values(collection), value, index);
  } else {
    return collection.includes(value, index);
  }
}

module.exports = includes;
