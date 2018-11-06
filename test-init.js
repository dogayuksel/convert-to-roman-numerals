const { convertToRomanNumeral } = require('./init.js');

/**
 * Throw an error if given arguments are NOT strictly equal.
 */
const assert = (a, b) => {
  if (a !== b) {
    throw new Error(`${a} is not equal to ${b}`);
  }
}

/**
 * Wraps a given function in try catch block and calls it.
 * Throws an error if given function doesn't throw an error.
 * @param {function} fn - Function to be called
 * @param {string} [expectedErrorMessage=false] - Optional string to
 *   search in thrown error message
 */
const expectError = (fn, expectedErrorMessage=false) => {
  try {
    fn();
    throw new Error('no-error');
  } catch (e) {
    if (e.message === 'no-error') {
      throw new Error('Expected given function to throw an error');
    }
    if (expectedErrorMessage) {
      if (!e.message.includes(expectedErrorMessage)) {
        throw new Error('Thrown error didnt match expected error');
      }
    }
  }
}

// Inputs smaller than 10
assert(convertToRomanNumeral(1), 'I');
assert(convertToRomanNumeral(3), 'III');
assert(convertToRomanNumeral(4), 'IV');
assert(convertToRomanNumeral(7), 'VII');
assert(convertToRomanNumeral(9), 'IX');

// Inputs equal or larger than 10 smaller than 5000
assert(convertToRomanNumeral(10), 'X');
assert(convertToRomanNumeral(39), 'XXXIX');
assert(convertToRomanNumeral(246), 'CCXLVI');
assert(convertToRomanNumeral(1776), 'MDCCLXXVI');
assert(convertToRomanNumeral(1954), 'MCMLIV');
assert(convertToRomanNumeral(1990), 'MCMXC');
assert(convertToRomanNumeral(2014), 'MMXIV');
assert(convertToRomanNumeral(4999), 'MMMMCMXCIX');

// Errors for input validation
expectError(
  convertToRomanNumeral.bind(undefined, -10),
  'out of range',
);
expectError(
  convertToRomanNumeral.bind(undefined, 5500),
  'out of range',
);
expectError(
  convertToRomanNumeral.bind(undefined, 17.23),
  'given value not an integer',
);
expectError(
  convertToRomanNumeral.bind(undefined, 'string'),
  'input should be number type',
);

console.log('All Tests Passed!');
