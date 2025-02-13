import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./createArticle.module.css";
import Input from "../../components/input/Input";

function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    readingTime: "",
    author: ""
  });

  const handleChangeArticle = (e) => {
    console.log(e.target.name, e.target.value);

    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  console.log(article);
  return (
    <>
      <Navbar title="Shadi Blog" />
      <div className={styled.createArticlePage}>
        <div className="container">
          <h1>Erstellung neues Artikels:</h1>

          <Input
            label="Titel:"
            name="title"
            handleChange={handleChangeArticle}
            type="text"
          />
          <Input label="Datum" name="date" handleChange={handleChangeArticle} />
          <Input
            label="Lesezeit:"
            name="readingTime"
            handleChange={handleChangeArticle}
            type="text"

          />
          <Input
            label="Autor:"
            name="author"
            handleChange={handleChangeArticle}
            type="text"
          />
        </div>
      </div>
    </>
  );
}

export default CreateArticle;
