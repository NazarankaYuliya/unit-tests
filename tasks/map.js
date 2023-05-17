const { myForEach } = require('./servicemethods');

function map(collection, calback) {
  if (typeof calback === 'string') {
    return myForEach(collection, (el) => el[calback]);
  } else if (Array.isArray(collection)) {
    return myForEach(collection, calback);
  } else {
    return myForEach(Object.values(collection), calback);
  }
}

module.exports = map;
