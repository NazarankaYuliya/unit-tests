const map = require('../tasks/map');

test('Creates an array of values by running each element in collection thru iteratee', () => {
  function square(n) {
    return n * n;
  }

  expect(map([4, 8], square)).toEqual([16, 64]);

  expect(map({ a: 4, b: 8 }, square)).toEqual([16, 64]);

  const users = [{ user: 'barney' }, { user: 'fred' }];

  expect(map(users, 'user')).toEqual(['barney', 'fred']);
});
