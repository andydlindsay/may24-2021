/* Question 1
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * MIN - the lowest value in a list
 *
 * For example:
 *
 *    min([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    0
 */
const min = function(arr) {
  // Math.min(...arr);

  // select an arbitrary smallest number
  let smallest = arr[0];

  // iterate through array
  for (const element of arr) {
    // compare each value against the current smallest value
    if (element < smallest) {
      // if it is smaller, replace current smallest value
      smallest = element;
    }
  }

  // return smallest value
  return smallest;
};


/* ===========================================================================
 * MAX - the highest value in a list
 *
 * For example:
 *
 *    max([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const max = function(arr) {
  // start with an arbitrary high value
  let highest = arr[0];

  // iterate through array
  for (const element of arr) {
    // compare each element against the current highest
    if (element > highest) {
      // if higher, update the current highest to the element
      highest = element;
    }
  }

  // return the highest value
  return highest;
};

/* ===========================================================================
 * RANGE - the difference between the highest and lowest values in a list
 *
 * For example:
 *
 *    range([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    9
 */
const range = function(arr) {
  const highest = max(arr);
  const lowest = min(arr);
  return highest - lowest;
};

// Don't change below:

module.exports = { min, max, range };
