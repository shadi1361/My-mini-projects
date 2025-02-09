import Navbar from '../../components/navbar/Navbar';
import styled from './about.module.css';
import Firma from './../../assets/images/firma.jpg';
import Footer from '../../components/footer/Footer';

function AboutUs() {
    return (
     <div>
         <Navbar title="Shadi Blog" />

           
            <div className="container">
                <h3>Was ist Coding? Ein Leitfaden für Anfänger zur Welt des Programmierens</h3>
                <p>
                    In der heutigen digitalen Ära ist das Programmieren zu einer essentiellen
                    Fähigkeit geworden, die die von uns täglich genutzte Technologie antreibt. Von
                    Websites und mobilen Apps bis hin zu Software und künstlicher Intelligenz bildet
                    das Codieren das Rückgrat moderner Technologie. Aber was genau ist das Coding?
                    In diesem umfassenden Leitfaden tauchen wir in die Welt des Programmierens ein,
                    erkunden seine Grundlagen, Vorteile und wie es unsere digitale Landschaft prägt.
                    Egal, ob Du ein neugieriger Anfänger bist oder daran interessiert bist, eine
                    Karriere in der Technologie zu verfolgen, dieser Artikel wird das Programmieren
                    entmystifizieren und dir eine solide Grundlage bieten, um deine Codierungsreise
                    zu beginnen. Um das Konzept des Codings zu erfassen, müssen wir seine
                    grundlegenden Bausteine verstehen. Im Kern ist das Programmieren der Prozess,
                    bei dem eine Programmiersprache verwendet wird, um Anweisungen zu schreiben, die
                    ein Computer verstehen und ausführen kann. Diese Anweisungen, auch Code genannt,
                    werden unter Verwendung einer Kombination von Buchstaben, Zahlen und Symbolen
                    geschrieben und bilden eine logische Abfolge, um bestimmte Aufgaben auszuführen.
       
                </p>
                <h4>Wo sind wir?</h4>
                <img src={Firma} alt="firma" />
            </div>
            <Footer />
    </div>

    );
}
export default AboutUs;
