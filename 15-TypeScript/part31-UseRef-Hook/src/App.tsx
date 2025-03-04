import { useRef } from "react";

function App() {
  const ref = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="App">
      <button ref={ref}>Click</button>

      <input ref={inputRef} type="text" />
    </div>
  );
}

export default App;
