// https://exercism.org/tracks/typescript/exercises/etl

export function transform(groups: { [key: number]: string[] }) {
    let allLetters: { [key: string]: number } = {}
    for (let key of Object.keys(groups)) {
        for (let char of groups[Number(key)]) {
            allLetters[char.toLowerCase()] = Number(key)
        }
    }
    return allLetters
}
