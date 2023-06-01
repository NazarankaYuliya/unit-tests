const find = require('../tasks/find');

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
  { user: 'pebbles', age: 1, active: true },
];

test('Should return the first element predicate returns truthy for', () => {
  expect(
    find(users, function (o) {
      return o.age < 40;
    }),
  ).toEqual({ user: 'barney', age: 36, active: true });

  expect(find(users, { age: 1, active: true })).toEqual({
    user: 'pebbles',
    age: 1,
    active: true,
  });

  expect(find(users, ['active', false])).toEqual({
    user: 'fred',
    age: 40,
    active: false,
  });

  expect(find(users, 'active')).toEqual({
    user: 'barney',
    age: 36,
    active: true,
  });
});
