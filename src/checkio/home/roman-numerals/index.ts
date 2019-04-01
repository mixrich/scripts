/**
 * https://js.checkio.org/en/mission/roman-numerals/
 * @param num
 */
export function romanNumerals(num: number) {
    const map = {
        1: 'I',
        4: 'IV',
        5: 'V',
        9: 'IX',
        10: 'X',
        40: 'XL',
        50: 'L',
        90: 'XC',
        100: 'C',
        400: 'CD',
        500: 'D',
        900: 'CM',
        1000: 'M',
    };

    const thresholds = Object.keys(map).map(v => +v).sort((a, b) => a > b ? -1 : 1);;

    return thresholds.reduce((roman, threshold, index, arr) => {
        while (num >= threshold) {
            num -= threshold;
            roman += map[threshold];
        }

        return roman;
    }, '');
}

export default romanNumerals;
