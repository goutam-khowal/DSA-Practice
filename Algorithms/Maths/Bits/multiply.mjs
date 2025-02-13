import multiplyByTwo from "./multiplyByTwo.mjs";
import divideByTwo from "./divideByTwo";
import isEven from "./isEven";
import isPositive from "./isPositive";

export default function multiply(a, b) {
  // If a is zero or b is zero or if both a and b are zeros then the production is also zero.
  if (b === 0 || a === 0) {
    return 0;
  }
  // Otherwise we will have four different cases that are described above.
  const multiplyByOddPositive = () =>
    multiply(multiplyByTwo(a), divideByTwo(b - 1)) + a;
  const multiplyByOddNegative = () =>
    multiply(multiplyByTwo(a), divideByTwo(b + 1)) - a;

  const multiplyByEven = () => multiply(multiplyByTwo(a), divideByTwo(b));
  const multiplyByOdd = () =>
    isPositive(b) ? multiplyByOddPositive() : multiplyByOddNegative();

  return isEven(b) ? multiplyByEven() : multiplyByOdd();
}
