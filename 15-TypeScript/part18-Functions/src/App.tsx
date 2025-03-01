import React from "react";

function Multiplikation(a: number, b: number): number {
  return a * b;
}

function App() {
  return (
    <div className="App">
      <h1>TypeScript</h1>
      <h2>{Multiplikation(10, 20)}</h2>
    </div>
  );
}

export default App;
