/*
  Factorial Digit Sum

  n! means n × (n − 1) × ... × 3 × 2 × 1.

  For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800, and the sum of the digits in the number 10!
  is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.

  Find the sum of the digits in 100!.
*/

import { measureTime } from "../utils"

function solve() {
  const Factorial = (n: bigint): bigint => {
    if (n === 1n) return 1n
    return (n * Factorial(n - 1n))
  }

  const factorialResult = Factorial(100n)

  const factorialDigitSum = Array.from(factorialResult.toString())
    .reduce((pre, next) => pre + +next, 0)

  return factorialDigitSum
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//648
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
