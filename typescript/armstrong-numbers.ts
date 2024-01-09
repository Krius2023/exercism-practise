// https://exercism.org/tracks/typescript/exercises/armstrong-numbers

export function isArmstrongNumber(n: number | bigint): boolean {
  const checkNum = String(n);
  const len = BigInt(checkNum.length)
  let total = BigInt(0)
  for(let num of checkNum) {
    total += BigInt(num) ** len
  }
  return BigInt(total) === BigInt(n)
}
