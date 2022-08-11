export const fib = (number) =>
  number <= 2 ? 1 : fib(number - 1) + fib(number - 2);

const prevFib = [];
export function dynamicFib(n) {
  if (prevFib[n]) {
    return prevFib[n];
  } else {
    if (n <= 2) {
      prevFib[n] = 1;
      return prevFib[n];
    } else {
      if (!prevFib[n - 1]) {
        prevFib[n - 1] = dynamicFib(n - 1);
      }
      if (!prevFib[n - 2]) {
        prevFib[n - 2] = dynamicFib(n - 2);
      }

      return prevFib[n - 1] + prevFib[n - 2];
    }
  }
}
