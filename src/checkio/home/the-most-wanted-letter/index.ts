/**
 * https://js.checkio.org/en/mission/most-wanted-letter/
 * @param message
 */
export function mostWanted(message: string): string {
    /**
     * Here will be stored the frequency for every letter
     */
    const entries: {[letter: string]: number} = {};

    /**
     * The most frequent letter
     */
    let targetLetter: string;

    for (const rawChar of message) {
        const letter: string = rawChar.toLowerCase();

        /**
         * Exluding every letter outside of "a-z" range
         */
        if (letter < 'a' || letter > 'z') {
            continue;
        }

        /**
         * Incrementing frequency for letter
         */
        entries[letter] = (entries[letter] || 0) + 1;

        /**
         * If we haven't stored most frequent letter yet, so do it now
         */
        if (!targetLetter) {
            targetLetter = letter;
        }

        /**
         * If we getting more frequent letter or letter with smaller code at the same frequent - storing it as targetLetter
         */
        if ((entries[letter] > entries[targetLetter]) || (entries[letter] === entries[targetLetter] && letter < targetLetter)) {
            targetLetter = letter;
        }
    }

    return targetLetter;
}

export default mostWanted;
