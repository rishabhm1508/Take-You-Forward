//Check if the given String is Palindrome or not

// Old school, poor way
function stringPalindrome(str) {
  if (!str.trim().length) {
    return true;
  }
  const newStr = str
    .trim()
    .toLowerCase()
    .split("")
    .filter((ele) => 122 >= ele.charCodeAt(0) && ele.charCodeAt(0) >= 97);

  return newStr === this.generateString("", newStr);
}

function generateString(newStr, strArr) {
  if (!strArr.length) {
    return newStr;
  }

  newStr = newStr + strArr.pop();
}

// new way using revsere, we check for element at opposite end and start moving in the string from
// left and right. If left and right are same then palindrome.
function palimdromeBetterWay(s) {
  const sArr = s.split();

  return this.checkIsEqualForPalindrome(0, s.length - 1, sArr);
}

function checkIsEqualForPalindrome(l, r, sArr) {
  if (l > r) {
    return true;
  }

  if (sArr[l] !== sArr[r]) {
    return false;
  }

  return this.checkIsEqualForPalindrome(l++, r--, sArr);
}
