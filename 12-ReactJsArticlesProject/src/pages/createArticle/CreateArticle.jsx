import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./createArticle.module.css";

function CreateArticle() {
  const [counter, setCounter] = useState(0)

  const increaseCounter = () => {
    setCounter(counter + 1)
  }

  const decreaseCounter = () => {
    setCounter(counter - 1)
  }

  return (
    <>
      <Navbar title="Shadi Blog" />
      <div className={styled.createArticlePage}>
        <div className="container">
          <h1>Erstellung eines Artikels</h1>
          <button onClick={increaseCounter}>Erhöhen der Zahl</button>

          <span>{counter}</span>

          <button onClick={decreaseCounter}>Verringerung der Zahl</button>
        </div>
      </div>
    </>
  );
}

export default CreateArticle;
