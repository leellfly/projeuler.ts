/*
    Multiples of 3 and 5

    If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The
    sum of these multiples is 23.

    Find the sum of all the multiples of 3 or 5 below 1000.
*/

function solve(maxNum: number): number {
    const multipleOfThree = 3;
    const multipleOfFive = 5;

    let sum: number = 0

    const isMultiple = (num: number): boolean => num % multipleOfThree === 0 || num % multipleOfFive === 0;


    for (let i = 0; i < maxNum; i++) {
        if (isMultiple(i)) {
            sum += i
        }

    }

    return sum
}

console.log(solve(1000))//233168


export { }

