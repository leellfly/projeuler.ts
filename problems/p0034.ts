/*
  Digit Factorials

  145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.

  Find the sum of all numbers which are equal to the sum of the factorial of their digits.

  Note: As 1! = 1 and 2! = 2 are not sums, they are not included.
*/

import { measureTime } from "../utils"

function solve() {
  const getDigitFactorials = (n: number): number => {
    if (n === 0 || n === 1) return 1
    return n * getDigitFactorials(n - 1)
  }

  const digitCacheArr: number[] = Array.from({ length: 10 }, (_, x: number) => getDigitFactorials(x))

  let sum = 0

  const UPPER_LIMIT = 1000000

  for (let i = 10; i <= UPPER_LIMIT; i++) {
    let digitFactorials = i.toString().split('').reduce((total, current) => total + digitCacheArr[(+current)], 0)
    if (i == digitFactorials) {
      sum += i
    }
  }

  return sum
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//40730
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
