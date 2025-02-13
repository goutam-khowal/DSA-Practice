import countSetBits from "./countSetBits";

/**
 * Counts the number of bits that need to be change in order
 * to convert numberA to numberB.
 *
 */
export default function bitsDiff(numberA, numberB) {
  return countSetBits(numberA ^ numberB);
}
