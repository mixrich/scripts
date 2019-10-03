export interface IPagerHelperOptions {
    total: number,
    current: number,
    length: number,
}

export function pagerHelper(options: IPagerHelperOptions): number[] {
    const {total, current} = options;

    const length = total > options.length ? options.length : total;

    const showBefore = 1;

    if (current === 1 || current - showBefore === 1) {
        return getArray(1, length);
    }

    const lastCount = total - current;

    if (lastCount + 1 + showBefore <= length) {
        return getArray(total - length + 1, total)
    }

    return getArray(current - showBefore, current - showBefore + length - 1);
}

function getArray(from: number, to: number): number[] {
    const length = to >= from ? (to - from + 1) : 0;
    return (new Array(length)).fill(0).map((item, index) => index + from);
}
