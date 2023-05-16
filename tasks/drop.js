const { mySlice } = require('./servicemethods');

function drop(array, n = 1) {
  return mySlice(array, n);
}

module.exports = drop;
