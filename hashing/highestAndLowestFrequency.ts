//Find the highest/lowest frequency element

function highestAndLowestFreq(arr) {
  const freqObj: { key: any; value: number } = {} as {
    key: any;
    value: number;
  };
  let lowest = "";
  let highest = "";

  for (let k = 0; k < arr.length; k++) {
    freqObj[arr[k]] = freqObj[arr[k]] ? freqObj[arr[k]] + 1 : 1;
  }

  for (const entry of Object.entries(freqObj)) {
    if (!freqObj[lowest] || entry[1] < freqObj[lowest]) {
      lowest = entry[0];
    }

    if (!freqObj[highest] || entry[1] > freqObj[highest]) {
      highest = entry[0];
    }
  }

  return {
    highest,
    lowest,
  };
}

highestAndLowestFreq([10, 5, 10, 15, 10, 5]);
