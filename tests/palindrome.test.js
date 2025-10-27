const isPalindrome = require('../src/palindrome');

describe('palindrome basic cases', () => {
  test('simple palindrome', () => {
    expect(isPalindrome('level')).toBe(true);
  });

  test('non-palindrome', () => {
    expect(isPalindrome('javascript')).toBe(false);
  });

  test('mixed case palindrome', () => {
    expect(isPalindrome('RaceCar')).toBe(true);
  });

  test('palindrome with spaces and punctuation', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama!')).toBe(true);
  });

  test('palindrome with numbers', () => {
    expect(isPalindrome('12321')).toBe(true);
  });

  test('alphanumeric palindrome', () => {
    expect(isPalindrome('1a2B2a1')).toBe(true);
  });

  test('non-palindromic numeric', () => {
    expect(isPalindrome('123456')).toBe(false);
  });

  test('palindrome with tabs or newlines', () => {
    expect(isPalindrome('Taco\ncat')).toBe(true);
  });

  test('palindrome with leading/trailing whitespace', () => {
    expect(isPalindrome('   racecar   ')).toBe(true);
  });

  test('long palindromic string', () => {
    const str = 'a'.repeat(10000);
    expect(isPalindrome(str)).toBe(true);
  });
});

describe('empty and single character', () => {
  test('empty string is not a palindrome', () => {
    expect(isPalindrome('')).toBe(false);
  });

  test('single character', () => {
    expect(isPalindrome('x')).toBe(true);
  });
});

test('string with only spaces', () => {
  expect(isPalindrome('     ')).toBe(false);
});

describe('unicode and emoji handling', () => {
  test('emoji stripped out safely', () => {
    expect(isPalindrome('😂a😂')).toBe(true);
  });

  test('unicode/accented character handling', () => {
    expect(isPalindrome('Añña')).toBe(true);
  })

  test('non-Latin alphabets are not considered palindromes', () => {
    expect(isPalindrome('топот')).toBe(false);
    expect(isPalindrome('μαμα')).toBe(false);
  });

  test('handles other weird characters', () => {
    expect(isPalindrome('Åsa ña SÅ')).toBe(true);
  });
});

describe('type shenanigans', () => {
  test('null or undefined should not throw', () => {
    expect(() => isPalindrome(null)).not.toThrow();
    expect(() => isPalindrome(undefined)).not.toThrow();
  });

  test('numbers as input convert safely', () => {
    expect(isPalindrome(1221)).toBe(true);
    expect(isPalindrome(1234)).toBe(false);
  });

  test('boolean values convert to strings safely', () => {
    expect(isPalindrome(true)).toBe(false);
    expect(isPalindrome(false)).toBe(false);
  });

  test('arrays and objects dont break the function', () => {
    expect(isPalindrome([])).toBe(false);
    expect(isPalindrome({})).toBe(false);
  });
});




