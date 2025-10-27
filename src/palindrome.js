// checks if a string is a palindrome, ignoring case, non-latin, and non-alphanumeric characters

const isPalindrome = (str) => {
  if (typeof str !== 'string') str = String(str);
  const original = str
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, '')   // keep only alphanumeric ASCII
    .replace(/[^\x00-\x7F]/g, ''); // remove remaining non-ASCII chars - I was having issues with non-latin chars before adding this bit

  // for empty or stripped strings
  if (original.length === 0) return false;

  const reverseOG = [...original].reverse().join('');
  return original === reverseOG;
}

module.exports = isPalindrome;