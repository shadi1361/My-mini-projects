// classes
import { Invoice } from './classes/Invoice.js';
const invOne = new Invoice("mahdi", "works on the website", 250);
const invTwo = new Invoice("bahram", "works on the bigger website", 400);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
for (let inv of invoices) {
    console.log(inv.client);
    console.log(inv.details);
    console.log(inv.amount);
}
