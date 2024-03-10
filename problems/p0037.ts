/*
  Truncatable Primes

  The number 3797 has an interesting property. Being prime itself, it is possible to continuously
  remove digits from left to right, and remain prime at each stage: 3797, 797, 97, and 7. Similarly
  we can work from right to left: 3797, 379, 37, and 3.

  Find the sum of the only eleven primes that are both truncatable from left to right and right to
  left.

  NOTE: 2, 3, 5, and 7 are not considered to be truncatable primes.
*/

import { measureTime } from "../utils"

function solve() {
  const right2Left = () => {

  }

  const left2right = () => {

  }

  const isPrime = () => {

  }

  let sum = 0
  let count = 0

  for (let i = 11; i < 1000000; i++) {
    const remainDigitR2L = right2Left()
    const remainDigitL2R = left2right()

    const remain = [...remainDigitL2R, ...remainDigitR2L]

    const isTruncatablePrimes = remain.every(item => {
      return isPrime(item)
    })

    if(isTruncatablePrimes){
      sum++
      count++
    }

    if(count === 11) break
  }

}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
