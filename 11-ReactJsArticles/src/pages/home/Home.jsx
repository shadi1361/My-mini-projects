import { useEffect, useState } from 'react';
import Article from '../../components/article/Article';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import styled from './home.module.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Home() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:8000/articles')
            .then((result) => {
                setArticles(result.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div className={styled.homeWrapper}>
            <Navbar title="Shadi Blog" />
            <div className="container">
                <h2>Neue Artikel:</h2>
                <div className={styled.articles}>
                    {articles.map((result) => (
                        <Link to={`/article/${result.id}`} key={result.id}>
                            <Article article={result} />
                        </Link>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
