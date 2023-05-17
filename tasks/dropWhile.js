const { mySlice } = require('./servicemethods');

function dropWhile(array, calback) {
  if (typeof calback === 'function') {
    for (let i = 0; i < array.length; i++) {
      if (!calback(array[i])) {
        return mySlice(array, i);
      }
    }
  }

  if (Array.isArray(calback)) {
    for (let i = 0; i < array.length; i++) {
      if (!(array[i][calback[0]] === calback[1])) {
        return mySlice(array, i);
      }
    }
  }

  if (typeof calback === 'object') {
    for (let i = 0; i < array.length; i++) {
      if (!(array[i].user === calback.user)) {
        return mySlice(array, i);
      }
    }
  } else {
    for (let i = 0; i < array.length; i++) {
      if (!array[i][calback]) {
        return mySlice(array, i);
      }
    }
  }
}

module.exports = dropWhile;
