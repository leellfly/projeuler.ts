/*
    Power Digit Sum

    2 ^ 15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

    What is the sum of the digits of the number 2 ^ 1000?
*/
import { measureTime } from "../utils"

function solve(): number {
    const result: bigint = BigInt(Math.pow(2, 1000))
    const resultStr: string = result.toString()

    return resultStr.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0)
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result) //1366 
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)


export { }
