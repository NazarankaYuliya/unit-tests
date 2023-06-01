const { myPush, mySlice } = require('./servicemethods');

function getchunk(array, size = 1) {
  let result = [];
  for (let i = 0; i < array.length; i += size) {
    myPush(result, mySlice(array, i, i + size));
  }

  return result;
}

module.exports = getchunk;
