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
      const a = prevFib[n - 1] ? prevFib[n - 1] : dynamicFib(n - 1);
      const b = prevFib[n - 2] ? prevFib[n - 2] : dynamicFib(n - 2);

      prevFib[n - 1] = a;
      prevFib[n - 2] = b;
      return a + b;
    }
  }
}
