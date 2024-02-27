/*
  Pandigital Products

  We shall say that an n-digit number is pandigital if it makes use of all the digits 1 to n exactly
  once; for example, the 5-digit number, 15234, is 1 through 5 pandigital.

  The product 7254 is unusual, as the identity, 39 × 186 = 7254, containing multiplicand, multiplier,
  and product is 1 through 9 pandigital.

  Find the sum of all products whose multiplicand/multiplier/product identity can be written as a 1
  through 9 pandigital.

  HINT: Some products can be obtained in more than one way so be sure to only include it once in your
  sum.
*/

import { measureTime } from "../utils"

function solve() {

  const isPandigital = (a: number, b: number, c: number): boolean => {
    const concatenated = `${a}${b}${c}`
    if (concatenated.length !== 9) {
      return false
    }

    const digits = new Set(concatenated.split(''))
    return digits.size === 9 && !digits.has('0')
  }

  const products = new Set<number>()

  for (let a = 1; a < 10000; a++) {
    for (let b = 1; b < 10000; b++) {
      const c = a * b

      if (isPandigital(a, b, c)) {
        products.add(c)
      }
    }
  }

  return Array.from(products).reduce((sum, product) => sum + product, 0)

}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//45228
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
