const romanSymbols = [
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [1, 'I'],
];

/**
 * Converts given number to roman numerals.
 * @param number [number] Number to be converted
 * @return [string] Corresponding roman numeral value
 */
const convertToRomanNumeral = (number) => {
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

module.exports = { convertToRomanNumeral };
