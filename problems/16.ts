/*
    Power Digit Sum

    2 ^ 15 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

    What is the sum of the digits of the number 2 ^ 1000?
*/

function solve(): number {
    const result: bigint = BigInt(Math.pow(2, 1000))
    const resultStr: string = result.toString()

    return resultStr.split('').reduce((sum, digit) => sum + parseInt(digit, 10), 0)
}

console.log(solve())//1366


export { }
