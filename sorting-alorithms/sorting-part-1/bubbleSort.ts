/**
 * =================== Main Highlight =================
 * Push the biggest element to the right of the array or the smallest element bubbles up.
 * You assume first element is biggest and compare to the next, if not then swap.
 * =================== Main Highlight =================
 * Opposite of selection sort.
 * You will run the loop - 0 -> n-1, 0 -> n-2, 0 -> n-3 until 0 -> 1, so basically i goes from
 * n-1 to 1. And the inner loop will run from 0 to i-1 because you are comparing from
 * present and the next element and if they are not equal then we are swapping. If you
 * dnt run the loop till i-1, then it will be run time error.
 */

function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 1; i--) {
    for (let j = 0; j <= i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
