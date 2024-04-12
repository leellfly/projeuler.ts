/*
  Consecutive Prime Sum

  The prime 41, can be written as the sum of six consecutive primes:
    41 = 2 + 3 + 5 + 7 + 11 + 13

  This is the longest sum of consecutive primes that adds to a prime below one-hundred.

  The longest sum of consecutive primes below one-thousand that adds to a prime, contains 21 terms,
  and is equal to 953.

  Which prime, below one-million, can be written as the sum of the most consecutive primes?
*/

import { measureTime } from "../utils"

function solve(limit: number) {
  const isPrime = (num: number): boolean => {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
    let i = 5
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false
      i += 6
    }
    return true
  }

  const findPrimesBelowLimit = (limit: number): number[] => {
    const primes: number[] = []
    for (let i = 2; i < limit; i++) {
      if (isPrime(i)) {
        primes.push(i)
      }
    }
    return primes
  }

  const primes = findPrimesBelowLimit(limit)
  let maxLength = 0
  let maxPrime = 0
  
  for (let i = 0; i < primes.length; i++) {
    let sum = 0
    for (let j = i; j < primes.length; j++) {
      sum += primes[j]
      if (sum > limit) break
      if (isPrime(sum) && j - i + 1 > maxLength) {
        maxLength = j - i + 1
        maxPrime = sum
      }
    }
  }
  return maxPrime
}

const [result, elapsedTime] = measureTime(() => solve(1000000))
console.log('result', result)//997651
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
