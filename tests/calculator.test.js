const { add } = require('../src/calculator');

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('should return the same number when the input is a single number', () => {
    expect(add("1")).toBe(1);
});

test('should return the sum of two numbers', () => {
    expect(add("2,4")).toBe(6);
});

test('should handle new line separators between numbers', () => {
    expect(add("1\n2,3")).toBe(6);
});
