/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  // create an object to hold our "piles"
  const piles = {};

  // iterate through array
  for (const element of arr) {
    // have we seen this number before?
    if (piles[element]) {
      // if yes, increment our current number of times seen
      piles[element] += 1;
      // piles[element] = piles[element] + 1;
    } else {
      // if no, create a new pile
      piles[element] = 1;
    }
  }

  // console.log(piles);

  // set up an arbitrary highest and key value
  // piles[Object.keys(piles)[0]]
  // Object.values(piles)[0]
  // -Infinity

  let highestValue = 0;
  let highestKey = null;

  // iterate through the "piles"
  for (const key in piles) {
    // console.log('value', piles[key]);
    // compare the value against current highestValue
    const currentValue = piles[key];
    if (currentValue > highestValue) {
      // if higher, set highest AND key value
      highestValue = currentValue;
      highestKey = key;
    }
  }

  // return key value
  return highestKey;
};

// Don't change below:
module.exports = { mode };
