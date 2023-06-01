const { myFilter } = require('./servicemethods');

function compact(array) {
  return myFilter(array, (value) => !!value);
}

module.exports = compact;
