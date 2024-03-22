/*
  Champernowne's Constant

  An irrational decimal fraction is created by concatenating the positive integers:
    0.12345678910[1]112131415161718192021...
  It can be seen that the 12th digit of the fractional part is 1.

  If d(n) represents the nth digit of the fractional part, find the value of the following expression.
    d(1) × d(10) × d(100) × d(1000) × d(10000) × d(100000) × d(1000000)
*/

import { measureTime } from "../utils"

function solve(): number {
  let concatenated = ''
  let currentLength = 0
  let i = 1

  while (currentLength <= 1000000) {
    concatenated += i
    currentLength += i.toString().length
    i++
  }

  let concatenatedArr = concatenated.split('')

  //TODD
  const d1 = +concatenatedArr[0]
  const d10 = +concatenatedArr[9]
  const d100 = +concatenatedArr[99]
  const d1000 = +concatenatedArr[999]
  const d10000 = +concatenatedArr[9999]
  const d100000 = +concatenatedArr[99999]
  const d1000000 = +concatenatedArr[999999]

  return d1 * d10 * d100 * d1000 * d10000 * d100000 * d1000000

}


const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//210
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
