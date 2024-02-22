/**
 * Always takes an element and places that in the correct position.
 * You take first element as array, then first two element and compare them and so on. That is,
 * i goes from 0 -> 0 ( we can ignore this case as array of length is always sorted ),
 * 0 -> 1 till 0 -> n-1 and j is the tranversal of the sub array.
 *
 * <----------------Important------------->
 * You take the last element in the sub array and move left until the correct position is reached
 * for that element.
 */

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] > arr[j - 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
  }
  return arr;
}

// [ 10, 4, 15, 1]

/**
 * i = 1
 *  - j values -> 1 array compared - [10, 4], result  => [4, 10 ]
 * i = 2
 *  - j values -> 2,1 , array compared - [4, 10, 15], result  => [4, 10, 15 ]
 * i = 3
 *  - j values -> 3,2,1 , array compared - [4, 10, 15, 3 ], result  => [3, 4, 10, 15 ]
 * ( '3' moves left until it finds the correct postion for itself)
 */
