/*
  Distinct Primes Factors

  The first two consecutive numbers to have two distinct prime factors are:
    14 = 2 × 7
    15 = 3 × 5

  The first three consecutive numbers to have three distinct prime factors are:
    644 = 2^2 × 7 × 23
    645 = 3 × 5 × 43
    646 = 2 × 17 × 19

  Find the first four consecutive integers to have four distinct prime factors each. What is the
  first of these numbers?
*/

import { measureTime } from "../utils"
function solve() {
  const countDistinctPrimeFactors = (num: number): number => {
    let count = 0
    let divisor = 2

    while (num > 1) {
      if (num % divisor === 0) {
        count++
        while (num % divisor === 0) {
          num /= divisor
        }
      }
      divisor++
    }

    return count
  }

  let num = 647

  while (true) {
    if (countDistinctPrimeFactors(num) === 4 &&
      countDistinctPrimeFactors(num + 1) === 4 &&
      countDistinctPrimeFactors(num + 2) === 4 &&
      countDistinctPrimeFactors(num + 3) === 4) {
      return num
    }
    num++
  }
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//134043
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
