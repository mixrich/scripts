/**
 * https://js.checkio.org/en/mission/weak-point/
 * @param map
 */
export function weakPoint(map: number[][]): [number, number] {
    /**
     * Sums of elements for rows and cols
     */
    const rowsWeaks: number[] = [];
    const colsWeaks: number[] = [];

    /**
     * Function to find index of smallest element in array
     */
    function findWeakIndexViaReduce(targetIndex = 0, item: number, index: number, arr: number[]) {
        if (item < arr[targetIndex]) {
            targetIndex = index;
        }

        return targetIndex;
    }

    /**
     * Calculating sums for rows and cols
     */
    map.forEach(row => {
        rowsWeaks.push(row.reduce((acc: number, item: number) => acc + item, 0));
        row.forEach((colValue: number, index: number) => {
            if (!colsWeaks[index]) {
                colsWeaks[index] = 0;
            }

            colsWeaks[index] += colValue;
        });
    });

    const rowWeakIndex = rowsWeaks.reduce(findWeakIndexViaReduce, 0);
    const colWeakIndex = colsWeaks.reduce(findWeakIndexViaReduce, 0);

    return [rowWeakIndex, colWeakIndex];
}

export default weakPoint;
