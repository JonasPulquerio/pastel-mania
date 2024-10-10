import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import img from "./logotipo.png";


function Header() {
    return (
        <header className={styles.header}>
            <div>
                <Link to="/">
                    <img className={styles.logotipo} src={img} alt="Logotipo" />
                    <span className={styles.titulo}>Pastel Mania</span>
                </Link>
            </div>
            <nav className={styles.navMenu}>
                <ul className={styles.menuLista}>
                  <li><Link to="/">Início</Link></li>
                  <li><Link to="/sobreNos">Sobre Nós</Link></li>
                    {/* <Link to="/galeria">Galeria</Link> */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;
