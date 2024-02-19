// Input: ‘N’ = 3

// Output:

// A B C
// A B
// A

function nLetterTriangleRevserse(n) {
  const firstLettercode = 65;
  for (let i = n; i >= 0; i--) {
    let str = "";

    for (let j = 0; j <= i; j++) {
      str = str + String.fromCharCode(65 + j);
    }

    console.log(str);
  }
}

nLetterTriangleRevserse(3);
