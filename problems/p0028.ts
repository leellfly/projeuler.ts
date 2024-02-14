/*
  Number Spiral Diagonals

  Starting with the number 1 and moving to the right in a clockwise direction a 5 by 5 spiral is
  formed as follows:

          [21]     22      23      24     [25]
          20     [ 7]      8     [ 9]     10
          19       6     [ 1]      2      11
          18     [ 5]      4     [ 3]     12
          [17]     16      15      14     [13]

  It can be verified that the sum of the numbers on the diagonals is 101.

  What is the sum of the numbers on the diagonals in a 1001 by 1001 spiral formed in the same way?
*/

import { measureTime } from "../utils"

function solve() {
  let s: number = 1

  let i: number = 3
  let d: number = 2
  let c: number = 0

  while (i <= 1001 * 1001) {
    s += i
    c += 1

    if (c === 4) {
      c = 0
      d += 2
    }

    i += d
  }

  return s
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//669171001
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
