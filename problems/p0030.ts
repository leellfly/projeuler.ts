/*
  Digit Fifth Powers

  Surprisingly there are only three numbers that can be written as the sum of fourth powers of their
  digits:
    1634 = 1^4 + 6^4 + 3^4 + 4^4
    8208 = 8^4 + 2^4 + 0^4 + 8^4
    9474 = 9^4 + 4^4 + 7^4 + 4^4

  As 1 = 1^4 is not a sum it is not included.
  The sum of these numbers is 1634 + 8208 + 9474 = 19316.

  Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.
*/

import { measureTime } from "../utils"

function solve(): number {
  let result = 0;

  const pow5Cache: Array<number> = Array.from({ length: 10 }, (_, i) => Math.pow(i, 5));

  for (let i = 2; i < 354294; i++) {
    let temp = 0;
    let num = i;

    while (num > 0) {
      temp += pow5Cache[num % 10];
      num = Math.floor(num / 10);
    }

    if (temp === i) {
      result += i;
    }
  }

  return result;
}


const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//443839
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
