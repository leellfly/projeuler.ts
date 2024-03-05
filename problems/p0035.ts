/*
  Circular Primes

  The number, 197, is called a circular prime because all rotations of the digits: 197, 971, and 719,
  are themselves prime.

  There are thirteen such primes below 100: 
  2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.

  How many circular primes are there below one million?
*/

import { measureTime } from "../utils"

function solve() {
  const isPrime = (n: number) => {
    if (n <= 1) {
      return false
    }

    if (n == 2) {
      return true
    }

    const middleN = n / 2
    for (let j = 2; j < middleN; j++) {
      if (n % j === 0) {
        return false
      }
    }

    return true
  }

  const generateRotations = (number: number): number[] => {
    const numberStr = number.toString()
    const rotations: number[] = []

    for (let i = 0; i < numberStr.length; i++) {
      const rotatedNumberStr = numberStr.slice(i) + numberStr.slice(0, i)
      const rotatedNumber = parseInt(rotatedNumberStr, 10)
      rotations.push(rotatedNumber)
    }

    return rotations
  }

  let count = 0
  const memo: Map<number, boolean> = new Map()

  for (let i = 1; i < 1000000; i++) {
    const rotations = generateRotations(i)
    const isSatisfied = rotations.every(item => {
      if (!memo.has(item)) {
        memo.set(item, isPrime(item))
      }
      return memo.get(item)!
    })
    if (isSatisfied) {
      count++
    }
  }

  return count
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//56
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
