import styled from './navbar.module.css';
import { Link } from 'react-router-dom';

// فرمت جی اس ایکس
//کامپوننت پایین ریترن میشه داخل کامپوننت بالا که اصلی ترینه
function Navbar(props) {
    //Das ist eine Komponente und gibt eine JSX-Datei zurück.
    //جی اس ایکس یک گسترش سینتکسی برای جاوااسکریپت است که
    // جی اس ایکس به شما این امکان را می‌دهد تا رشته‌های اچ تی ام ال را مستقیماً در جاوااسکریپت بنویسید
    //قسمت جی اسی چون بالای ریترنه
    return (
        <div className={styled.headerWrapper}>
            <div className="container">
                <div className={styled.header}>
                    <h3> {props.title} </h3>
                    <ul>
                        <li>
                            <Link to="/">Neue Artikel</Link>
                        </li>
                        <li>
                            <Link to="/">Liste der Artikel</Link>
                        </li>
                        <li>
                            <Link to="/about"> Über uns</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Navbar;
