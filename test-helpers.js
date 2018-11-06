/**
 * Throw an error if given arguments are NOT strictly equal.
 */
const assert = (a, b) => {
  if (a !== b) {
    throw new Error(`${a} is not equal to ${b}`);
  }
}

/**
 * Wraps a given function in a try catch block and calls it.
 * Throws an error if given function doesn't throw an error.
 * If second parameter is passed, expects thrown error to
 * include given message.
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

module.exports = {
  assert,
  expectError,
};
