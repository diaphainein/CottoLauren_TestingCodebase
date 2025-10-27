const sumOfArray = require('../src/sum');

describe('sumOfArray basic functionality', () => {
  test('sums a simple array of positive numbers', () => {
    expect(sumOfArray([1, 2, 3, 4, 5])).toBe(15);
  });

  test('sums an array with negative numbers', () => {
    expect(sumOfArray([-1, -2, -3])).toBe(-6);
  });

  test('sums an array with both positive and negative numbers', () => {
    expect(sumOfArray([-1, 5, -2, 3])).toBe(5);
  });

  test('returns 0 for an empty array', () => {
    expect(sumOfArray([])).toBe(0);
  });

  test('sums floating point numbers correctly', () => {
    expect(sumOfArray([0.1, 0.2, 0.3])).toBeCloseTo(0.6, 5);
  });
});

describe('edge cases', () => {
  test('array with a single value', () => {
    expect(sumOfArray([42])).toBe(42);
  });

  test('array with zeros', () => {
    expect(sumOfArray([0, 0, 0])).toBe(0);
  });

  test('array with large numbers', () => {
    expect(sumOfArray([1_000_000, 2_000_000, 3_000_000])).toBe(6_000_000);
  });

  test('array containing Infinity or -Infinity returns TypeError', () => {
    expect(() => sumOfArray([1, Infinity, 2])).toThrow(TypeError);
  });
});

describe('type shenanigans and invalid inputs', () => {
  test('array with numeric strings returns TypeError', () => {
    expect(() => sumOfArray(['1', '2', '3'])).toThrow(TypeError);
  });

  test('array with mixed types (numbers and strings) returns TypeError', () => {
    expect(() => sumOfArray([1, '2', 3])).toThrow(TypeError);
  });

  test('array with booleans returns TypeError', () => {
    expect(() => sumOfArray([1, false, 2])).toThrow(TypeError);
    expect(() => sumOfArray([true, false, true])).toThrow(TypeError);
  });

  test('array containing NaN returns TypeError', () => {
    expect(() => sumOfArray([1, NaN, 2])).toThrow(TypeError);
  });

  test('non-array input returns TypeError', () => {
    expect(() => sumOfArray('123')).toThrow(TypeError);
    expect(() => sumOfArray(null)).toThrow(TypeError);
    expect(() => sumOfArray(undefined)).toThrow(TypeError);
    expect(() => sumOfArray({ a: 1, b: 2 })).toThrow(TypeError);
  });
});

describe('performance and stress testing', () => {
  test('handles large arrays efficiently', () => {
    const arr = Array.from({ length: 1_000_000 }, () => 1);
    expect(sumOfArray(arr)).toBe(1_000_000);
  });
});