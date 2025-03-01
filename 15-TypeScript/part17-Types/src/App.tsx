import React from "react";

type User3 = { name: string; age: number };
type Array100=(number|string|boolean)[]; //Union
export type Array110=(number|boolean|string); //ich kann es in index.tsx importieren

function App() {
  //1- arrays declaration:

  // 1-1:
  //let array1: string[] = []; //Muster
  let array1: string[] = ["shadi", "omid"]; //Beispiel
  console.log(array1);

  // 1-2:
  // let array2:(number|string|boolean)=[]; //Muster-Unions
  let array2: (number | string | boolean)[] = [3, 4, "shadi"];
  console.log(array2);


  //1-3: Außerhalb App() => type Array1=(number|string|boolean)[]; //Union
  let array3:Array100=[3,"shadi121",true];
  console.log(array3);



  //************************************************************************** */


  //2- Objects declaration:

  // 2-1: Old Muster
  let user = {
    //Muster- old
    name: "shadi",
    age: 34,
    eye_color: "brown",
    children_names: ["omid", "shadi"]
  };
  console.log(user);

  // 2-2:
  //let user1:{}={};
  let user1: { name: string; age: Number; eye_color: string } = {
    name: "Omid",
    age: 30,
    eye_color: "beige"
  };
  console.log(user1);

  // 2-3:   Außerhalb App() => type User3 = { name: string; age: number };
  let user3: User3 = { name: "omid", age: 2 };
  console.log(user3);

 //************************************************************************** */




  return (
    <div className="App">
      <h1>TypeScript</h1>
    </div>
  );
}

export default App;
