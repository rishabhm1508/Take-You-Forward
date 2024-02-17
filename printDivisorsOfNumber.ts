//Print all Divisors of a given Number

/**
 * The above method takes O(n) time complexity. We can also think of another approach.
 *
 * If we take a closer look, we can notice that the quotient of a division by one of the
 * divisors is actually another divisor. Like, 4 divides 36. The quotient is 9, and 9 also
 * divides 36.
 *
 * Another intuition is that the root of a number actually acts as a splitting part of all the
 * divisors of a number.
 * Also, the quotient of a division by any divisor gives an equivalent divisor on the other side.
 * Like, 4 gives 9 while dividing 36. See the image below.
 */

//Time Complexity: O(sqrt(n)), because every time the loop runs only sqrt(n) times.

function printAllDivisors(n) {
  let sqrt = Math.sqrt(n);
  const list: number[] = [];

  for (let k = 1; k <= sqrt; k++) {
    if (!(n % k)) {
      list.push(k);

      // Very important condition, if 36/2 = 18. 2 is also factor and 18 is also factor.
      // As we are running till sqrt, this condition is taken, if we had run from 0 to n, then
      // this condition is not needed because we count all of the divisors.
      if (!(n % (n / k)) && n / k !== k) {
        list.push(n / k);
      }
    }
  }

  return list.length;
}
