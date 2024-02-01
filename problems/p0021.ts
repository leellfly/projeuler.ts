/*
  Amicable Numbers

  Let d(n) be defined as the sum of proper divisors of n (numbers less than n which divide evenly
  into n).
  If d(a) = b and d(b) = a, where a ≠ b, then a and b are an amicable pair and each of a and b are
  called amicable numbers.

  For example, the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110; therefore
  d(220) = 284. The proper divisors of 284 are 1, 2, 4, 71 and 142; so d(284) = 220.

  Evaluate the sum of all the amicable numbers under 10000.
*/

import { measureTime } from "../utils"

function solve() {
  const getSumOfDivisors = (n: number) => {
    const divisors: Array<number> = []

    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        divisors.push(i)
      }
    }

    const sum = divisors.reduce((pre, next) => pre + next, 0)

    return sum
  }

  const isAmicableNumbers = (a: number, b: number) => {
    const d = getSumOfDivisors
    return ((a !== b) && (d(a) === b) && d(b) === a)
  }

  let visited: Array<number> = []
  let sumOfAmicableNumbers = 0

  for (let i = 0; i < 10000; i++) {
    if (visited.indexOf(i) === -1) {
      const d = getSumOfDivisors

      let a = i
      let b = d(i)

      if (isAmicableNumbers(a, b)) {
        sumOfAmicableNumbers += (a + b)
        visited.push(b)
      }

    }
  }

  return sumOfAmicableNumbers
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//31626
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
