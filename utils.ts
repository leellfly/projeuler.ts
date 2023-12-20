import { performance } from 'perf_hooks';

export function measureTime<T>(func: () => T): [T, number] {
    const startTime = performance.now();
    const result = func();
    const endTime = performance.now();
    const elapsedTime = parseFloat((endTime - startTime).toFixed(3));
    return [result, elapsedTime];
}
