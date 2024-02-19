//Given an integer N, write a program to count the number of digits in N.

//Solution 1
function countDigitsSol1(n) {
  let length = n.toString().split("").length;

  if (n < 0) {
    return length - 1;
  }

  return length;
}

//Solution 2
function countDigitsSol2(n) {
  if (n < 0) {
    n = n * -1;
  }

  let count = 0;
  let j = n;

  while (j >= 1) {
    j = j / 10;
    count++;
  }

  return count;
}
