import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import img from "./logotipo.png";

function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Link to="/">
                    <img src={img} alt="Logotipo" />
                    <span>Pastel Mania</span>
                </Link>
            </div>
            <nav>
                <Link to="/">Início</Link>
                <Link to="/sobreNos">Sobre Nós</Link>
                {/* <Link to="/galeria">Galeria</Link> */}
            </nav>
        </header>
    );
}

export default Header;
