//Problem Statement: Given a number, check whether it is prime or not. A prime number is a
//natural number that is only divisible by 1 and by itself.

// Approach - If the loop runs till square root and none of the numbers divided it completely.
// So it is the Prime number.

//Time Complexity: O(√n)

function checkIsPrime(n) {
  if (n < 3 && n > 0) {
    return true;
  }

  if (!(n % 2)) {
    return false;
  }
  const sqrt = Math.floor(Math.sqrt(n));
  let prime = true;
  for (let l = 3; l <= sqrt; l++) {
    if (!(n % l)) {
      prime = false;
      break;
    }
  }

  return prime;
}
