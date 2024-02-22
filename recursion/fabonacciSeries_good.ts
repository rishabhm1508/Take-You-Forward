// Problem Statement: Given an integer N. Print the Fibonacci series up to the Nth term.

// Using for loop
function fabonacciSeries(n) {
  const arr: number[] = [];
  for (let k = 0; k < n; k++) {
    if (k - 2 >= 0) {
      arr.push(k - 1 + (k - 2));
    } else {
      arr.push(k);
    }
  }

  return arr.toString();
}

// Using recursion

function printFabonacci(n: any) {
  let arr: any[] = [];
  for (let l = 0; l < n; l++) {
    arr.push(this.fabonacciRecursive(l));
  }
  console.log(arr.toString());
}

let hashed = {};

function getTime() {
  console.log(new Date().getTime());
}

function fabonacciRecursive(n: any) {
  if (n === 0) {
    return 0;
  }

  if (n === 1) {
    return 1;
  }

  if (!hashed[n]) {
    hashed[n] = this.fabonacciRecursive(n - 1) + this.fabonacciRecursive(n - 2);
  }

  return hashed[n];
}

this.getTime();

printFabonacci(30);

this.getTime();
