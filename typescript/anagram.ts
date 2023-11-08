// https://exercism.org/tracks/typescript/exercises/anagram

export class Anagram {
  private input: string
  constructor(input: string) {
    this.input = input;
  }

  public matches(...potentials: String[]): unknown {
    return potentials.filter((i: any) => {

      if(i.toLowerCase() === this.input.toLowerCase()) {
        return false
      }
      
      if (i.toLowerCase().split('').sort().join('') === this.input.toLowerCase().split('').sort().join('')) {
        return i
      }
    })
  }
}

