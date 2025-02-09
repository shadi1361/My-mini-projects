import Navbar from '../../components/navbar/Navbar';
import styled from './articlePage.module.css';
import Footer from '../../components/footer/Footer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

function ArticlePage() {
    const [article, setArticle] = useState({});
    const params = useParams();
    useEffect(() => {
        axios
            .get(`http://localhost:8000/articles/${params.id}`)
            .then((result) => {
                setArticle(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Navbar title="Shadi Blog" />
            <div className={styled.articleWrapper}>
                <div className="container">
                    <h1>{article.title}</h1>
                    <div className={styled.articleInfo}>
                        <span>Datum:{article.date} </span>
                        <span>Autor:{article.autor} </span>
                        <span>Lesezeit:{article.readingTime} Minuten</span>
                    </div>

                    <img src={article.imageUrl} alt="" />
                    <p>{article.content}</p>
                </div>
               
            </div>
            <Footer />
        </div>
         
    );
}

export default ArticlePage;
