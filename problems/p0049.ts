/*
  Prime Permutations

  The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual
  in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are
  permutations of one another.

  There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this
  property, but there is one other 4-digit increasing sequence.

  What 12-digit number do you form by concatenating the three terms in this sequence?
*/

import { measureTime } from "../utils"

function solve() {
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

  const arePermutations = (num1: number, num2: number, num3: number): boolean => {
    const str1 = num1.toString().split('').sort().join('')
    const str2 = num2.toString().split('').sort().join('')
    const str3 = num3.toString().split('').sort().join('')
    return str1 === str2 && str2 === str3
  }

  for (let i = 1000; i <= 9999 - 2 * 3330; i++) {
    if (isPrime(i) && isPrime(i + 3330) && isPrime(i + 2 * 3330)) {
      if (arePermutations(i, i + 3330, i + 2 * 3330)) {
        return parseInt(`${i}${i + 3330}${i + 2 * 3330}`)
      }
    }
  }
  return -1; // If no such sequence is found
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//148748178147
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
