// https://exercism.org/tracks/typescript/exercises/bank-account

export class ValueError extends Error {
  constructor() {
    super('Bank account error')
  }
}

export class BankAccount {
private account: any = {}
  constructor() {
  }

  open(): void {
    if (Object.keys(this.account).includes("balance")) { throw new ValueError() }
    else this.account["balance"] = 0
  }

  close(): void {
    if (!Object.keys(this.account).includes("balance")) { throw new ValueError() }
    this.account = {}
  }

  deposit(amt: number): void {
    if (!Object.keys(this.account).includes("balance")) { throw new ValueError() }
    if (amt < 0) { throw new ValueError() }
    this.account["balance"] += amt
  }

  withdraw(amt: number): void {
    if (!Object.keys(this.account).includes("balance")) { throw new ValueError() }
    if (amt < 0) { throw new ValueError() }
    if (amt > this.account["balance"]) { throw new ValueError() }
    this.account["balance"] -= amt
  }

  get balance(): unknown {
    if (Object.keys(this.account).includes("balance")) { return this.account.balance }
    throw new ValueError()
  }
}
