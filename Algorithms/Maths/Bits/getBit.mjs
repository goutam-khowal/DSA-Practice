// This method shifts the relevant bit to the zeroth position. Then we perform AND operation with one which has bit pattern like 0001. This clears all bits from the original number except the relevant one. If the relevant bit is one, the result is 1, otherwise the result is 0.

export function getBit(number, bitPosition) {
  return (number >> bitPosition) & 1;
}
// 0001
// 0010
// 0011
// 0100
// 0101
let a = 5, //0101
  b = 3; //0011
a = a ^ b; //0110 = 6
b = a ^ b;
a = a ^ b;

console.log(a, b); // 3, 5
