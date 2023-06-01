const { mySlice } = require('./servicemethods');

function take(array, n = 1) {
  if (n === 0) {
    return [];
  }
  return mySlice(array, 0, n);
}

module.exports = take;
