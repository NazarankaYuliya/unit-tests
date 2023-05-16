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

function myIncludes(input, el, index = 0) {
  for (let i = index; i < input.length; i++) {
    if (input[i] === el) {
      return true;
    }
    return false;
  }
}

function myForEach(array, calback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    myPush(result, calback(array[i]));
  }
  return result;
}

module.exports = { myFilter, myPush, mySlice, myFind, myIncludes, myForEach };
