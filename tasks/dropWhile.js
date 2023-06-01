const { mySlice } = require('./servicemethods');

function dropWhile(array, callback) {
  if (typeof callback === 'function') {
    for (let i = 0; i < array.length; i++) {
      if (!callback(array[i])) {
        return mySlice(array, i);
      }
    }
  }

  if (Array.isArray(callback)) {
    for (let i = 0; i < array.length; i++) {
      if (!(array[i][callback[0]] === callback[1])) {
        return mySlice(array, i);
      }
    }
  }

  if (typeof callback === 'object') {
    for (let i = 0; i < array.length; i++) {
      if (!(array[i].user === callback.user)) {
        return mySlice(array, i);
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      if (!array[i][callback]) {
        return mySlice(array, i);
      }
    }
  }
}

module.exports = dropWhile;
