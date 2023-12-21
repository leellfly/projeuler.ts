/*
    Longest Collatz Sequence

    The following iterative sequence is defined for the set of positive integers:
        n -> n / 2 (n is even)
        n -> 3n + 1 (n is odd)

    Using the rule above and starting with 13, we generate the following sequence:
            13 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

    It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it
    has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

    Which starting number, under one million, produces the longest chain?

    NOTE: Once the chain starts the terms are allowed to go above one million.
*/
import { measureTime } from "../utils"

function solve(): number {
    const memo: Record<number, number> = {};

    function collatzLength(n: number): number {
        if (n === 1) return 1;
        if (memo[n]) return memo[n];

        const next = (n % 2 === 0) ? n / 2 : 3 * n + 1;
        const length = 1 + collatzLength(next);
        memo[n] = length;

        return length;
    }

    let maxCollatzSequenceLength = 0;
    let maxCollatzNaiveNumber = 0;

    for (let i = 999999; i > 1; i--) {
        const currentLength = collatzLength(i);
        if (currentLength > maxCollatzSequenceLength) {
            maxCollatzSequenceLength = currentLength;
            maxCollatzNaiveNumber = i;
        }
    }

    return maxCollatzNaiveNumber;
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result) //837799 
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)


export { }