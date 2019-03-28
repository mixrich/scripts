/**
 * This is solution maked by SaintDron
 * https://js.checkio.org/mission/most-wanted-letter/publications/SaintDron/js-node/second/?ordering=most_voted&filtering=all
 *
 * I just wanna compare the performance against my solution
 *
 * If message.lenght about 3000000, the performance time on my MacMini is 731ms;
 * @param message
 */
function findAsSaintDron(message: string) {
    let character = '';
    let frequency = 0;

    for (let letter = 'a'; letter <= 'z'; letter = String.fromCharCode(letter.charCodeAt(0) + 1)) {
        const count = message.toLowerCase().split(letter).length;
        if (count > frequency) {
            frequency = count;
            character = letter;
        }
    }

    return character;
}

/**
 * This is my solution
 *
 * If message.lenght about 3000000, the performance time on my MacMini is 296ms;
 * @param message
 */
function findViaMessageLoop(message: string): string {
    /**
     * Here will be stored the frequency for every letter
     */
    const entries: {[letter: string]: number} = {};

    /**
     * The most frequent letter
     */
    let targetLetter: string;

    for (const letter of message.toLowerCase()) {
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


/**
 * https://js.checkio.org/en/mission/most-wanted-letter/
 * @param message
 */
export function mostWanted(message: string): string {
    return findViaMessageLoop(message);
}

export default mostWanted;
