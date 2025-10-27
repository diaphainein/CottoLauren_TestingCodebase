const reverseString = require('../src/reverse');

describe('reverseString basic functionality', () => {
  test('reverses a simple word', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('reverses a palindrome (result should match original)', () => {
    expect(reverseString('racecar')).toBe('racecar');
  });

  test('reverses a string with spaces', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('reverses a string with punctuation', () => {
    expect(reverseString('hi!')).toBe('!ih');
  });

  test('preserves capitalization and punctuation order', () => {
    expect(reverseString('Hi There!')).toBe('!erehT iH');
  });
});

describe('edge cases', () => {
  test('empty string returns empty string', () => {
    expect(reverseString('')).toBe('');
  });

  test('single character returns same character', () => {
    expect(reverseString('x')).toBe('x');
  });

  test('string with only spaces returns same number of spaces', () => {
    expect(reverseString('     ')).toBe('     ');
  });
});

describe('type shenanigans', () => {
  test('non-string values throw TypeError', () => {
    expect(() => reverseString(null)).toThrow(TypeError);
    expect(() => reverseString(undefined)).toThrow(TypeError);
    expect(() => reverseString(12345)).toThrow(TypeError);
    expect(() => reverseString(true)).toThrow(TypeError);
    expect(() => reverseString(false)).toThrow(TypeError);
    expect(() => reverseString({})).toThrow(TypeError);
    expect(() => reverseString([])).toThrow(TypeError);
  });
});

describe('unicode and special characters', () => {
  test('handles accented letters correctly', () => {
    expect(reverseString('Añña')).toBe('aññA');
  });

  test('handles emojis safely', () => {
    expect(reverseString('😂a😂')).toBe('😂a😂');
  });

  test('handles mixed emoji and letters', () => {
    expect(reverseString('a😊b')).toBe('b😊a');
  });

  test('handles other weird characters', () => {
    expect(reverseString('Åsa')).toBe('asÅ');
  });
});

describe('performance and long strings', () => {
  test('handles very long string without crashing', () => {
    const longString = 'x'.repeat(100000);
    expect(reverseString(longString)).toBe('x'.repeat(100000));
  });

  test('handles long sentence reversals accurately', () => {
    const input = 'The quick brown fox jumps over the lazy dog';
    const expected = 'god yzal eht revo spmuj xof nworb kciuq ehT';
    expect(reverseString(input)).toBe(expected);
  });
});