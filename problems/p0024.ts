/*
  Lexicographic Permutations

  A permutation is an ordered arrangement of objects. For example, 3124 is one possible permutation
  of the digits 1, 2, 3 and 4. If all of the permutations are listed numerically or alphabetically,
  we call it lexicographic order. The lexicographic permutations of 0, 1 and 2 are:

              012   021   102   120   201   210

  What is the millionth lexicographic permutation of the digits 0, 1, 2, 3, 4, 5, 6, 7, 8 and 9?
*/

import { measureTime } from "../utils"

function solve(elements: Array<number>): Array<number> {
  const getAllPermutations = (elements: Array<number>): Array<Array<number>> => {
    if (elements.length <= 1) {
      return [elements];
    }

    let all_permutations: Array<Array<number>> = [];

    for (let index = 0; index < elements.length; index++) {
      let currentElement = elements[index];
      let remainElement = elements.slice(0, index).concat(elements.slice(index + 1));
      let remaining_permutations = getAllPermutations(remainElement);

      for (let j = 0; j < remaining_permutations.length; j++) {
        all_permutations.push([currentElement].concat(remaining_permutations[j]));
      }
    }

    return all_permutations;
  };

  const allPermutations = getAllPermutations(elements);
  const sortedPermutations = allPermutations.sort();

  return sortedPermutations[999999] || [];
}

const digits: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const [result, elapsedTime] = measureTime(() => solve(digits))
console.log('result', result)//2783915460
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
