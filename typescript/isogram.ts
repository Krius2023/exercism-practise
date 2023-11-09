// https://exercism.org/tracks/typescript/exercises/isogram

export function isIsogram(s: string): boolean {
  const str = s.toLowerCase().replace(/[-+.^:, ]/g,"");
  let modifiedStr = ([...new Set(str.split(''))].join('')).toString();
  let result = str === modifiedStr;
  return result;
}
