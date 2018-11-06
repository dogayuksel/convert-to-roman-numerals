const { convertToRomanNumeral } = require('./init.js');

/**
 * Throw an error if given arguments are NOT strictly equal.
 */
const assert = (a, b) => {
  if (a !== b) {
    throw new Error(`${a} is not equal to ${b}`);
  }
}

assert(convertToRomanNumeral(1), 1);

console.log('All Tests Passed!');
