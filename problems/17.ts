function solve(): number {
    const unitsDigit: { [key: number]: string } = {
        1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five',
        6: 'six', 7: 'seven', 8: 'eight', 9: 'nine', 10: 'ten',
        11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen',
        15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen',
    };

    const tensDigit: { [key: number]: string } = {
        2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty',
        6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety',
    };

    const hundredsDigit = 'hundred';
    const thousandDigit = 'thousand';
    const and = 'and';

    const getWordLength = (num: number): number => {
        if (num === 1000) {
            return unitsDigit[1].length + thousandDigit.length;
        } else if (num >= 100) {
            const hundreds = Math.floor(num / 100);
            const remainder = num % 100;
            const andLength = remainder !== 0 ? and.length : 0;
            return unitsDigit[hundreds].length + hundredsDigit.length + (andLength ? andLength + getWordLength(remainder) : 0);
        } else if (num >= 20) {
            const tens = Math.floor(num / 10);
            const units = num % 10;
            return tensDigit[tens].length + (units !== 0 ? unitsDigit[units].length : 0);
        } else {
            return unitsDigit[num].length;
        }
    };

    let sum = 0;

    for (let i = 1; i <= 1000; i++) {
        sum += getWordLength(i);
    }

    return sum;
}

console.log(solve());//21124

export { };
