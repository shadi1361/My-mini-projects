// ***************************** 1- Interfaces-Erzeugen**********************
const me = {
    name: "shadi", //property
    age: 30, //property
    walk(text) {
        console.log(text);
    },
    work(hour) {
        console.log("I work", hour);
        return hour;
    }
};
const greetingPerson = (person) => {
    console.log("Hey", person.name);
};
console.log(me);
greetingPerson(me);
console.log('********************************************************');
//2- classes (werden benutzt zu objekte bzw. Arrays zu Inhalte-erstellen)
import { Invoice } from "./classes/Invoice.js";
const invOne = new Invoice("mahdi", "works on the website", 250);
const invTwo = new Invoice("bahram", "works on the bigger website", 400);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
for (let inv of invoices) {
    console.log(inv.client);
    console.log(inv.amount);
}
