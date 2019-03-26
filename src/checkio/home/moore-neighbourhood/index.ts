
/**
 * https://js.checkio.org/mission/count-neighbours
 * @param matrix
 * @param x
 * @param y
 */
export function mooreNeighbourhood(matrix: number[][], y: number, x: number) {
    const neight = [
        [-1, -1], [0, -1], [1, -1],
        [-1, 0], [1, 0],
        [-1, 1], [0, 1], [1, 1]
    ];

    let sum = 0;

    neight.forEach((diff) => {
        const iCol = x + diff[0];
        const iRow = y + diff[1];

        const value = matrix[iRow] && matrix[iRow][iCol];

        if (value) {
            sum++;
        }
    })

    return sum;
}

export default mooreNeighbourhood;
