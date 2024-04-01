/*
  Goldbach's Other Conjecture

  It was proposed by Christian Goldbach that every odd composite number can be written as the sum of
  a prime and twice a square.
    9 =  7 + 2 × 1^2
    15 =  7 + 2 × 2^2
    21 =  3 + 2 × 3^2
    25 =  7 + 2 × 3^2
    27 = 19 + 2 × 2^2
    33 = 31 + 2 × 1^2

  It turns out that the conjecture was false.

  What is the smallest odd composite that cannot be written as the sum of a prime and twice a square?
*/

import { measureTime } from "../utils"

function solve(): number {
  const isPrime = (num: number): boolean => {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
    let i = 5
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false
      i += 6
    }
    return true;
  }

  let oddComposite = 9

  while (true) {
    if (!isPrime(oddComposite)) {
      let found = false
      for (let i = 1; i < oddComposite; i++) {
        if (isPrime(oddComposite - (2 * i * i))) {
          found = true
          break
        }
      }
      if (!found) {
        return oddComposite
      }
    }
    oddComposite += 2
  }
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//5777
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
