// https://exercism.org/tracks/typescript/exercises/reverse-string

export function reverse(s: string) {
  return s.split('').reverse().join('')
}
