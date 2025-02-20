import { Route, Routes } from "react-router-dom";
import Articles from "./pages/articles/Article";
import Home from "./pages/home/Home";
import { createContext, useState } from "react";

export const AppContext = createContext(null);

function App() {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <AppContext.Provider value={{ isLogin, setIsLogin }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </AppContext.Provider>
  );
}

export default App;
