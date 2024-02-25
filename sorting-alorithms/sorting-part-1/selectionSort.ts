/**
 * Select minimum index and swap ( or sort )
 *
 *  - outer loop runs 0 to n-2 times because the last element would be already sorted.
 *  - inner loop runs i to n-1 times. Number of times loop runs decreased with i increasing
 *    or you can say with array becoming more and more sorted.
 *
 * <------------------Important--------------->
 * Assume that i index is the minimum value, run through the loop with that minimum,
 * updated the minimum index with the smalled value in the left over array. When you reach
 * the end of array, the swap with i and thus the smalled element comes at the position of
 * i index and making the left portion of i sorted.
 */

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minimum = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j;
      }
    }
    if (minimum !== i) {
      [arr[i], arr[minimum]] = [arr[minimum], arr[i]];
    }
  }
  return arr;
}

/**
 * array = [3, 15, 10, 1]
 *
 * Step 1-
 *  i = 0, minimum => starts with 0 value and by the end of array becomes 3. Thus you swap
 *  result => [1, 15, 10, 3].
 *
 * Step 2-
 * i = 1, minimum => starts with 1 value and by end it becomes 3.
 * result => [1, 3, 10, 15]
 *
 */
