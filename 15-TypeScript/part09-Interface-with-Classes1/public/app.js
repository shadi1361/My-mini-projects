// ******************** 1- Interfaces .bzw Methode Erzeugen**********************
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payments.js";
//2- classes (werden benutzt zu objekte bzw. Arrays zu Inhalte-erstellen)
let DocOne;
let DocTwo;
DocOne = new Invoice("mahdi", "works on the website", 250);
DocTwo = new Payment("bahram", "works on the bigger website", 400);
let Docs = [];
Docs.push(DocOne);
Docs.push(DocTwo);
console.log(Docs);
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
