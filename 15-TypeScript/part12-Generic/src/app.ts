// ******************** 1- Interfaces .bzw Methode Erzeugen**********************
import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/Hasformatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//1. inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "Rechnung") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }
  list.render(doc, type.value, "end");
});



//**********************************************************************************/
//2. Generic mit objekte
const addUID = <T extends object>(obj: T) => {
  //Nur objekte
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};
let docOne = addUID({ name: "Omid", age: 22 });
console.log(docOne);



//**********************************************************************************/
//3.  Generic mit interface
interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
}
const docTwo: Resource<string[]> = {
  uid: 1,
  resourceName: "shadi",
  data: ["shadi"]
};
console.log(docTwo);
