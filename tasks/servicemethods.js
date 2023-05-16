function myFilter(array, calback) {
  let filteredArray = [];
  for (let i = 0; i < array.length; i++) {
    if (calback(array[i])) {
      filteredArray[filteredArray.length] = array[i];
    }
  }
  return filteredArray;
}

function myPush(array, item) {
  array[array.length] = item;
}

function mySlice(array, start, end) {
  if (end > array.length || !end) {
    end = array.length;
  }

  let result = [];
  let current = 0;
  for (let i = start; i < end; i++) {
    result[current] = array[i];
    current++;
  }
  return result;
}

function myFind(array, calback) {
  for (let i = 0; i < array.length; i++) {
    if (calback(array[i])) {
      return array[i];
    }
  }
}

module.exports = { myFilter, myPush, mySlice, myFind };
