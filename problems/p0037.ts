/*
  Truncatable Primes

  The number 3797 has an interesting property. Being prime itself, it is possible to continuously
  remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly
  we can work from right to left: 3797, 379, 37, and 3.

  Find the sum of the only eleven primes that are both truncatable from left to right and right to
  left.

  NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/

import { measureTime } from "../utils"

function solve() {
  const right2LeftRemove = (digit: number): number[] => {
    let result = []
    const digitStr = digit.toString()
    const len = digitStr.length

    for (let i = 0; i < len; i++) {
      result.push(+digitStr.slice(0, len - i))
    }

    return result
  };

  const left2RightRemove = (digit: number): number[] => {
    let result = []
    const digitStr = digit.toString()
    const len = digitStr.length

    for (let i = 0; i < len; i++) {
      result.push(+digitStr.slice(i))
    }

    return result
  };

  const isPrime = (n: number, primes: Set<number>): boolean => {
    if (n <= 1) {
      return false
    }
    if (primes.has(n)) {
      return true
    }

    const sqrtN = Math.sqrt(n)
    for (let j = 2; j <= sqrtN; j++) {
      if (n % j === 0) {
        return false
      }
    }
    primes.add(n)
    return true
  }

  let sum = 0
  let count = 0
  const primes = new Set<number>()

  for (let i = 11; i < 1000000; i++) {
    const remainDigitR2L = right2LeftRemove(i)
    const remainDigitL2R = left2RightRemove(i)
    const truncatablePrimes = [...remainDigitL2R, ...remainDigitR2L]

    const isTruncatablePrimes = truncatablePrimes.every((item) => isPrime(item, primes))

    if (isTruncatablePrimes) {
      sum += i
      count++
    }

    if (count === 11) break
  }

  return sum
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
