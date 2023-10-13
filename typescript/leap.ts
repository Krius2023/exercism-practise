// https://exercism.org/tracks/typescript/exercises/leap

export function isLeap(year: number): Boolean {
    const isDivisibleBy4 = year % 4 === 0;
    const isDivisibleBy100 = year % 100 === 0;
    if (isDivisibleBy4 && !isDivisibleBy100) { return true };
  
    const isDivisibleBy400 = year % 400 === 0;
    if (isDivisibleBy4 && isDivisibleBy100 && isDivisibleBy400) {
      return true
    };
    return false;
}
