const includes = require('../tasks/includes');

test('Checks if value is in collection', () => {
  expect(includes([1, 2, 3], 1)).toEqual(true);

  expect(includes([1, 2, 3], 1, 2)).toEqual(false);

  expect(includes({ a: 1, b: 2 }, 1)).toEqual(true);

  expect(includes('abcd', 'bc')).toEqual(true);
});
