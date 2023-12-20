/*
    Smallest Multiple

    2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any
    remainder.

    What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/
import { measureTime } from "../utils"

function solve(maxNum: number): number {
    const gcd = (a: number, b: number): number => b === 0 ? a : gcd(b, a % b)

    const lcm = (a: number, b: number): number => (a * b) / gcd(a, b)

    const arr = Array.from({ length: maxNum }, (_, index) => index + 1)

    const smallestMultiple = arr.reduce((lcmValue, currentValue) => {
        return lcm(lcmValue, currentValue)
    }, 1)

    return smallestMultiple
}

const [result, elapsedTime] = measureTime(() => solve(20))
console.log('result', result) //232792560 
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)


export { }
/**
 * Note:
 *  「GCD」:greatest common divisor
 *  「LCM」：least common multiple
 *   GCD*LCM = a*b => LCM = a*b / GCD    
 */
