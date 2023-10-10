// https://exercism.org/tracks/typescript/exercises/darts

export function score(x: number, y: number): number {
  let dart_position = ((x*x) + (y*y)) ** 0.5
  switch (true) {
    case dart_position <= 1:
      return 10;
    case dart_position <= 5:
      return 5;
    case dart_position <= 10:
      return 1;
    default:
      return 0;
  }
}
