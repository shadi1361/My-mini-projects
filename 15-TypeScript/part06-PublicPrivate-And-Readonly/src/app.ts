// Public-Private-Readonly

//Example1:

/* class Invoice {
  public client: string;
  private details: string;
  readonly amount: number;

  constructor(c: string, d: string, a: number) {
    this.client = c;
    this.details = d;
    this.amount = a;
  }

  format() {
    return `${this.client} owes ${this.amount} for ${this.details}`;
  }
}

const invOne = new Invoice("mahdi", "works on the website", 250);
const invTwo = new Invoice("bahram", "works on the bigger website", 400);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

for (let inv of invoices) {
  console.log(inv.client,inv.details, inv.amount);
}
 */

//****************************************************************** */

//Example2 :

//Um den Code übersichtlicher zu gestalten, werden einige der oben genannten Codezeilen entfernt oder geändert

class Invoice {
  /*  public client: string;
  private details: string;
  readonly amount: number;
 */
  constructor(
    public client: string,
    private details: string,
    readonly amount: number
  ) {}

  format() {
    return `${this.client} owes ${this.details} for ${this.amount}`;
  }
}

const invOne = new Invoice("mahdi", "works on the website", 250);
const invTwo = new Invoice("bahram", "works on the bigger website", 400);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

for (let inv of invoices) {
  console.log(inv.client);
  console.log(inv.details);
  console.log(inv.amount);

}
