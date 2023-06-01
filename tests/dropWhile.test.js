const dropWhile = require('../tasks/dropWhile');

test('Creates a slice of array excluding elements dropped from the beginning.', () => {
  const users = [
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
  ];

  expect(
    dropWhile(users, function (o) {
      return !o.active;
    }),
  ).toEqual([{ user: 'pebbles', active: true }]);

  expect(dropWhile(users, { user: 'barney', active: false })).toEqual([
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
  ]);

  expect(dropWhile(users, ['active', false])).toEqual([
    { user: 'pebbles', active: true },
  ]);

  expect(dropWhile(users, 'active')).toEqual([
    { user: 'barney', active: false },
    { user: 'fred', active: false },
    { user: 'pebbles', active: true },
  ]);
});
