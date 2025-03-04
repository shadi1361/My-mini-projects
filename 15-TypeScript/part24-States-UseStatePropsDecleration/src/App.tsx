import { useState } from "react";
import User from "./components/User";


function App() {
  const [state, setState] = useState<string>("Max");

  return (
    <div className="App">
        <User value={state} onChange={setState} />
    </div>
  );
}

export default App;
