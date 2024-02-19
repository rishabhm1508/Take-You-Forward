// Input: ‘N’ = 3

// Output:

// 1
// 2 3
// 4 5 6

function nNumberTriangle(n) {
  let t = 1;
  for (let i = 1; i <= n; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str = str + " " + t;
      t++;
    }
    console.log(str);
  }
}

nNumberTriangle(3);
