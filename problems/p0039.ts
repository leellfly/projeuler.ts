/*
  Integer Right Triangles

  If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are
  exactly three solutions for p = 120. {20,48,52}, {24,45,51}, {30,40,50}

  For which value of p ≤ 1000, is the number of solutions maximised?
*/

import { measureTime } from "../utils"

function solve(): number {
  const solutionsMap: { [key: number]: number } = {}

  const maxLimit = 1000

  let maximisedSolutions = 0
  let maxPerimeter = 0

  for (let a = 1; a < maxLimit / 3; a++) { //a + b + c <= 1000
    for (let b = a; b < (maxLimit - a) / 2; b++) { //a + b + c <= 1000 & b <= c
      const c = Math.sqrt(a ** 2 + b ** 2)
      const p = a + b + c
      if (p <= maxLimit && Number.isInteger(c)) {
        solutionsMap[p] = (solutionsMap[p] || 0) + 1
        if (solutionsMap[p] > maximisedSolutions) {
          maximisedSolutions = solutionsMap[p]
          maxPerimeter = p
        }
      }
    }
  }

  return maxPerimeter
}




const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
