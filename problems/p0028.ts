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

function solve(layerNumber: number) {
  let diagonalsSum: number = 1

  let currentLayer: number = 2

  let step = 2

  let maxLayer = (layerNumber + 1) / 2

  let curValue = 1

  while (currentLayer <= maxLayer) {
    for (let i = 0; i < 4; i++) {
      curValue += step
      diagonalsSum += curValue
    }

    currentLayer++
    step += 2
  }

  return diagonalsSum
}

const [result, elapsedTime] = measureTime(() => solve(1001))
console.log('result', result)//669171001
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
