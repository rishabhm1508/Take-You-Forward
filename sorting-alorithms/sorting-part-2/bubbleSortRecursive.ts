// Recursive call array bubble sort until array length is one.

function recursiveBubbleSort(arr) {
  //return this.rBubbleSort(arr);
  return this.recursiveBubbleTuf(arr, arr.length);
}

function rBubbleSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  let max = 0;
  let finalArr: any[] = [];

  for (let j = 0; j < arr.length; j++) {
    if (arr[max] < arr[j]) {
      max = j;
    }
  }
  finalArr.push(arr[max]);
  arr.splice(max, 1);
  const nextMax = this.rBubbleSort(arr);
  return [...finalArr, ...nextMax];
}

// another way TUF approach-

function recursiveBubbleTuf(arr, length) {
  if (length === 1) {
    return arr;
  }

  for (let j = 0; j < length - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }

  return recursiveBubbleTuf(arr, length - 1);
}
