const { convertToRomanNumeral } = require('./init.js');

/**
 * Throw an error if given arguments are NOT strictly equal.
 */
const assert = (a, b) => {
  if (a !== b) {
    throw new Error(`${a} is not equal to ${b}`);
  }
}

// Inputs smaller then 10
assert(convertToRomanNumeral(1), 'I');
assert(convertToRomanNumeral(3), 'III');
assert(convertToRomanNumeral(4), 'IV');
assert(convertToRomanNumeral(7), 'VII');
assert(convertToRomanNumeral(9), 'IX');

console.log('All Tests Passed!');
