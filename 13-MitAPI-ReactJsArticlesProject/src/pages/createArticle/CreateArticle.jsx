import { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import styled from "./createArticle.module.css";
import Input from "../../components/input/Input";
import TextArea from "../../components/textArea/TextArea";

function CreateArticle() {
  const [article, setArticle] = useState({
    title: "",
    date: "",
    readingTime: "",
    author: "",
    message:"",
  });

  const handleChangeArticle = (e) => {
    setArticle((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const handleChangeArticleMessage=(e) =>{
    setArticle((prevState) => ({
      ...prevState,
      message: e.target.value,
    }));
  }

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

          <TextArea label="Notizen" handleChange={handleChangeArticleMessage} />
        </div>
      </div>
    </>
  );
}

export default CreateArticle;
