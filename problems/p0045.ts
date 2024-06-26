/*
  Triangular, Pentagonal, and Hexagonal

  Triangle, pentagonal, and hexagonal numbers are generated by the following formulae:
    Triangle     Tn=n(n+1)/2     1, 3, 6, 10, 15, ...
    Pentagonal   Pn=n(3n-1)/2    1, 5, 12, 22, 35, ...
    Hexagonal    Hn=n(2n-1)      1, 6, 15, 28, 45, ...

  It can be verified that T285 = P165 = H143 = 40755.
  Find the next triangle number that is also pentagonal and hexagonal.
*/

import { measureTime } from "../utils"

function solve() {
  const getTriangleNumber = (n: number): number => {
    return n * (n + 1) / 2
  }

  const getPentagonalNumber = (n: number): number => {
    return n * (3 * n - 1) / 2
  }

  const getHexagonalNumber = (n: number): number => {
    return n * (2 * n - 1)
  }

  let tIndex = 286 // Starting from the next number after 285
  let pIndex = 166
  let hIndex = 144

  let tNumber = getTriangleNumber(tIndex)
  let pNumber = getPentagonalNumber(pIndex)
  let hNumber = getHexagonalNumber(hIndex)

  while (true) {
    let min = Math.min(tNumber, pNumber, hNumber)
    if (min === tNumber && min === pNumber && min === hNumber) {
      return tNumber
    } else if (min === tNumber) {
      tIndex++
      tNumber = getTriangleNumber(tIndex)
    } else if (min === pNumber) {
      pIndex++
      pNumber = getPentagonalNumber(pIndex)
    } else {
      hIndex++
      hNumber = getHexagonalNumber(hIndex)
    }
  }
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//1533776805
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
