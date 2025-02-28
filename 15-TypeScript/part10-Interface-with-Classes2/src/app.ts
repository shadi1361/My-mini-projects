// ******************** 1- Interfaces .bzw Methode Erzeugen**********************

import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/Hasformatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string,string,number];
  values=[tofrom.value,details.value,amount.valueAsNumber];

  let doc: HasFormatter;
  if (type.value === "Rechnung") {
    doc = new Invoice(...values);
  } else{
    doc = new Payment(...values);
  }
});

