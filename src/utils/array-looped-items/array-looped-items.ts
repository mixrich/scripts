export function arrayLoopedItems(array: any[], index: number, count: number): any[] {

    const leftCount = Math.floor((count - 1) / 2);
    const rightCount = Math.ceil((count - 1) / 2);

    const from = index - leftCount;
    const to = index + rightCount;

    const indexes: number[] = [];

    for (let i = from; i <= to; i++) {
        const ind = i % array.length;
        if (ind < 0) {
            indexes.push(array.length + ind);
        } else if (ind >= array.length) {
            indexes.push(ind - array.length);
        } else {
            indexes.push(ind);
        }
    }

    return indexes.map(ind => array[ind]);
}
