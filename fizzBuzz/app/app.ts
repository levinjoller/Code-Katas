export function DevideByThreeOrAndFive(digit: number): string {
    if (digit == 0) {
        return '0';
    }
    let result = '';
    if (digit % 3 == 0) {
        result += 'Fizz';
    }
    if (digit % 5 == 0) {
        result += 'Buzz';
    }
    return result ? result : digit.toString();
}