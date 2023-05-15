const getchunk = require('../tasks/chunk');

test('Chunck an array into groups of specified size ', () => {
  expect(getchunk(['a', 'b', 'c', 'd'], 2)).toEqual([
    ['a', 'b'],
    ['c', 'd'],
  ]);

  expect(getchunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  expect(getchunk([], 3)).toEqual([]);
  expect(getchunk(['a', 'b', 'c', 'd'])).toEqual([['a'], ['b'], ['c'], ['d']]);
});
