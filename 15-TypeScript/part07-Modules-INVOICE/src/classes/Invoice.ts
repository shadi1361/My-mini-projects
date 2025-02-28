export class Invoice {
    constructor(
      public client: string,
      private details: string,
      readonly amount: number
    ) {}

    format() {
      return `${this.client} owes ${this.details} for ${this.amount}`;
    }
  }
