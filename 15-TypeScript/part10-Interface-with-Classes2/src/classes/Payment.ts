import {HasFormatter} from '../interfaces/Hasformatter.js'; //Import der Interface

export class Payment implements HasFormatter{
  constructor(
    public recipient: string,
    private details: string,
    readonly amount: number
  ) {}

  format() {
    return `${this.recipient} should pay  ${this.amount} for ${this.details} `;
  }
}


