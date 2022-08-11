export const fib = (number) =>
  number <= 2 ? 1 : fib(number - 1) + fib(number - 2);

export function dynamicFib(n, prevFib = [undefined, 1, 1]) {
  if (prevFib[n]) {
    return prevFib[n];
  } else {
    prevFib[n] = dynamicFib(n - 1, prevFib) + dynamicFib(n - 2, prevFib);
    return prevFib[n];
  }
}
