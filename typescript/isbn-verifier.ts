// https://exercism.org/tracks/typescript/exercises/isbn-verifier

export function isValid(isbn: string): boolean {
  let validCh = isbn.replaceAll("-", "");
  let validLength = 10;
  if (validCh.length !== validLength) {
    return false;
  }

  let sum = 0;
  let factor = 10;

  for (let ch of validCh) {
    if (ch == "X" && factor === 1) {
      sum += 10 * factor;
    } else if (parseInt(ch) >= 0) {
      sum += parseInt(ch) * factor;
    } else return false;

    factor--;
    continue;
  }

  return sum % 11 === 0;
}
