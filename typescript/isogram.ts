// https://exercism.org/tracks/typescript/exercises/isogram

// My first approch
export function isIsogram(s: string): boolean {
  const str = s.toLowerCase().replace(/[-+.^:, ]/g,"");
  let modifiedStr = ([...new Set(str.split(''))].join('')).toString();
  let result = str === modifiedStr;
  return result;
}

// little bit changes in the appraoch
export function isIsogram(s: string): boolean {
  const str = s.toLowerCase().replace(/[^a-z]/g,"");
  return new Set([...str]).size === str.length;
}
