// ******************** 1- Interfaces .bzw Methode Erzeugen**********************

import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payments.js";
import { HasFormatter } from "./interfaces/Hasformatter.js";

//2- classes (werden benutzt zu objekte bzw. Arrays zu Inhalte-erstellen)

let DocOne: HasFormatter;
let DocTwo: HasFormatter;

DocOne = new Invoice("mahdi", "works on the website", 250);
DocTwo = new Payment("bahram", "works on the bigger website", 400);

let Docs: HasFormatter[] = [];
Docs.push(DocOne);
Docs.push(DocTwo);

console.log(Docs);



const form=document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type= document.querySelector("#type") as HTMLSelectElement;
const tofrom= document.querySelector("#tofrom") as HTMLInputElement;
const details= document.querySelector("#details") as HTMLInputElement;
const amount= document.querySelector("#amount") as HTMLInputElement;
