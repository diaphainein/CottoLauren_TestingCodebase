const countVowels = require('../src/vowels');

describe('countVowels basic functionality', () => {
  test('counts vowels in a simple word', () => {
    expect(countVowels('hello')).toBe(2);
  });

  test('counts vowels in uppercase', () => {
    expect(countVowels('HELLO')).toBe(2);
  });

  test('counts vowels in mixed case', () => {
    expect(countVowels('hElLo')).toBe(2);
  });

  test('returns 0 when there are no vowels', () => {
    expect(countVowels('rhythm')).toBe(0);
  });

  test('counts all vowels correctly', () => {
    expect(countVowels('aeiou')).toBe(5);
  });
});

describe('countVowels edge cases', () => {
  test('empty string returns 0', () => {
    expect(countVowels('')).toBe(0);
  });

  test('string with only vowels', () => {
    expect(countVowels('AEIOUaeiou')).toBe(10);
  });

  test('string with spaces and punctuation', () => {
    expect(countVowels('How are you?')).toBe(5);
  });

  test('string with numbers and symbols', () => {
    expect(countVowels('h3ll0 w0rld!')).toBe(0);
  });

  test('long string with repeating pattern', () => {
    const str = 'abcde'.repeat(1000);
    expect(countVowels(str)).toBe(2000);
  });
});

describe('type shenanigans and safety', () => {
  test('non-string values throw TypeError', () => {
    expect(() => countVowels(null)).toThrow(TypeError);
    expect(() => countVowels(undefined)).toThrow(TypeError);
    expect(() => countVowels(12345)).toThrow(TypeError);
    expect(() => countVowels(true)).toThrow(TypeError);
    expect(() => countVowels(false)).toThrow(TypeError);
    expect(() => countVowels({})).toThrow(TypeError);
    expect(() => countVowels([])).toThrow(TypeError);
  });

  test('empty string returns 0', () => {
    expect(countVowels('')).toBe(0);
  });

  test('string with no vowels returns 0', () => {
    expect(countVowels('rhythm')).toBe(0);
  });
});


describe('countVowels with unicode and accented characters', () => {
  test('does not count accented vowels (default behavior)', () => {
    expect(countVowels('Café')).toBe(1);
  });

  test('handles emoji safely', () => {
    expect(countVowels('a😂e')).toBe(2);
  });
});