export function padArray(values: any[], length: number): any[] {
    const res = values.slice(0, length);

    for (let i = res.length; i < length; i++) {
        res.push(null);
    }

    return res;
}