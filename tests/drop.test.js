const drop = require('../tasks/drop');

test('Should return the slice of array', () => {
  expect(drop([1, 2, 3])).toEqual([2, 3]);
  expect(drop([1, 2, 3], 2)).toEqual([3]);
  expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
});
