/*
  Double-base Palindromes

  The decimal number, 585 = 1001001001 (binary), is palindromic in both bases.

  Find the sum of all numbers, less than one million, which are palindromic in base 10 and base 2.

  (Please note that the palindromic number, in either base, may not include leading zeros.)
*/

import { measureTime } from "../utils"

function solve() {

}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
