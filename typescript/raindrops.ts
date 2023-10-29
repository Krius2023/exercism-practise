// https://exercism.org/tracks/typescript/exercises/raindrops

export function convert(input: number) {
  let result = ''
  result = input % 3 === 0 ? `${result}Pling` : result;
  result = input % 5 === 0 ? `${result}Plang` : result;
  result = input % 7 === 0 ? `${result}Plong` : result;
  return result ? result : input.toString();
}
