const omitBy = require('../tasks/omitBy');

test("Creates an object composed of the object properties predicate doesn't return truthy for", () => {
  const object = { a: 1, b: '2', c: 3 };

  expect(omitBy(object, (element) => typeof element === 'number')).toEqual({
    b: '2',
  });
});
