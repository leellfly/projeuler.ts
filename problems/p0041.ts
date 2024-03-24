/*
  Pandigital Prime

  We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly
  once. For example, 2143 is a 4-digit pandigital and is also prime.

  What is the largest n-digit pandigital prime that exists?
*/

import { measureTime } from "../utils"

function solve() {
  const isPandigital = (n: number): boolean => {
    const nDigitStr = n.toString();
    if (nDigitStr.length !== 9) {
      return false;
    }
    const nDigitSet = new Set(nDigitStr.split(''));
    return nDigitSet.size === 9 && !nDigitSet.has('0');
  }

  const isPrime = (n: number): boolean => {
    if (n <= 1) {
      return false;
    }
    if (n === 2) {
      return true;
    }
    if (n % 2 === 0) {
      return false;
    }
    const sqrtN = Math.sqrt(n);
    for (let j = 3; j <= sqrtN; j += 2) {
      if (n % j === 0) {
        return false;
      }
    }
    return true;
  }

  let largest = 0;

  // 减少循环范围，只遍历可能的 9 位数的倍数
  for (let i = 987654321; i >= 123456789; i--) {
    if (isPandigital(i) && isPrime(i)) {
      largest = i;
      break; // 找到最大的即可退出循环
    }
  }

  return largest;
}


const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
