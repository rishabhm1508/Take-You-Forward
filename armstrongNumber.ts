// Check if a number is Armstrong Number or not

//Armstrong Numbers are the numbers having the sum of digits raised to power no. of digits is
// equal to a given number. eg- 0, 1, 153, 370, 371, 407, and 1634 are some of the Armstrong Numbers.

function isArmstrongNumber(n) {
  if (n < 10) {
    return !n || n === 1;
  }

  const digitCount = n.toString().split("").length;
  let newNum = 0;
  let numToCheck = n;

  while (numToCheck > 0) {
    const digit = numToCheck % 10;
    numToCheck = Math.floor(numToCheck / 10);
    newNum = newNum + Math.pow(digit, digitCount);
  }

  return newNum === n;
}
