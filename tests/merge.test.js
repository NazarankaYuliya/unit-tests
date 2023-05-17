const merge = require('../tasks/merge');

test('Should return merged object', () => {
  const object = {
    a: [{ b: 2 }, { d: 4 }],
  };

  const object2 = {
    a: [{ c: 3 }, { e: 5 }, { f: 6 }],
  };

  const other = {
    a: [{ c: 3 }, { e: 5 }],
  };

  expect(merge(object, other)).toEqual({
    a: [
      { b: 2, c: 3 },
      { d: 4, e: 5 },
    ],
  });

  expect(merge(object2, other)).toStrictEqual({
    a: [{ c: 3, c: 3 }, { e: 5, e: 5 }, { f: 6 }],
  });
});
