const romanSymbols = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

/**
 * Converts given number to roman numerals.
 * @param {number} number - Number to be converted.
 * @return {string} Corresponding roman numeral value.
 */
const convertToRomanNumeral = (number) => {
  validateInput(number);
  let remainder = number;
  let romanNumeral = '';
  // On each step
  // Deducts largest possible chunk of value
  // and appends the corresponding symbol(s) to the output
  // until remainder is zero
  while (remainder > 0) {
    const [value, symbol] = romanSymbols.filter(([value, symbol]) => {
      return value <= remainder;
    })[0];
    remainder = remainder - value;
    romanNumeral = `${romanNumeral}${symbol}`;
  }
  return romanNumeral;
};

const validateInput = (number) => {
  if (typeof number !== 'number') {
    throw new Error('input should be number type');
  }
  if (number < 1 || 4999 < number) {
    throw new Error('out of range. only valid for 0 < input < 5000');
  }
  if (!Number.isInteger(number)) {
    throw new Error('given value not an integer');
  }
};

module.exports = { convertToRomanNumeral };
