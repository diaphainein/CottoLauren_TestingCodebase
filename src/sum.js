// calculates the sum of numbers in an array
// only accepts arrays of numbers — throws TypeError for invalid inputs or elements.

const sumOfArray = (arr) => {
  if (!Array.isArray(arr)) {
    throw new TypeError('Expected an array input');
  }

  if (!arr.every(num => typeof num === 'number' && Number.isFinite(num))) {
    throw new TypeError('Array must contain only finite numbers');
  }

  return arr.reduce((total, num) => total + num, 0);
};

module.exports = sumOfArray;
