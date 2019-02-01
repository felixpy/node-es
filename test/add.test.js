const add = require('../src/add');

describe('add two number', function() {
  test('positive integer', function() {
    expect(add(3, 5)).toBe(8);
  });
});
