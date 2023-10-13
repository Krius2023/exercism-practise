// https://exercism.org/tracks/typescript/exercises/pangram

// appraoch 1
export function isPangram1(input: string): Boolean {
    const every_letters = 'abcdefghijklmnopqrstuvwxyz'
    input = input.toLowerCase()
    const result = every_letters.split('').every(char => {
        return input.includes(char)
    })
    return result
}

// appraoch 2
export function isPangram2(input: string): Boolean {
    const only_unique_letters = input.toLowerCase().replace(/[^a-z]/g,'');
    return new Set(only_unique_letters).size === 26;
}
