/*
  Prime Permutations

  The arithmetic sequence, 1487, 4817, 8147, in which each of the terms increases by 3330, is unusual
  in two ways: (i) each of the three terms are prime, and, (ii) each of the 4-digit numbers are
  permutations of one another.

  There are no arithmetic sequences made up of three 1-, 2-, or 3-digit primes, exhibiting this
  property, but there is one other 4-digit increasing sequence.

  What 12-digit number do you form by concatenating the three terms in this sequence?
*/

import { measureTime } from "../utils"

function solve() {

}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//296962999629
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
