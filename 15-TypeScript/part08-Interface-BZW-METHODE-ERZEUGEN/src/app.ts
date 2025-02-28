// ******************** 1- Interfaces .bzw Methode Erzeugen**********************

// Interface wird nur zum type und Signature(object shape) zu erzeugen und nur in Typescript wird benutzt und nicht in JavaScript.

interface isPerson {
  name: string; //property
  age: number; //property
  walk(a: string): void; //method
  work(a: number): number; //method
}

const me: isPerson = {
  name: "shadi", //property
  age: 30, //property
  walk(text: string): void { //method
    console.log(text);
  },
  work(hour: number): number { //method
    console.log("I work", hour);
    return hour;
  }
};
const greetingPerson=(person:isPerson)=>{
    console.log("Hey",person.name);
}

console.log(me);
greetingPerson(me);

console.log('********************************************************');


// ******************** 2-Klassen Erzeugen**********************
//2- classes (werden benutzt zu objekte bzw. Arrays zu Inhalte-erstellen)
import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("mahdi", "works on the website", 250);
const invTwo = new Invoice("bahram", "works on the bigger website", 400);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

for (let inv of invoices) {
  console.log(inv.client);
  console.log(inv.amount);
}
