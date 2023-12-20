/*
    Sum Square Difference

    The sum of the squares of the first ten natural numbers is,
        1^2 + 2^2 + ... + 10^2 = 385

    The square of the sum of the first ten natural numbers is,
        (1 + 2 + ... + 10)^2 = 55^2 = 3025

    Hence the difference between the sum of the squares of the first ten natural numbers and the square
    of the sum is 3025 - 385 = 2640.

    Find the difference between the sum of the squares of the first one hundred natural numbers and the
    square of the sum.
 */
import { measureTime } from "../utils"

function solve() {

    const arr = Array.from({ length: 100 }, (_, index) => index + 1)

    const sumSquare = arr.reduce((sum, cur) => sum + cur, 0) ** 2

    const squareSum = arr.reduce((sum, cur) => sum + cur ** 2, 0)

    return sumSquare - squareSum
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result) //25164150 
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)


export { }
// use the ** operator for exponentiation