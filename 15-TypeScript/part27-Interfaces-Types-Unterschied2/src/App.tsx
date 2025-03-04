//1. type Merg : durch and bzw. (&) ist möglich
type User1 = {
  name: string;
  age: number;
};

type User2 = User1 & {  //type Merg in types
  children: string[];
};

<hr />;
/*****************************************************************/

//2. interface Merg: type merge durch extends ist möglich
interface User3 {
  name: string;
  age: number;
}

interface User4 extends User3 {  // type Merge in interfaces
  children: string[];
}

let user4: User4 = {
  name: "shadi",
  age: 22,
  children: ["shadi"]
};

function App() {
  return <div className="App">
    TypeScript
  </div>;
}

export default App;
