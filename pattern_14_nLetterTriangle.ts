// Input: ‘N’ = 3

// Output:

// A
// A B
// A B C

function nLetterTriangle(n) {
  const firstLettercode = 65;
  for (let i = 0; i < n; i++) {
    let str = "";

    for (let j = 0; j <= i; j++) {
      str = str + String.fromCharCode(65 + j);
    }

    console.log(str);
  }
}

nLetterTriangle(3);
