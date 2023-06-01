const pickBy = require('../tasks/pickBy');

test('Creates an object composed of the object properties predicate returns truthy for', () => {
  const object = { a: 1, b: '2', c: 3 };

  expect(pickBy(object, (element) => typeof element === 'number')).toEqual({
    a: 1,
    c: 3,
  });
});
