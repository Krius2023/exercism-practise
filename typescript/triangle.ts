//https://exercism.org/tracks/typescript/exercises/triangle

export class Triangle {
    private sides: Array<number>
    private sidesCount: number
    private validTiangle: boolean
  
    constructor(...sides: Array<any>) {
        this.sides = sides
        this.sidesCount = new Set(this.sides).size
        this.validTiangle = this.validateTriangleSides()
    }

    get isEquilateral() {
        return this.validTiangle && new Set(this.sides).size === 1
    }

    get isIsosceles() {
        return this.validTiangle && (this.sidesCount === 2 || this.sidesCount === 1)
    }

    get isScalene() {
        return this.validTiangle && new Set(this.sides).size === 3
    }

  private validateTriangleSides() {
    let allSidesNotZero = this.sides.every(s => s > 0)
    let validA = this.sides[0] <= (this.sides[1] + this.sides[2])
    let validB = this.sides[1] <= (this.sides[0] + this.sides[2])
    let validC = this.sides[2] <= (this.sides[0] + this.sides[1])

    return allSidesNotZero && validA && validB && validC
  }
}
