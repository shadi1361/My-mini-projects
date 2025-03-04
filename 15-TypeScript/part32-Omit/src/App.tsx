type User1 = {
  name: string;
  age: number;
};

// type User2= Omit<User1,"age">;
type User2=Omit<User1,"name"|"age">;

function App() {
  return <div className="App"></div>;
}


export default App;
