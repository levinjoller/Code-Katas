export function Add(numbers: string): number {
    let delimiter = null;
    let isSpecialDelimiter = numbers.startsWith('//');
    let isStandardDelimiter = numbers.search(/[\n|,]/) > 0;

    if (isSpecialDelimiter) {
        delimiter = numbers.charAt(2);
        numbers = numbers.slice(4);
    }
    else if (isStandardDelimiter) {
        delimiter = /[\n|,]/;
    }
    let numbersArray = numbers.split(delimiter);
    let negativNumbers = numbersArray.filter(x => +x < 0);
    if (negativNumbers.length > 0) {
        throw new Error(`No negativ numbers allowed: ${negativNumbers.toString()}`);
    }
    let sum = 0;
    numbersArray.forEach(x => {
        sum += +x;
    });
    return sum;
}