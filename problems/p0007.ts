/*
    10001st Prime

    By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

    What is the 10001st prime number?
*/
import { measureTime } from "../utils"

function solve(targetPosition: number): number {
    if (targetPosition < 1) {
        throw new Error("Target position should be a positive integer");
    }

    const isPrime = (n: number) => {
        if (n <= 1) {
            return false
        }
        if (n == 2) {
            return true
        }

        const sqrtN = Math.sqrt(n)
        for (let j = 2; j <= sqrtN; j++) {
            if (n % j === 0) {
                return false
            }
        }

        return true
    }

    let count: number = 0
    let i = 1

    while (count < targetPosition) {
        if (isPrime(i)) {
            count++
        }
        if (count < targetPosition) {
            i++
        }
    }

    return i
}

const [result, elapsedTime] = measureTime(() => solve(10001))
console.log('result', result) //104743 
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)


export { }