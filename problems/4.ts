/*
    Largest Palindrome Product

    A palindromic number reads the same both ways. The largest palindrome made from the product of two
    2-digit numbers is 9009 = 91 × 99.

    Find the largest palindrome made from the product of two 3-digit numbers.
*/
import { measureTime } from "../utils"

function solve(): number {
    let largestPalindrome: number = 0

    const isPalindrome = (n: number): boolean => {
        const nStr = n.toString();
        return nStr === nStr.split('').reverse().join('');
    };

    for (let i = 999; i >= 100; i--) {
        for (let j = i; j >= 100; j--) {
            const tempMultiple = i * j

            if (tempMultiple <= largestPalindrome) {
                break;
            }

            if (isPalindrome(tempMultiple)) {
                largestPalindrome = tempMultiple
                break
            }
        }
    }

    return largestPalindrome
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result) //906609 
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)


export { }
/**
 * const isPalindrome = (n:number) => {
        let nArr = n.toString().split('')
        let i = 0
        let j = nArr.length-1
        while(i<=j){
            if(nArr[i] === nArr[j]){
                i++
                j--
            }else{
                return false
            }
        }
        return true
    }
 */


