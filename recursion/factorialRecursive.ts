function factorialRecursive(n) {
  if (n < 2) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
}
