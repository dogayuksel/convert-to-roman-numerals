const { convertToRomanNumeral } = require('./init.js');

/**
 * Throw an error if given arguments are NOT strictly equal.
 */
const assert = (a, b) => {
  if (a !== b) {
    throw new Error(`${a} is not equal to ${b}`);
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
assert(convertToRomanNumeral(4449), 'MMMMCMXCI');

console.log('All Tests Passed!');
