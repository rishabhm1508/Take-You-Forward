function recursiveInsertionSort(arr) {
  this.recursiveInsertions(arr, arr.length);
}

function recursiveInsertions(arr, n) {
  if (n === 1) {
    return arr;
  }

  this.recursiveInsertions(arr, n - 1);

  for (let d = n; d >= 1; d--) {
    if (arr[d] < arr[d - 1]) {
      [arr[d], arr[d - 1]] = [arr[d - 1], arr[d]];
    }
  }

  return arr;
}
