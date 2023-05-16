const filter = require('../tasks/filter');

const users = [
  { user: 'barney', age: 36, active: true },
  { user: 'fred', age: 40, active: false },
];

test('Should return array of objects without inactive users ', () => {
  expect(
    filter(users, function (o) {
      return !o.active;
    }),
  ).toEqual([{ user: 'fred', age: 40, active: false }]);

  expect(filter(users, { age: 36, active: true })).toEqual([
    { user: 'barney', age: 36, active: true },
  ]);

  expect(filter(users, ['active', false])).toEqual([
    { user: 'fred', age: 40, active: false },
  ]);

  expect(filter(users, 'active')).toEqual([
    { user: 'barney', age: 36, active: true },
  ]);
});
