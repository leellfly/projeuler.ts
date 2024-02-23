/*
  Reciprocal Cycles

  A unit fraction contains 1 in the numerator. The decimal representation of the unit fractions with
  denominators 2 to 10 are given:
              
    1/2  = 0.5
    1/3  = 0.(3)
    1/4  = 0.25
    1/5  = 0.2
    1/6  = 0.1(6)
    1/7  = 0.(142857)
    1/8  = 0.125
    1/9  = 0.(1)
    1/10 = 0.1

  Where 0.1(6) means 0.166666..., and has a 1-digit recurring cycle. It can be seen that 1/7 has a
  6-digit recurring cycle.

  Find the value of d < 1000 for which 1/d contains the longest recurring cycle in its decimal
  fraction part.
*/

import { measureTime } from "../utils"

function solve(limit:number):number {
  let maxLength = 0
  let resultD = 0

  for (let d = 2; d < limit; d++) {
    let remainder = 1
    let remainders = new Array(d).fill(0)

    for (let position = 0; position < d; position++) {
      remainder = (remainder * 10) % d

      if (remainders[remainder] !== 0) {
        const cycleLength = position - remainders[remainder] + 1

        if (cycleLength > maxLength) {
          maxLength = cycleLength
          resultD = d
        }

        break
      }

      remainders[remainder] = position + 1
    }
  }

  return resultD;
}

const [result, elapsedTime] = measureTime(() => solve(1000))
console.log('result', result)//983
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
