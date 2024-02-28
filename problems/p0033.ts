/*
  Digit Cancelling Fractions

  The fraction 49/98 is a curious fraction, as an inexperienced mathematician in attempting to
  simplify it may incorrectly believe that 49/98 = 4/8, which is correct, is obtained by cancelling
  the 9s.

  We shall consider fractions like, 30/50 = 3/5, to be trivial examples.

  There are exactly four non-trivial examples of this type of fraction, less than one in value, and
  containing two digits in the numerator and denominator.

  If the product of these four fractions is given in its lowest common terms, find the value of the
  denominator.
*/

import { measureTime } from "../utils"

function solve() {
  const getDigitsOfNumber = (number: number): number[] => {
    const numberStr = number.toString()
    return numberStr.split('').map(Number)
  }

  const simplifyFraction = (numerator: number, denominator: number): [number, number] => {
    if (denominator === 0) {
      throw new Error("Denominator cannot be zero.");
    }

    const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

    const commonFactor = gcd(Math.abs(numerator), Math.abs(denominator));

    const simplifiedNumerator = numerator / commonFactor;
    const simplifiedDenominator = denominator / commonFactor;

    return [simplifiedNumerator, simplifiedDenominator];
  }


  const resultNumerator: Array<number> = []
  const resultDenominator: Array<number> = []

  for (let numerator = 10; numerator <= 99; numerator++) {
    for (let denominator = numerator + 1; denominator <= 99; denominator++) {
      const numeratorDigits = getDigitsOfNumber(numerator)
      const denominatorDigits = getDigitsOfNumber(denominator)
      const a = numeratorDigits[0]
      const b = numeratorDigits[1]
      const c = denominatorDigits[0]
      const d = denominatorDigits[1]
      if (a === c && a !== 0) {
        if (b / d === numerator / denominator) {
          resultNumerator.push(b)
          resultDenominator.push(d)
        }
      } else if (a === d && a !== 0) {
        if (b / c === numerator / denominator) {
          resultNumerator.push(b)
          resultDenominator.push(c)
        }
      } else if (b === c && b !== 0) {
        if (a / d === numerator / denominator) {
          resultNumerator.push(a)
          resultDenominator.push(d)
        }
      } else if (b === d && b != 0) {
        if (a / c === numerator / denominator) {
          resultNumerator.push(a)
          resultDenominator.push(c)
        }
      }
    }
  }

  const [simplifiedNumerator, simplifiedDenominator] = simplifyFraction(resultNumerator[0] * resultNumerator[1] * resultNumerator[2] * resultNumerator[3], resultDenominator[0] * resultDenominator[1] * resultDenominator[2] * resultDenominator[3]);
  return simplifiedDenominator
}

const [result, elapsedTime] = measureTime(() => solve())
console.log('result', result)//100
console.log(`Elapsed Time: ${elapsedTime} milliseconds`)
