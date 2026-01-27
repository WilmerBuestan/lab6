const sum = require('./sum');

test('adds 4 + 3 to equal 7', () => {
    expect(sum(3, 4)).toBe(7);
});