import {HasFormatter} from '../interfaces/Hasformatter.js'; //Import der Interface

export class Invoice implements HasFormatter{
  constructor(
    public client: string,
    private details: string,
    readonly amount: number
  ) {}

  format() {
    return `${this.client} owes ${this.amount} for ${this.details} `;
  }
}


