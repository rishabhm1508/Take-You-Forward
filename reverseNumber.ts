// Given a number N reverse the number and print it.

// Solution 1
function reverseSolution1(n) {
  if (n < 0) {
    n = n * -1;
  }

  return Number(n.toString().split("").reverse().join(""));
}

//SOLUTION 2

function reverseSolution2(n) {
  if (n < 0) {
    n = n * -1;
  }

  let newN = "";
  let j = n;

  while (j >= 1) {
    let remainder = j % 10;
    j = j / 10;
    newN = newN + Math.trunc(remainder);
  }

  return +newN;
}
