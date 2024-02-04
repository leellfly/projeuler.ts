/*
  Non-Abundant Sums

  A perfect number is a number for which the sum of its proper divisors is exactly equal to the
  number. For example, the sum of the proper divisors of 28 would be 1 + 2 + 4 + 7 + 14 = 28, which
  means that 28 is a perfect number.

  A number n is called deficient if the sum of its proper divisors is less than n and it is called
  abundant if this sum exceeds n.

  As 12 is the smallest abundant number, 1 + 2 + 3 + 6 = 16, the smallest number that can be writaten
  as the sum of two abundant numbers is 24. By mathematical analysis, it can be shown that all
  integers greater than 28123 can be written as the sum of two abundant numbers. However, this upper
  limit cannot be reduced any further by analysis even though it is known that the greatest number
  that cannot be expressed as the sum of two abundant numbers is less than this limit.

  Find the sum of all the positive integers which cannot be written as the sum of two abundant
  numbers.
*/

import { measureTime } from "../utils"

function solve() {
  const calculateProperDivisorsSum = (n: number): number => {
    let sum = 1// 1 is a proper divisor for all numbers
    const sqrtN = Math.sqrt(n)

    for (let i = 2; i <= sqrtN; i++) {
      if (n % i === 0) {
        sum += i
        if (i !== n / i) sum += n / i
      }
    }

    return sum
  }

  //check if the sum of its proper divisors is exactly exceeds to the number
  const isAbundantNumber = (n: number) => calculateProperDivisorsSum(n) > n

  // cache results for abundant numbers
  const isAbundant = Array.from({ length: 28123 + 1 }, (_, i) => isAbundantNumber(i))

  const isSumOfTwoAbundantNumbers = (n: number): boolean => {
    for (let i = 12; i <= n / 2; i++) {
      if (isAbundant[i] && isAbundant[n - i]) {
        return true
      }
    }
    return false
  }

  let nonAbundantSums = 0

  for (let i = 1; i <= 28123; i++) {
    if (i < 24 || !isSumOfTwoAbundantNumbers(i)) {
      nonAbundantSums += i
    }
  }

  return nonAbundantSums
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//4179871
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
