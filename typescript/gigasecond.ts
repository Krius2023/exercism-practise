// https://exercism.org/tracks/typescript/exercises/gigasecond

export class Gigasecond {
  constructor(private d: Date) {
  }
  public date() {
    return new Date(this.d.getTime() + (10 ** 12))
  }
}
