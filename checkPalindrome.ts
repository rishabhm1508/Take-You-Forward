//An integer is considered a palindrome when it reads the same backward as forward.

function checkPalindrome(n) {
  let newNumber = 0;
  let numberCheck = n;
  while (numberCheck > 0) {
    let digit = newNumber % 10;
    newNumber = newNumber * 10;
    newNumber = newNumber + digit;
    numberCheck = (numberCheck - digit) / 10;
  }
  newNumber = newNumber + numberCheck;

  return newNumber == n;
}
