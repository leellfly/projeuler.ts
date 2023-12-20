/*
    Summation of Primes

    The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

    Find the sum of all the primes below two million.
 */
import { measureTime } from "../utils"

function solve(maxPrime: number): number {
    const sieve = Array(maxPrime).fill(true)
    sieve[0] = false
    sieve[1] = false

    for (let i = 2; i <= Math.sqrt(maxPrime); i++) {
        if (sieve[i]) {
            for (let j = i * i; j < maxPrime; j += i) {
                sieve[j] = false
            }
        }
    }

    let sum: number = 0
    for (let i = 2; i < maxPrime; i += (i === 2) ? 1 : 2) {
        if (sieve[i]) {
            sum += i
        }
    }

    return sum
}

const maxPrime = 2000000

const [result, elapsedTime] = measureTime(() => solve(maxPrime))
console.log('result', result) //142913828922 
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)


export { }
/*

    Utilize the optimized "Sieve of Eratosthenes" in the improved version of the typical isPrime function.

    The fundamental concept of this algorithm involves systematically eliminating non-prime numbers, ultimately retaining only the prime numbers in the end.

    const isPrime = (i: number): boolean => {
        const sqrI = Math.sqrt(i)

        for (let j = 2; j <= sqrI; j++) {
            if (i % j == 0) {
                return false
            }
        }

        return true
    }
*/

