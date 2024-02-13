//1. Whenever operations are based on division, the time complexity is logarithmic. eg. countDigits, reverse number etc.

function counDigits(n) {
  // Math.log10(n) is approximately the times 10 divisions happended. Around 3.8 here. So time complexity would be O(log(base10)n)
  // Similarly when you divide by 2, then log base will be 2 for time complexity.
  let count = Math.ceil(Math.log10(n));

  return count;
}
