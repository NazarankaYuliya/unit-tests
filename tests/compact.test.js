const compact = require('../tasks/compact');

test('Should return array without falsey values', () => {
  expect(compact([0, 1, false, 2, '', 3])).toEqual([1, 2, 3]);
});
