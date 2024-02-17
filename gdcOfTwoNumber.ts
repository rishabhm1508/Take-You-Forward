//Problem Statement: Find the gcd of two numbers.

// Brute Force
function findGDC(n, m) {
  const min = Math.min(n, m);
  let GDC = 1;

  for (let l = 1; l <= min; l++) {
    if (!(n % l) && !(m % l)) {
      GDC = l;
    }
  }

  return GDC;
}

// Optimal Solution Using Euclidean Algorirthm

/**
 * Euclidean Algorirthm - Says that if a = qb + r, then GDC(a,b) is equal to GCD(b,r).
 * if d divides a and d divides b, then d would divide (a - qb), which is actually r.
 */

function GCDUsingEuclideanAlgo(m, n) {
  const min = Math.min(m, n);

  if (!min) {
    return !m ? n : m;
  }

  //assuming n is smaller then m would be nq + r, we can repeat this operation until we get
  // 0 as remainder and the larger number would be GCD.

  return GCDUsingEuclideanAlgo(min, m % n);
}
