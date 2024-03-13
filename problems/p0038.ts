/*
Pandigital Multiples

Take the number 192 and multiply it by each of 1, 2, and 3:
  192 × 1 = 192
  192 × 2 = 384
  192 × 3 = 576

By concatenating each product we get the 1 to 9 pandigital, 192384576. We will call 192384576 the
concatenated product of 192 and (1,2,3).

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the
pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

What is the largest 1 to 9 pandigital 9-digit number that can be formed as the concatenated product
of an integer with (1,2, ... , n) where n > 1?

*/

import { measureTime } from "../utils"

function solve() {
  const isPandigital = (num: number): boolean => {
    const digits = num.toString()
    return new Set(digits).size === 9 && digits.length === 9 && !digits.includes('0')
  }

  const concatenatedProduct = (n: number): number => {
    let concatenated = ''
    for (let i = 1; concatenated.length < 9; i++) {
      concatenated += (n * i).toString()
    }
    return parseInt(concatenated)
  }

  let largestPandigital = 0

  for (let i = 1; i < 10000; i++) {
    const concatenated = concatenatedProduct(i)
    if (isPandigital(concatenated) && concatenated > largestPandigital) {
      largestPandigital = concatenated
    }
  }
  
  return largestPandigital
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//932718654
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
