/*
  Sub-string Divisibility

  The number, 1406357289, is a 0 to 9 pandigital number because it is made up of each of the digits
  0 to 9 in some order, but it also has a rather interesting sub-string divisibility property.

  Let d1 be the 1st digit, d2 be the 2nd digit, and so on. In this way, we note the following:
    d2 * d3 * d4 = 406 is divisible by 2
    d3 * d4 * d5 = 063 is divisible by 3
    d4 * d5 * d6 = 635 is divisible by 5
    d5 * d6 * d7 = 357 is divisible by 7
    d6 * d7 * d8 = 572 is divisible by 11
    d7 * d8 * d9 = 728 is divisible by 13
    d8 * d9 * d10 = 289 is divisible by 17

  Find the sum of all 0 to 9 pandigital numbers with this property.
*/

import { measureTime } from "../utils"

function solve() {
  const isDivisibleSubstring = (num: string): boolean => {
    const divisors = [2, 3, 5, 7, 11, 13, 17]
    for (let i = 1; i <= 7; i++) {
      const subNum = parseInt(num.substr(i, 3))
      if (subNum % divisors[i - 1] !== 0) {
        return false
      }
    }
    return true
  }

  const permute = (nums: number[], start: number, end: number, results: string[]) => {
    if (start === end) {
      const numStr = nums.join('')
      if (isDivisibleSubstring(numStr)) {
        results.push(numStr)
      }
    } else {
      for (let i = start; i <= end; i++) {
        [nums[start], nums[i]] = [nums[i], nums[start]] // Swap
        permute(nums, start + 1, end, results);
        [nums[start], nums[i]] = [nums[i], nums[start]] // Revert the swap
      }
    }
  }

  const generatePermutations = () => {
    const nums: number[] = Array.from(Array(10), (_, i) => i)
    const permutations: string[] = []
    permute(nums, 0, nums.length - 1, permutations)
    return permutations;
  }

  const pandigitalNumbers = generatePermutations().map(Number)
  return pandigitalNumbers.reduce((sum, num) => sum + num, 0)
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//16695334890
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
