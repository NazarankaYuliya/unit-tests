const omit = require('../tasks/omit');

test('Creates an object composed of the picked object properties', () => {
  const object = { a: 1, b: '2', c: 3 };

  expect(omit(object, ['a', 'c'])).toEqual({ b: '2' });
});
