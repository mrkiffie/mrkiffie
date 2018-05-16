export const recursive = (remainingSteps: number, sum: number = 0): number => {
  if (remainingSteps < 1) {
    return sum;
  }
  return recursive(remainingSteps - 1, sum + remainingSteps);
};

export const loop = (steps: number = 0) => {
  let sum = 0;
  while (steps > 0) {
    sum += steps;
    steps--;
  }
  return sum;
};

export const logic = (n: number) => {
  if (n < 0) {
    return 0;
  }
  if (n % 2 === 1) {
    return n * ((n + 1) >> 1);
  } else {
    return n * ((n + 1) >> 1) + ((n + 1) >> 1);
  }
};

export const bitwise = (n: number) =>
  n > -1
    ? n & 1
      ? n * ((n + 1) >> 1)
      : n * ((n + 1) >> 1) + ((n + 1) >> 1)
    : 0;
