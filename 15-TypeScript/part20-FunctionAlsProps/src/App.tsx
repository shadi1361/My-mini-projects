import React from "react";
import User from "./component/User";

function sum(a: number, b: number) {
  return a + b;
}

function App() {
  return (
    <div className="App">
      <h1>TypeScript</h1>
      <h3>**********************************</h3>
      <User name="Max" age={25} hasChild={false} sum={sum} />
    </div>
  );
}

export default App;
