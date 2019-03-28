/**
 * https://js.checkio.org/mission/long-repeat
 * @param message
 */
export function longRepeat(message: string): number {
    let currentCount = 0;
    let longestCount = currentCount;
    let currentLetter;

    for (const letter of message) {
        if (currentLetter !== letter) {
            currentLetter = letter;
            if (currentCount > longestCount) {
                longestCount = currentCount;
            }
            currentCount = 1;
        } else {
            currentCount++;
        }
    }

    if (currentCount > longestCount) {
        longestCount = currentCount;
    }

    return longestCount;
}

export default longRepeat;
