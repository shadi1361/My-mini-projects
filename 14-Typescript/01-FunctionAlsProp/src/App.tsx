import React from "react";
import User from "./component/User";

function App() {
  return (
    <div className="App">
      <h1>Typescript</h1>
      <User name="omid" age={24} hasChild={false} />
    </div>
  );
}

export default App;
