/*
  Pandigital Prime

  We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly
  once. For example, 2143 is a 4-digit pandigital and is also prime.

  What is the largest n-digit pandigital prime that exists?
*/

import { measureTime } from "../utils"

function solve() {

  const isPandigital = (nDigit: number): boolean => {
    const nDigitStr = nDigit.toString()

    if (nDigitStr.length != 9) {
      return false
    }

    const nDigitSet = new Set(...nDigitStr.split(''))
    return nDigitSet.size === 9 && !nDigitSet.has('0')
  }

  const isPrime = (n: number) => {
    if (n <= 1) {
      return false
    }
    if (n == 2) {
      return true
    }

    const middleN = n / 2
    for (let j = 2; j < middleN; j++) {
      if (n % j === 0) {
        return false
      }
    }
    return true
  }

  let largest = 0

  for (let i = 1; i <= 987654321; i++) {
    if (isPandigital(i) && isPrime(i)) {
      largest = largest > i ? largest : i
    }
  }

  return largest
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
