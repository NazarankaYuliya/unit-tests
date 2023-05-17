const { myForEach } = require('./servicemethods');

function map(collection, callback) {
  if (typeof callback === 'string') {
    return myForEach(collection, (el) => el[callback]);
  } else if (Array.isArray(collection)) {
    return myForEach(collection, callback);
  } else {
    return myForEach(Object.values(collection), callback);
  }
}

module.exports = map;
