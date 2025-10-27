// reverses a string, ignoring case and non-alphanumeric characters

const reverseString = (str) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string input');
  }
  return [...str].reverse().join('');
};

module.exports = reverseString;