// https://exercism.org/tracks/typescript/exercises/perfect-numbers

export function classify(num: number): String {
  if (num <= 0) {
    throw new Error('Classification is only possible for natural numbers.');
  }

  let factorsSum = 0;

  for (let i = 1; i < num; i++) {
    if (num % i === 0) { factorsSum += i };
  }

  if (factorsSum === num) return 'perfect';
  if (factorsSum > num) return 'abundant';
  else return 'deficient';
}
