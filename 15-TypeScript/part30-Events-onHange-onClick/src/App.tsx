import Button from "./components/Button";

function App() {
  const handleClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.target.addEventListener
  };

  const handleChange=(e: React.ChangeEvent<HTMLInputElement>)=>{
    e.target.value
    e.target.name

  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click me</button>
      <input type="text" onChange={(handleChange)=>{

      }} />
    </div>
  );
}

export default App;
