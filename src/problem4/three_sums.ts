// Assuming this input will always produce a result lesser than Number.MAX_SAFE_INTEGER.
let MAX = Number.MAX_SAFE_INTEGER;

function sum_to_n_a(sum: number): number {
  // Solution 1: Brute force
  let res = 0;
  for (let i = 1; i <= sum; i++) {
    res += i;
    if (res > MAX) {
      throw new Error("Result exceeds MAX_SAFE_INTEGER");
    }
  }
  return sum;
}

function sum_to_n_b(sum: number): number {
  // Solution 2: Using formula
  let res = (sum * (sum + 1)) / 2;
  if (res > MAX) {
    throw new Error("Result exceeds MAX_SAFE_INTEGER");
  }
  return (sum * (sum + 1)) / 2;
}

function sum_to_n_c(sum: number): number {
  // Solution 3: Using recursion
  if (sum === 0) {
    return 0;
  }
  if (sum > MAX) {
    throw new Error("Result exceeds MAX_SAFE_INTEGER");
  }

  return sum + sum_to_n_c(sum - 1);
}
