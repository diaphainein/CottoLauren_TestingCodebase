// counts English vowels only (a, e, i, o, u) in a string, ignoring case
// non-string inputs throw a TypeError for clarity

const countVowels = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string input');
  }

  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
};

module.exports = countVowels;
