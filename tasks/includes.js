const { myIncludes } = require('./servicemethods');

function includes(collection, value, index) {
  if (Array.isArray(collection)) {
    return myIncludes(collection, value, index);
  }

  if (typeof collection === 'object') {
    return myIncludes(Object.values(collection), value, index);
  }

  if (typeof collection === 'string') {
    return collection.includes(value, index);
  }
}

module.exports = includes;
