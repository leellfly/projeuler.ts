/*
  Integer Right Triangles

  If p is the perimeter of a right angle triangle with integral length sides, {a,b,c}, there are
  exactly three solutions for p = 120. {20,48,52}, {24,45,51}, {30,40,50}

  For which value of p ≤ 1000, is the number of solutions maximised?
*/

import { measureTime } from "../utils"

function solve(): number {

  const solutionsMap: Map<number, number> = new Map();

  for (let a = 1; a < 1000; a++) {
    for (let b = a; b < 1000; b++) {
      const c = Math.sqrt(a ** 2 + b ** 2);
      if (Number.isInteger(c)) {
        const p = a + b + c;
        if (p <= 1000) {
          solutionsMap.set(p, (solutionsMap.get(p) || 0) + 1);
        }
      }
    }
  }

  let maximisedSolutions = 0;
  let maxPerimeter = 0;

  solutionsMap.forEach((count, perimeter) => {
    if (count > maximisedSolutions) {
      maximisedSolutions = count;
      maxPerimeter = perimeter;
    }
  });

  return maxPerimeter;
}


const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
