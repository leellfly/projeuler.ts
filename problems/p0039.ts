/*
  Integer Right Triangles

  If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are
  exactly three solutions for p = 120. {20,48,52}, {24,45,51}, {30,40,50}

  For which value of p ≤ 1000, is the number of solutions maximised?
*/

import { measureTime } from "../utils"

function solve(): number {

  interface MyObject {
    [key: number]: number;
  }

  const findKeyByValue = (obj: MyObject, value: number): number => {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && obj[key] === value) {
        return +key
      }
    }
    return 0
  }

  let maximisedSolutions = 0
  const solutionsMap: MyObject = {}

  for (let a = 1; a < 1000; a++) {
    for (let b = a; b < 1000; b++) {
      const c = Math.sqrt(a ** 2 + b ** 2)
      if (c % 1 === 0) {
        const p = a + b + c
        if (p <= 1000) {
          solutionsMap[p] = (solutionsMap[p] || 0) + 1
          maximisedSolutions = Math.max(maximisedSolutions, solutionsMap[p])
        }
      }
    }
  }

  return findKeyByValue(solutionsMap, maximisedSolutions)
}


const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
