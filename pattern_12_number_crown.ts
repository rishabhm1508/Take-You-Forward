// Input: ‘N’ = 3

// Output:

// 1         1
// 1 2     2 1
// 1 2 3 3 2 1

function numberCrown(n) {
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + j;
    }
    for (let j = n - i; j >= 1; j--) {
      str = str + "*";
    }
    for (let j = n - i; j >= 1; j--) {
      str = str + "*";
    }
    for (let j = i; j >= 1; j--) {
      str = str + j;
    }
    console.log(str);
  }
}

numberCrown(3);
