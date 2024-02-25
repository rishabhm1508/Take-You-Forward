// Divide and sort to array

/**
 * Divide and sort to get the final array.
 * You divide the array until you get single element and traverse back merging them each time
 * until you get the final array.
 */

function mergeSort(arr) {
  return this.sortedMergeArray(arr);
}

function sortedMergeArray(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let finalArr: any[] = [];

  const left = this.sortedMergeArray(arr.slice(0, Math.floor(arr.length / 2)));
  const right = this.sortedMergeArray(
    arr.slice(Math.floor(arr.length / 2), arr.length)
  );
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] > right[rightIndex]) {
      finalArr.push(right[rightIndex]);
      rightIndex++;
    } else if (left[leftIndex] < right[rightIndex]) {
      finalArr.push(left[leftIndex]);
      leftIndex++;
    } else {
      finalArr.push(right[rightIndex]);
      finalArr.push(left[leftIndex]);
      leftIndex++;
      rightIndex++;
    }
  }

  while (leftIndex < left.length) {
    finalArr.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    finalArr.push(right[rightIndex]);
    rightIndex++;
  }

  return finalArr;
}
