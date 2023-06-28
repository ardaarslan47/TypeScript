export function sample<T = any>(arr: T[]): T {
    const idx = Math.floor(Math.random() * arr.length)
    return arr[idx]
}