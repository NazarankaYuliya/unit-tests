const { myForEach } = require('./servicemethods');

function map(collection, calback) {
  if (typeof calback === 'string') {
    return myForEach(collection, (el) => el[calback]);
  }

  if (Array.isArray(collection)) {
    return myForEach(collection, calback);
  }

  if (typeof collection === 'object' && typeof calback === 'function') {
    return myForEach(Object.values(collection), calback);
  }
}

module.exports = map;
