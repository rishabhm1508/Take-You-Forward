//Pattern – 10: Half Diamond Star Pattern

// n = 3
// *
// **
// ***
// **
// *

function halfDiamond(n: number) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i) + " ".repeat(n - i));
  }

  for (let i = n - 1; i >= 1; i--) {
    console.log("*".repeat(i) + " ".repeat(n - i));
  }
}

halfDiamond(3);
