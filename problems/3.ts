/*
    Largest Prime Factor

    The prime factors of 13195 are 5, 7, 13 and 29.

    What is the largest Prime Factor of the number 600851475143?
*/
import { measureTime } from "../utils"

function solve(target: number) {
    let largestPrimeFactor: number = 0

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

    let sqrtTarget = Math.sqrt(target)
    for (let i = 2; i <= sqrtTarget; i++) {
        if (target % i === 0 && isPrime(i)) {
            largestPrimeFactor = i
        }
    }

    return largestPrimeFactor

}

const [result, elapsedTime] = measureTime(() => solve(600851475143))
console.log('result', result) // 6857
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)


export { }
/*
    Note:
    「Factor」: A factor refers to a number that divides another number exactly without leaving a remainder. For example, 3 and 5 are factors of 15 because 3 * 5 = 15.
    「Prime Factor」: A prime factor is a factor that is a prime number.  

    So: Factor => Prime Factor => Largest Prime Factor
 */