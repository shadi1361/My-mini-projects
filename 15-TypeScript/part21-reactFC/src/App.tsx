import React from "react";
import User from "./component/User";
import User2 from "./component/User2";
import User3 from "./component/User3";

function sum(a: number, b: number) {
  return a + b;
}
function multiplication(a: number, b: number) {
  return a * b;
}

function App() {
  return (
    <div className="App">
      <h1>TypeScript</h1>
      <hr />
      <User name="Max" age={25} hasChild={false} sum={sum} />
      <hr />
      <User2 name="Lina" age={23} hasChild={true} sum={sum} />
      <hr />
      <User3 name="shadi" age={34} hasChild={false} multiplication={multiplication} />
    </div>
  );
}

export default App;
