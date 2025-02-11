import AboutUs from './pages/aboutUs/AboutUs';
import Home from './pages/home/Home';
import { Route, Routes } from 'react-router-dom';
import Article from './pages/articlePage/Article';


function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/article/:id" element={<Article />} />
            </Routes>
        </>
    );
}
export default App;
