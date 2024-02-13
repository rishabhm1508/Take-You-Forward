// Input: ‘N’ = 3

// Output:

// 1
// 0 1
// 1 0 1

function nBinaryTriangle(n) {
  for (let i = 1; i <= n; i++) {
    let str = `${i % 2}`;
    for (let j = 1; j < i; j++) {
      i % 2
        ? (str = str + (j % 2 === 1 ? "0" : "1"))
        : (str = str + (j % 2 === 1 ? "1" : "0"));
    }
    console.log(str);
  }
}
