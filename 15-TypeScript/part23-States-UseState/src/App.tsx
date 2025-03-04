import React from "react";
import { useState } from "react";

type User = {
  name: string;
  surname: string;
  age: number;
};

function App() {
  const [name, setName] = useState<User>({
    name: "Max",
    surname: "Musterman",
    age: 30
  });

  const [state, setState] = useState<User | null>(null);  //das erste Mal muss null sein.
  const [number, setNumber] = useState<number>(100);

  return (
    <div className="App">
      <h1>TypeScript</h1>
      {state?.name}
    </div>
  );
}

export default App;
