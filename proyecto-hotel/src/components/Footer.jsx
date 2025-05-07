import { Link } from "react-router-dom";

const Footer = () => {
    
    return (
        <footer className="Footer">
            <h4 className="Footer-h4">Ibiza, Spain</h4>
            <form className="Footer-form" >
                <label>
                    <input className="Footer-input" placeholder="escribe-aqui@tu-email.com" type="email" />
                </label>
                <button className="Footer-btn" type="submit">Recibir ofertas</button>
            </form>
            <Link className="Footer-link" target="_blank" to={'https://www.instagram.com/'}>Instagram</Link>
        </footer>
    );
}

export default Footer;