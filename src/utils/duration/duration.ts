export function duration(timeInSeconds: number): string {
    const seconds = timeInSeconds % 60;
    const res: string[] = [];

    if (seconds) {
        res.push(`${seconds}sec`);
    }

    const minutes = Math.floor(timeInSeconds / 60) % 60;
    if (minutes) {
        res.push(`${minutes}min`);
    }

    const hours = Math.floor(timeInSeconds / 60 / 60);

    if (hours) {
        res.push(`${hours}h`);
    }

    return res.reverse().join(' ');
}