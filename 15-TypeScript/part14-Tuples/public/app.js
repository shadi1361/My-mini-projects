// ******************** 1- Interfaces .bzw Methode Erzeugen**********************
import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === "Rechnung") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
});
//Tuples ************************************
let arr = ['shadi', 32, true];
arr[0] = 23;
arr = [false, 'omid', 24];
let tup = ['shadi', 32, true];
console.log(tup);
