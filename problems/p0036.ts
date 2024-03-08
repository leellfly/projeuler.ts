/*
  Double-base Palindromes

  The decimal number, 585 = 1001001001 (binary), is palindromic in both bases.

  Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

  (Please note that the palindromic number, in either base, may not include leading zeros.)
*/

import { measureTime } from "../utils"

function solve() {
  const isPalindromic = (digital: number | string): boolean => {
    const digitalStr = typeof digital === "number" ? digital.toString() : digital
    const digitalRevertStr = digitalStr.split('').reverse().join('')
    return digitalStr === digitalRevertStr
  }

  const decimal2Binary = (decimalNumber: number): string => {
    if (decimalNumber === 0) {
      return '0'
    }

    let binaryResult: string = ''
    while (decimalNumber > 0) {
      const remainder: number = decimalNumber % 2
      binaryResult = remainder.toString() + binaryResult
      decimalNumber = Math.floor(decimalNumber / 2)
    }

    return binaryResult
  }

  let sum = 0

  for (let i = 1; i <= 1000000; i++) {
    if (isPalindromic(i)) {
      const digitalBinary = decimal2Binary(i)
      if (isPalindromic(digitalBinary)) {
        sum += i
      }
    }
  }

  return sum
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//872187
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
