function reverseArrayRecursive(n) {
  return this.reverseArrayFunc([], n);
}

//Time Complexity: O(n)
function reverseArrayFunc(reversedArray, n) {
  if (!n.length) {
    return reversedArray;
  }
  reversedArray.push(n.pop());

  return (reversedArray = this.reverseArrayFunc(reversedArray, n));
}

function reverseArrayUsingSnap(n) {
  let i = 0;
  let j = n.length - 1;
  while (j > i) {
    [n[i], n[j]] = [n[j], n[i]];
    j--;
    i++;
  }
  return n;
}
