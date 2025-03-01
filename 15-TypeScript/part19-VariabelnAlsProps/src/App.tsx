import React from "react";
import User from "./component/User";

function App() {
  return (
    <div className="App">
      <h1>TypeScript</h1>
      <User name="Max" age={25} hasChild={false} />
    </div>
  );
}

export default App;
