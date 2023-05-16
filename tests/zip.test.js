const zip = require('../tasks/zip');

test('Creates an array of grouped elements', () => {
  expect(zip(['a', 'b'], [1, 2], [true, false])).toEqual([
    ['a', 1, true],
    ['b', 2, false],
  ]);
});
